import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'polygon',
    style: `
        border: 1px black solid;
        background: pink;
    `
})
export class Polygon extends Component {

    constructor(public points: any[] = []) {
        super();
        this.points.push(this.points[0]);
    }

    render() {
        const rules = this.getStyle();

        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = rules['background-color']; // pink or lightblue
        this.canvas.ctx.lineWidth = parseInt(rules['border-top-width']); // 1px
        this.canvas.ctx.strokeStyle = rules['border-top-style']; // solid

        this.points.forEach((point, i) => {
            if (i != 0) {
                this.canvas.ctx.lineTo(point.x, point.y);
            } else {
                this.canvas.ctx.moveTo(point.x, point.y);
            }
        });

        this.canvas.ctx.fill();
        this.canvas.ctx.stroke();
        this.canvas.ctx.closePath();
    }
}