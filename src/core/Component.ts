import { Canvas } from "./Canvas";

export abstract class Component {

    canvas: Canvas
    component: string
    svg: string

    isCSSShape: boolean
    isSVGshape: boolean

    getStyle() {
        const cssStyleRule = this.canvas.css.styleSheetBySelector(this.component);
        return this.canvas.css.getDefinedRules(cssStyleRule.style);
    }

    render() {
        if (this.isCSSShape || this.isSVGshape) {
            this.renderSvg();
        }
    }

    private renderSvg() {
        const style = this.canvas.css.styleSheetBySelector(this.component);

        let data = "";
        if (this.isSVGshape) {
            data = `<svg xmlns="http://www.w3.org/2000/svg"
                width="${this.canvas.element.width}"
                height="${this.canvas.element.height}">
                ${this.svg}
            </svg>`;
        } else {
            data = `<svg xmlns="http://www.w3.org/2000/svg"
                    width="${this.canvas.element.width}"
                    height="${this.canvas.element.height}">
                <foreignObject width="100%" height="100%">
                <style>#${style.cssText}</style>
                <body xmlns="http://www.w3.org/1999/xhtml">
                    <div id="${this.component}"></div>
                </body></foreignObject>
            </svg>`;
        }

        const DOMURL = window.URL;
        const img = new Image();
        const svg = new Blob([data], {
            type: 'image/svg+xml;charset=utf-8'
        });

        const url = DOMURL.createObjectURL(svg);
        img.src = url;

        img.addEventListener('load', e => {
            this.canvas.ctx.beginPath();
            this.canvas.ctx.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
            this.canvas.ctx.closePath();
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

        Object.defineProperty(target.prototype, "component", {
            value: selector
        });

        Object.defineProperty(target.prototype, "svg", {
            value: svg
        });

        if (style != "") {
            insertRule(selector, style);
        }
	}
}

function insertRule(selector: string, style: string) {
    const styleElement: HTMLStyleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(""));
    document.head.appendChild(styleElement);

    const cssStyleSheet = styleElement.sheet as CSSStyleSheet;
    cssStyleSheet.insertRule(`${selector} { ${style} }`, 0);
}