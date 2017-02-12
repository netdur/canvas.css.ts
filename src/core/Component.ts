import { Canvas } from "./Canvas";

export abstract class Component {

    canvas: Canvas
    name: string
    path: Path2D

    SVGString: string
    SVGBitmap: HTMLImageElement = null

    isCSSshape: boolean
    isSVGshape: boolean

    shouldRedraw: boolean = false
    abstract clearComponent(): void;

    // status:

    private isOver: boolean = false

    constructor() {
        this.addListener("mouseover", (e: MouseEvent) => {
            console.log(`${this.name}:hover`);
        });
        this.addListener("mouseout", (e: MouseEvent) => {
            console.log(`${this.name}`);
        });
    }

    /* events */
    listeners = new Map()

    addListener(label: string, callback: Function) {
        this.listeners.has(label) || this.listeners.set(label, []);
        this.listeners.get(label).push(callback);
    }

    removeListener(label: string, callback: Function) {}

    emit(label: string, ...args: any[]) {
        let listeners = this.listeners.get(label);
        if (listeners && listeners.length) {
            listeners.forEach((listener: Function) => {
                listener(...args); 
            });
            return true;
        }
        return false;
    }

    getStyle() {
        return this.canvas.css.rulesBySelector(this.name);
    }

    render() {
        if (this.isCSSshape || this.isSVGshape) {
            if (this.SVGBitmap == null) {
                this.buildSVG();
            } else {
                this.renderSVG();
            }
        }
    }

    private renderSVG() {
        this.canvas.ctx.save();
        this.canvas.ctx.beginPath();
        this.canvas.ctx.drawImage(this.SVGBitmap, 0, 0);
        this.canvas.ctx.closePath();
        this.canvas.ctx.restore();
    }

    private buildSVG() {
        const style = this.canvas.css.rulesBySelector(this.name);
        const css = `#${this.name} { ${this.canvas.css.obj2css(style)} }`

        let data = "";
        if (this.isSVGshape) {
            data = `<svg xmlns="http://www.w3.org/2000/svg"
                width="${this.canvas.element.width}"
                height="${this.canvas.element.height}">
                ${this.SVGString}
            </svg>`;
        } else {
            data = `<svg xmlns="http://www.w3.org/2000/svg"
                    width="${this.canvas.element.width}"
                    height="${this.canvas.element.height}">
                <foreignObject width="100%" height="100%">
                <style>${css}</style>
                <body xmlns="http://www.w3.org/1999/xhtml">
                    <div id="${this.name}"></div>
                </body></foreignObject>
            </svg>`;
        }

        const DOMURL = window.URL;
        const img: HTMLImageElement = new Image();
        const svg = new Blob([data], {
            type: 'image/svg+xml;charset=utf-8'
        });

        const url = DOMURL.createObjectURL(svg);
        img.src = url;

        img.addEventListener('load', e => {
            this.SVGBitmap = img;
            this.renderSVG()
            DOMURL.revokeObjectURL(url);
        });
    }
}

export function RegisterComponent({
	selector = "component",
	style = "",
	template = "",
    svg = ""
} : {
	selector: string,
	style?: string,
	template?: string,
    svg?: string
}) {
	return (target: Function) => {

        Object.defineProperty(target.prototype, "name", {
            value: selector
        });

        Object.defineProperty(target.prototype, "SVGString", {
            value: svg
        });

        if (style != "") {
            // insertRule(selector, style);
            const styleElement: HTMLStyleElement = document.createElement("style");
            styleElement.appendChild(document.createTextNode(""));
            document.head.appendChild(styleElement);

            const cssStyleSheet = styleElement.sheet as CSSStyleSheet;
            cssStyleSheet.insertRule(`${selector} { ${style} }`, 0);
        }

	}
}