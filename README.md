## Canvas CSS — CSS for Canvas Components in Typescript

this is part of canvas web components implement

this library helps dealing with CSS and related resources, this library also does SVG/CSS shapes and animation

live demo [https://netdur.github.io/canvas.css.ts/](https://netdur.github.io/canvas.css.ts/)

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
