import { Canvas } from "./core/Canvas";
import { Easing } from "./core/Easing";

import { Pacman } from "./Components/Pacman";
import { Polygon } from "./Components/Polygon";
import { Circle } from "./Components/Circle";
import { Rect } from "./Components/Rect";
import { Circler } from "./Components/Circler";

class Main {
	canvas: Canvas
	constructor() {
		this.canvas = new Canvas({
			id: 'c',
			fullScreen: true
		});

		const pacman = new Pacman();
		this.canvas.add(pacman);

		const polygon = new Polygon([{x: 150, y: 100}, {x: 200, y: 50}, {x: 250, y: 100}]);
		this.canvas.add(polygon);

		const circle = new Circle();
		this.canvas.add(circle);

		const rect = new Rect();
		this.canvas.add(rect);
		rect.addListener("click", (e: MouseEvent) => {
			this.animateRect(rect);
		});

		const circler = new Circler();
		circler.radius = 30;
		this.canvas.add(circler);
		circler.addListener("click", (e: MouseEvent) => {
			this.animateCircler(circler);
		});

		const aniPolygon = new Polygon([{x: 200, y: 150}, {x: 250, y: 100}, {x: 300, y: 150}]);
		this.canvas.add(aniPolygon);
		aniPolygon.addListener("click", (e: MouseEvent) => {
			this.animatePolygon(aniPolygon);
		});

		this.canvas.render();
	}

	async animateRect(rect: Rect) {
		let iteration = 0;
		const totalIterations = 200;
		while (true) {
			rect.x = Easing.easeInCubic(iteration, -100, 600, totalIterations);
			iteration = (iteration < totalIterations) ? iteration + 1 : 0;
			await this.canvas.nextFrame();
		}
	}

	async animateCircler(circler: Circler) {
		while (true) {
			circler.angel += Math.PI / 64;
			await this.canvas.nextFrame();
		}
	}

	async animatePolygon(polygon: Polygon) {
		// boring linear
		for (let i = 0; i < 210; i++) {
			polygon.points.forEach((point, i) => {
				polygon.points[i] = {
					x: point.x + 1,
					y: point.y + 1
				}
			});

			// wait for next frame then continue loop
			await this.canvas.nextFrame();
		}
	}
}

// document.addEventListener("DOMContentLoaded", e => new Main(), false);
new Main()
