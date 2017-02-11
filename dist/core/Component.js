System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function RegisterComponent(_a) {
        var _b = _a.selector, selector = _b === void 0 ? "component" : _b, _c = _a.style, style = _c === void 0 ? "" : _c, _d = _a.template, template = _d === void 0 ? "" : _d, _e = _a.svg, svg = _e === void 0 ? "" : _e;
        return function (target) {
            Object.defineProperty(target.prototype, "name", {
                value: selector
            });
            Object.defineProperty(target.prototype, "SVGString", {
                value: svg
            });
            if (style != "") {
                insertRule(selector, style);
            }
        };
    }
    exports_1("RegisterComponent", RegisterComponent);
    function insertRule(selector, style) {
        var styleElement = document.createElement("style");
        styleElement.appendChild(document.createTextNode(""));
        document.head.appendChild(styleElement);
        var cssStyleSheet = styleElement.sheet;
        cssStyleSheet.insertRule(selector + " { " + style + " }", 0);
    }
    var Component;
    return {
        setters: [],
        execute: function () {
            Component = (function () {
                function Component() {
                    this.SVGBitmap = null;
                    this.hasCSSAnimation = false;
                    this.shouldRedraw = false;
                }
                Component.prototype.getStyle = function () {
                    return this.canvas.css.rulesBySelector(this.name);
                };
                Component.prototype.render = function () {
                    if (this.isCSSshape || this.isSVGshape) {
                        if (this.SVGBitmap == null) {
                            this.buildSVG();
                        }
                        else {
                            this.renderSVG();
                        }
                    }
                };
                Component.prototype.renderSVG = function () {
                    this.canvas.ctx.save();
                    this.canvas.ctx.beginPath();
                    this.canvas.ctx.drawImage(this.SVGBitmap, 0, 0);
                    this.canvas.ctx.closePath();
                    this.canvas.ctx.restore();
                };
                Component.prototype.buildSVG = function () {
                    var _this = this;
                    var style = this.canvas.css.rulesBySelector(this.name);
                    var css = "#" + this.name + " { " + this.canvas.css.obj2css(style) + " }";
                    var data = "";
                    if (this.isSVGshape) {
                        data = "<svg xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"" + this.canvas.element.width + "\"\n                height=\"" + this.canvas.element.height + "\">\n                " + this.SVGString + "\n            </svg>";
                    }
                    else {
                        data = "<svg xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"" + this.canvas.element.width + "\"\n                    height=\"" + this.canvas.element.height + "\">\n                <foreignObject width=\"100%\" height=\"100%\">\n                <style>" + css + "</style>\n                <body xmlns=\"http://www.w3.org/1999/xhtml\">\n                    <div id=\"" + this.name + "\"></div>\n                </body></foreignObject>\n            </svg>";
                    }
                    var DOMURL = window.URL;
                    var img = new Image();
                    var svg = new Blob([data], {
                        type: 'image/svg+xml;charset=utf-8'
                    });
                    var url = DOMURL.createObjectURL(svg);
                    img.src = url;
                    img.addEventListener('load', function (e) {
                        _this.SVGBitmap = img;
                        _this.renderSVG();
                        DOMURL.revokeObjectURL(url);
                    });
                };
                return Component;
            }());
            exports_1("Component", Component);
        }
    };
});
