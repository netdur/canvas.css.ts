System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CSS;
    return {
        setters: [],
        execute: function () {
            CSS = (function () {
                function CSS() {
                }
                CSS.prototype.styleSheetBySelector = function (selector) {
                    for (var i = 0; i < document.styleSheets.length; i++) {
                        var styleSheet = document.styleSheets[i];
                        for (var j = 0; j < styleSheet.cssRules.length; j++) {
                            var rules = styleSheet.cssRules[j];
                            if (rules.selectorText === selector)
                                return rules;
                        }
                    }
                };
                CSS.prototype.getDefinedRules = function (rules) {
                    var definedRules = {};
                    for (var rule in rules) {
                        if (isNaN(parseInt(rule)))
                            continue;
                        var key = rules[rule];
                        definedRules[key] = rules[key];
                    }
                    return definedRules;
                };
                return CSS;
            }());
            exports_1("CSS", CSS);
        }
    };
});
