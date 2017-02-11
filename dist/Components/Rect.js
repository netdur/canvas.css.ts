System.register(["../core/Component"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var Component_1, Rect;
    return {
        setters: [
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }
        ],
        execute: function () {
            Rect = (function (_super) {
                __extends(Rect, _super);
                function Rect() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Rect.prototype.clearComponent = function () { };
                Rect.prototype.render = function () {
                    var rules = this.getStyle();
                    this.canvas.ctx.save();
                    this.canvas.ctx.beginPath();
                    this.canvas.ctx.rect(parseInt(rules['left']), parseInt(rules['top']), parseInt(rules['width']), parseInt(rules['height']));
                    this.canvas.ctx.fillStyle = rules['background-color'];
                    this.canvas.ctx.fill();
                    this.canvas.ctx.lineWidth = parseInt(rules['border-top-width']);
                    this.canvas.ctx.strokeStyle = rules['border-top-color'];
                    this.canvas.ctx.stroke();
                    this.canvas.ctx.closePath();
                    this.canvas.ctx.restore();
                };
                return Rect;
            }(Component_1.Component));
            Rect = __decorate([
                Component_1.RegisterComponent({
                    selector: 'rect',
                    style: "\n        border: 1px red solid;\n        background: green;\n        top: 0px;\n        left: 0px;\n        width: 100px;\n        height: 50px;\n    "
                })
            ], Rect);
            exports_1("Rect", Rect);
        }
    };
});
