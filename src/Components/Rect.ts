import { Component, RegisterComponent } from "../core/Component";
import { CSS } from "../core/CSS";

@RegisterComponent({
    selector: 'rect',
    style: `
        rect {
            border: 1px red solid;
            background: green;
            top: 0px;
            left: 0px;
            width: 100px;
            height: 50px;
        }
    `
})
export class Rect extends Component {

    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0
    rules: Object

    clearComponent() {
        
    }

    constructor() {
        super();

        // should be used to set initial bounds
        const css = new CSS();
        this.rules = css.rulesBySelector(this.name);
        this.x = parseInt(this.rules['left']);
        this.y = parseInt(this.rules['top']);
        this.width = parseInt(this.rules['width']);
        this.height = parseInt(this.rules['height']);
    }

    render() {
        // this.clearComponent();
        this.path = new Path2D();
        this.path.rect(this.x, this.y, this.width, this.height);

        this.canvas.ctx.save();
        this.canvas.ctx.fillStyle = this.rules['background-color'];
        this.canvas.ctx.fill(this.path);
        this.canvas.ctx.lineWidth = parseInt(this.rules['border-top-width']);
        this.canvas.ctx.strokeStyle = this.rules['border-top-color'];
        this.canvas.ctx.stroke(this.path);
        this.canvas.ctx.restore();
    }
}