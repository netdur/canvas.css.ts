import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'rect',
    style: `
        border: 1px red solid;
        background: green;
        top: 0px;
        left: 0px;
        width: 100px;
        height: 50px;
    `
})
export class Rect extends Component {

    clearComponent() {}

    render() {
        // this.clearComponent();
        const rules = this.getStyle();

        this.canvas.ctx.save();
        this.canvas.ctx.beginPath();
        this.canvas.ctx.rect(
            parseInt(rules['left']),
            parseInt(rules['top']),
            parseInt(rules['width']),
            parseInt(rules['height']),
        )
        this.canvas.ctx.fillStyle = rules['background-color'];
        this.canvas.ctx.fill();
        this.canvas.ctx.lineWidth = parseInt(rules['border-top-width']);
        this.canvas.ctx.strokeStyle = rules['border-top-color'];
        this.canvas.ctx.stroke();
        this.canvas.ctx.closePath();
        this.canvas.ctx.restore();
    }
}