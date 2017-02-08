export class CSS {
	rulesBySelector(selector: string) : Object {
		const definedRules = {}

		for (let i = 0; i < document.styleSheets.length; i++) {
			const styleSheet = document.styleSheets[i] as CSSStyleSheet;
			for (let j = 0; j < styleSheet.cssRules.length; j++) {
				const rules = styleSheet.cssRules[j] as CSSStyleRule;
				if (rules.selectorText != selector) continue;
				for (let rule in rules.style) {
					// if rule is not a number, continue
					if (isNaN(parseInt(rule))) continue;
					// get numbered value as key
					const key = rules.style[rule];
					definedRules[key] = rules.style[key];
				}
			}
		}

		return definedRules;
	}
	obj2css(css: Object) : string {
		let res = "";
		for (let key in css) {
			res += `${key}: ${css[key]};`;
		}
		return res;
	}
}