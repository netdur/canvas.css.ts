import { Component, RegisterComponent } from "../core/Component";
import { CSS } from "../core/CSS";

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
    }

    clearComponent() {
        const bounds = this.calcBounds();
        this.canvas.ctx.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
    }

    calcBounds() {
        let x: Array<number> = [];
        let y: Array<number> = [];
        this.points.forEach(point => {
            x.push(point.x);
            y.push(point.y);
        });
        let minx = Math.min(...x);
        let miny = Math.min(...y);
        return {
            x: minx,
            y: miny,
            width: Math.max(...x) - minx,
            height: Math.max(...y) - miny
        }
    }

    render() {
        // this.clearComponent();
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