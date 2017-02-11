System.register(["./core/Canvas", "./Components/Pacman", "./Components/Polygon", "./Components/Circle", "./Components/Rect", "./Components/Circler"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
        return { next: verb(0), "throw": verb(1), "return": verb(2) };
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __moduleName = context_1 && context_1.id;
    var Canvas_1, Pacman_1, Polygon_1, Circle_1, Rect_1, Circler_1, Main;
    return {
        setters: [
            function (Canvas_1_1) {
                Canvas_1 = Canvas_1_1;
            },
            function (Pacman_1_1) {
                Pacman_1 = Pacman_1_1;
            },
            function (Polygon_1_1) {
                Polygon_1 = Polygon_1_1;
            },
            function (Circle_1_1) {
                Circle_1 = Circle_1_1;
            },
            function (Rect_1_1) {
                Rect_1 = Rect_1_1;
            },
            function (Circler_1_1) {
                Circler_1 = Circler_1_1;
            }
        ],
        execute: function () {
            Main = (function () {
                function Main() {
                    this.canvas = new Canvas_1.Canvas({
                        id: 'c',
                        fullScreen: true
                    });
                    var pacman = new Pacman_1.Pacman();
                    this.canvas.add(pacman);
                    var polygon = new Polygon_1.Polygon([{ x: 150, y: 100 }, { x: 200, y: 50 }, { x: 250, y: 100 }]);
                    this.canvas.add(polygon);
                    var circle = new Circle_1.Circle();
                    this.canvas.add(circle);
                    var rect = new Rect_1.Rect();
                    this.canvas.add(rect);
                    var circler = new Circler_1.Circler();
                    circler.radius = 30;
                    this.canvas.add(circler);
                    this.animateCircler(circler);
                    var aniPolygon = new Polygon_1.Polygon([{ x: 200, y: 150 }, { x: 250, y: 100 }, { x: 300, y: 150 }]);
                    this.canvas.add(aniPolygon);
                    this.animatePolygon(aniPolygon);
                    this.canvas.render();
                }
                Main.prototype.animateCircler = function (circler) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!true) return [3 /*break*/, 2];
                                    circler.angel += Math.PI / 64;
                                    return [4 /*yield*/, this.canvas.nextFrame()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 0];
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                Main.prototype.animatePolygon = function (polygon) {
                    return __awaiter(this, void 0, void 0, function () {
                        var i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < 200)) return [3 /*break*/, 4];
                                    polygon.points.forEach(function (point, i) {
                                        polygon.points[i] = {
                                            x: point.x + 1,
                                            y: point.y + 1
                                        };
                                    });
                                    return [4 /*yield*/, this.canvas.nextFrame()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                return Main;
            }());
            new Main();
        }
    };
});
