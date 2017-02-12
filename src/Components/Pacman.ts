import { Component, RegisterComponent } from "../core/Component";

@RegisterComponent({
    selector: 'pacman',
    style: `
        pacman {
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
        }
    `
})
export class Pacman extends Component {
    isCSSshape = true
    clearComponent() {}
}