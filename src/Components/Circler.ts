import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'circler',
    style: `
        background: green;
        top: 0px;
        left: 0px;
    `
})
export class Circler extends Component {

    radius = 40;
    angel = 0;

    clearComponent() {}

    render() {
        // this.clearComponent();
        const rules = this.getStyle();

        this.canvas.ctx.save();
        this.canvas.ctx.beginPath();

        const radius = this.radius + 10 * Math.abs(Math.cos(this.angel));
        this.canvas.ctx.arc(200, 300, radius, 0, Math.PI * 2, false);
        this.canvas.ctx.fillStyle = rules['background-color'];
        this.canvas.ctx.fill();

        this.canvas.ctx.closePath();
        this.canvas.ctx.restore();
    }
}