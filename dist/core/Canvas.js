System.register(["./CSS", "./AnimationFrameQueue"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CSS_1, AnimationFrameQueue_1, Canvas;
    return {
        setters: [
            function (CSS_1_1) {
                CSS_1 = CSS_1_1;
            },
            function (AnimationFrameQueue_1_1) {
                AnimationFrameQueue_1 = AnimationFrameQueue_1_1;
            }
        ],
        execute: function () {
            Canvas = (function () {
                function Canvas(_a) {
                    var _b = _a.id, id = _b === void 0 ? "" : _b, canvas = _a.canvas, _c = _a.fullScreen, fullScreen = _c === void 0 ? false : _c, _d = _a.offScreen, offScreen = _d === void 0 ? false : _d, _e = _a.width, width = _e === void 0 ? 600 : _e, _f = _a.height, height = _f === void 0 ? 400 : _f;
                    this.queue = new AnimationFrameQueue_1.AnimationFrameQueue();
                    this.css = new CSS_1.CSS();
                    if (canvas instanceof HTMLCanvasElement) {
                        this.element = canvas;
                    }
                    if (id != "" && !(canvas instanceof HTMLCanvasElement)) {
                        this.element = document.getElementById(id);
                    }
                    else {
                        this.element = document.createElement("canvas");
                        if (!offScreen) {
                            document.body.appendChild(this.element);
                        }
                    }
                    if (fullScreen) {
                        this.element.width = document.body.clientWidth;
                        this.element.height = document.body.clientHeight;
                    }
                    else {
                        this.element.width = width;
                        this.element.height = height;
                    }
                    this.id = id;
                    this.ctx = this.element.getContext("2d");
                }
                Canvas.prototype.add = function (component) {
                    component.canvas = this;
                    this.queue.add(function () {
                        component.render();
                    });
                };
                return Canvas;
            }());
            exports_1("Canvas", Canvas);
        }
    };
});
