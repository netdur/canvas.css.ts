System.register(["./core/Canvas", "./Components/Pacman", "./Components/Polygon", "./Components/Circle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Canvas_1, Pacman_1, Polygon_1, Circle_1, Main;
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
            }
        ],
        execute: function () {
            Main = (function () {
                function Main() {
                    var canvas = new Canvas_1.Canvas({
                        id: 'c',
                        width: 600,
                        height: 500
                    });
                    var pacman = new Pacman_1.Pacman();
                    canvas.add(pacman);
                    var polygon = new Polygon_1.Polygon([{ x: 150, y: 100 }, { x: 200, y: 50 }, { x: 250, y: 100 }]);
                    canvas.add(polygon);
                    var circle = new Circle_1.Circle();
                    canvas.add(circle);
                }
                return Main;
            }());
            new Main();
        }
    };
});
