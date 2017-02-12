import { CSS } from "./CSS";
import { Component } from "./Component";
import { AnimationFrameQueue } from "./AnimationFrameQueue";

export class Canvas {

	id: string
	element: HTMLCanvasElement
	ctx: CanvasRenderingContext2D

	queue = new AnimationFrameQueue()
	css = new CSS()

	private tree: Set<Component> = new Set()

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

		window.addEventListener('resize', e => {
			if (fullScreen) {
				this.element.width = document.body.clientWidth;
				this.element.height = document.body.clientHeight;
				this.render();
			}
		});

		/* init properties */
		this.id = id;
		this.ctx = this.element.getContext("2d");

		/* canvas events */
		this.element.addEventListener("click", e => this.emit("click", e));
	}

	emit(label: string, e: MouseEvent) {
		const position = this.getPosition();
		const x = e.clientX - position.x;
  		const y = e.clientY - position.y;
		this.tree.forEach(component => {
			if (component.path != null
				&& this.ctx.isPointInPath(component.path, x, y)) {
					component.emit(label, e);
			}
		});
	}


	add(component: Component, render: boolean = false) {
		component.canvas = this;
		this.tree.add(component);
		if (render == false) return;
		this.queue.add(() => {
			component.render();
		});
	}

	async nextFrame() {
		this.render();
		return await AnimationFrameQueue.nextFrame();
	}

	getPosition(el: HTMLElement = this.element) {
		let x = 0;
		let y = 0;
 
		while (el) {
			x += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			y += (el.offsetTop - el.scrollTop + el.clientTop);
			el = el.offsetParent as HTMLElement;
		}

		return {
			x: x,
			y: y
		};
	}

	render() {
		this.queue.add(() => {
			/* just for demo, in final version, only diff will redrawan */
			this.ctx.save();
			this.ctx.fillStyle = "#eeeeee";
			this.ctx.fillRect(0, 0, this.element.width, this.element.height);
			this.ctx.restore();
			this.tree.forEach(component => {
				component.render();
				/*
				if (component.shouldRedraw == true) {
					component.clearComponent();
					component.render();
				}
				*/
			});
		});
	}
}
