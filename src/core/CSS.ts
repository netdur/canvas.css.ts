export class CSS {
	styleSheetBySelector(selector: string) : CSSStyleRule {
		for (let i = 0; i < document.styleSheets.length; i++) {
			const styleSheet = document.styleSheets[i] as CSSStyleSheet;
			for (let j = 0; j < styleSheet.cssRules.length; j++) {
				const rules = styleSheet.cssRules[j] as CSSStyleRule;
				if (rules.selectorText === selector) return rules;
			}
		}
	}
	getDefinedRules(rules: CSSStyleDeclaration) : Object {
		const definedRules = {}
		for (let rule in rules) {
			// if rule is not a number, continue
			if (isNaN(parseInt(rule))) continue;
			// get numbered value as key
			const key = rules[rule];
			definedRules[key] = rules[key];
		}
		return definedRules;
	}
}