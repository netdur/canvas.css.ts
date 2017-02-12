export class Easing {

    static linearEase(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * currentIteration / totalIterations + startValue;
    }

    static easeInQuad(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (currentIteration /= totalIterations) * currentIteration + startValue;
    }

    static easeOutQuad(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return -changeInValue * (currentIteration /= totalIterations) * (currentIteration - 2) + startValue;
    }

    static easeInOutQuad(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * currentIteration * currentIteration + startValue;
        }
        return -changeInValue / 2 * ((--currentIteration) * (currentIteration - 2) - 1) + startValue;
    }

    static easeInCubic(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.pow(currentIteration / totalIterations, 3) + startValue;
    }

    static easeOutCubic(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
    }

    static easeInOutCubic(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * Math.pow(currentIteration, 3) + startValue;
        }
        return changeInValue / 2 * (Math.pow(currentIteration - 2, 3) + 2) + startValue;
    }

    static easeInQuart(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.pow (currentIteration / totalIterations, 4) + startValue;
    }

    static easeOutQuart(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return -changeInValue * (Math.pow(currentIteration / totalIterations - 1, 4) - 1) + startValue;
    }

    static easeInOutQuart(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * Math.pow(currentIteration, 4) + startValue;
        }
        return -changeInValue/2 * (Math.pow(currentIteration - 2, 4) - 2) + startValue;
    }

    static easeInQuint(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.pow (currentIteration / totalIterations, 5) + startValue;
    }

    static easeOutQuint(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 5) + 1) + startValue;
    }

    static easeInOutQuint(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * Math.pow(currentIteration, 5) + startValue;
        }
        return changeInValue / 2 * (Math.pow(currentIteration - 2, 5) + 2) + startValue;
    }

    static easeInSine(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (1 - Math.cos(currentIteration / totalIterations * (Math.PI / 2))) + startValue;
    }

    static easeOutSine(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.sin(currentIteration / totalIterations * (Math.PI / 2)) + startValue;
    }

    static easeInOutSine(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue / 2 * (1 - Math.cos(Math.PI * currentIteration / totalIterations)) + startValue;
    }

    static easeInExpo(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.pow(2, 10 * (currentIteration / totalIterations - 1)) + startValue;
    }

    static easeOutExpo(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    static easeInOutExpo(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * Math.pow(2, 10 * (currentIteration - 1)) + startValue;
        }
        return changeInValue / 2 * (-Math.pow(2, -10 * --currentIteration) + 2) + startValue;
    }

    static easeInCirc(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * (1 - Math.sqrt(1 - (currentIteration /= totalIterations) * currentIteration)) + startValue;
    }

    static easeOutCirc(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        return changeInValue * Math.sqrt(1 - (currentIteration = currentIteration / totalIterations - 1) * currentIteration) + startValue;
    }

    static easeInOutCirc(currentIteration: number, startValue: number, changeInValue: number, totalIterations: number) {
        if ((currentIteration /= totalIterations / 2) < 1) {
            return changeInValue / 2 * (1 - Math.sqrt(1 - currentIteration * currentIteration)) + startValue;
        }
        return changeInValue / 2 * (Math.sqrt(1 - (currentIteration -= 2) * currentIteration) + 1) + startValue;
    }
}