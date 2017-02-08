## Canvas CSS — CSS and SVG for Canvas Components in Typescript

this is part of canvas web components implement, this library helps dealing with CSS and related resources

this is a polygon example, reading CSS from both decorator and style tag (note index.html)

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


here pacman shape using CSS

    import { Component, RegisterComponent } from "../core/Component";

    @RegisterComponent({
        selector: 'pacman',
        style: `
            width: 0px;
            height: 0px;
            border-right: 60px solid transparent;
            border-top: 60px solid lightblue;
            border-bottom: 60px solid lightblue;
            border-left: 60px solid lightblue;
            border-top-right-radius: 60px;
            border-top-left-radius: 60px;
            border-bottom-right-radius: 60px;
            border-bottom-left-radius: 60px;
        `
    })
    export class Pacman extends Component {
        isCSSShape = true
    }

here a circle using SVG

    import { Component, RegisterComponent } from "../core/Component";

    @RegisterComponent({
        selector: 'circle',
        svg: '<circle cx="200" cy="160" r="40" stroke="black" stroke-width="3" fill="red" />'
    })
    export class Circle extends Component {
        isSVGshape = true
    }

## License

Released under a non-commercial BSD license
