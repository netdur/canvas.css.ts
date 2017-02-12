import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'polygon',
    style: `
        polygon {
            border: 1px black solid;
            background: pink;
        }
    `
})
export class Polygon extends Component {

    constructor(public points: any[] = []) {
        super();
    }

    clearComponent() { }

    render() {
        this.clearComponent();
        const rules = this.getStyle();

        this.path = new Path2D();
        this.path.moveTo(this.points[0].x, this.points[0].y);
        this.path.lineTo(this.points[1].x, this.points[1].y);
        this.path.lineTo(this.points[2].x, this.points[2].y);
        this.path.closePath();

        this.canvas.ctx.save();
        this.canvas.ctx.fillStyle = rules['background-color'];
        this.canvas.ctx.fill(this.path);
        this.canvas.ctx.lineWidth = parseInt(rules['border-top-width']);
        this.canvas.ctx.strokeStyle = rules['border-top-style']; // solid
        this.canvas.ctx.stroke(this.path);
        this.canvas.ctx.restore();
    }
}