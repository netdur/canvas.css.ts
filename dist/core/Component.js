System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function RegisterComponent(_a) {
        var _b = _a.selector, selector = _b === void 0 ? "component" : _b, _c = _a.style, style = _c === void 0 ? "" : _c, _d = _a.template, template = _d === void 0 ? "" : _d, _e = _a.svg, svg = _e === void 0 ? "" : _e;
        return function (target) {
            Object.defineProperty(target.prototype, "component", {
                value: selector
            });
            Object.defineProperty(target.prototype, "svg", {
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
                }
                Component.prototype.getStyle = function () {
                    var cssStyleRule = this.canvas.css.styleSheetBySelector(this.component);
                    return this.canvas.css.getDefinedRules(cssStyleRule.style);
                };
                Component.prototype.render = function () {
                    if (this.isCSSShape || this.isSVGshape) {
                        this.renderSvg();
                    }
                };
                Component.prototype.renderSvg = function () {
                    var _this = this;
                    var style = this.canvas.css.styleSheetBySelector(this.component);
                    var data = "";
                    if (this.isSVGshape) {
                        data = "<svg xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"" + this.canvas.element.width + "\"\n                height=\"" + this.canvas.element.height + "\">\n                " + this.svg + "\n            </svg>";
                    }
                    else {
                        data = "<svg xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"" + this.canvas.element.width + "\"\n                    height=\"" + this.canvas.element.height + "\">\n                <foreignObject width=\"100%\" height=\"100%\">\n                <style>#" + style.cssText + "</style>\n                <body xmlns=\"http://www.w3.org/1999/xhtml\">\n                    <div id=\"" + this.component + "\"></div>\n                </body></foreignObject>\n            </svg>";
                    }
                    var DOMURL = window.URL;
                    var img = new Image();
                    var svg = new Blob([data], {
                        type: 'image/svg+xml;charset=utf-8'
                    });
                    var url = DOMURL.createObjectURL(svg);
                    img.src = url;
                    img.addEventListener('load', function (e) {
                        _this.canvas.ctx.beginPath();
                        _this.canvas.ctx.drawImage(img, 0, 0);
                        DOMURL.revokeObjectURL(url);
                        _this.canvas.ctx.closePath();
                    });
                };
                return Component;
            }());
            exports_1("Component", Component);
        }
    };
});
