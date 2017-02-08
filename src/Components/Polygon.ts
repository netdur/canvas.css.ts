import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'polygon',
    style: `
        border: 1px black solid;
        background: pink;
    `
})
export class Polygon extends Component {

    points: any[]

    constructor({
        points = []
    } : {
        points: any[]
    }) {
        super();
        points.push(points[0]);
        this.points = points;
    }

    render() {
        const rules = this.getStyle();

        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = rules['background-color'];
        this.canvas.ctx.lineWidth = parseInt(rules['border-top-width']);
        this.canvas.ctx.strokeStyle = rules['border-top-style'];

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