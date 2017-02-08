export class AnimationFrameQueue {

    queue: number[] = new Array()

    add(callback: Function) {
        this.queue.push(requestAnimationFrame(() => {
            this.queue.shift();
            callback();
        }));
    }

    clear() {
        for (var i = 0, len = this.queue.length; i < len; i++) {
            window.cancelAnimationFrame(this.queue[i]);
        }
    }
}