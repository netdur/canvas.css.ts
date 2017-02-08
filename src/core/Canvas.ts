import { CSS } from "./CSS";
import { Component } from "./Component";
import { AnimationFrameQueue } from "./AnimationFrameQueue";

export class Canvas {

	id: string
	element: HTMLCanvasElement
	ctx: CanvasRenderingContext2D

	queue = new AnimationFrameQueue()
	css = new CSS()

	constructor({
		id = "",
		canvas,
		fullScreen = false,
		offScreen = false,
		width = 600,
		height = 400
	} : {
		id?: string,
		canvas?: (string | HTMLCanvasElement),
		fullScreen?: boolean,
		offScreen?: boolean,
		width?: number,
		height?: number
	}) {

		/* create canvas element */
		if (canvas instanceof HTMLCanvasElement) {
			this.element = canvas;
		} if (id != "" && !(canvas instanceof HTMLCanvasElement)) {
			this.element = document.getElementById(id) as HTMLCanvasElement;
		} else {
			this.element = document.createElement("canvas");
			if (!offScreen) {
				document.body.appendChild(this.element);
			}
		}

		/* resize canvas */
		if (fullScreen) {
			this.element.width = document.body.clientWidth;
			this.element.height = document.body.clientHeight;
		} else {
			this.element.width = width;
			this.element.height = height;
		}

		/* init properties */
		this.id = id;
		this.ctx = this.element.getContext("2d");
	}

	add(component: any) {
		component.canvas = this;
		this.queue.add(() => {
			component.render();
		});
	}
}
