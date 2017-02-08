import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'circle',
    svg: '<circle cx="200" cy="160" r="40" stroke="black" stroke-width="3" fill="red" />'
})
export class Circle extends Component {
    isSVGshape = true
}