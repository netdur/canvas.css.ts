import { Canvas } from "./core/Canvas";
import { Pacman } from "./Components/Pacman";
import { Polygon } from "./Components/Polygon";
import { Circle } from "./Components/Circle";

class Main {
	constructor() {
		const canvas = new Canvas({
			id: 'c',
			width: 600,
			height: 500
		});

		const pacman = new Pacman();
		canvas.add(pacman);

		const polygon = new Polygon({
			points: [{x: 150, y: 100}, {x: 200, y: 50}, {x: 250, y: 100}]
		});
		canvas.add(polygon);

		const circle = new Circle();
		canvas.add(circle);
	}
}

// document.addEventListener("DOMContentLoaded", e => new Main(), false);
new Main()
