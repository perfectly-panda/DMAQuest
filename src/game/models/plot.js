import { Type } from './enums/type';
var Plot = (function () {
    function Plot(name, story, description, negates, parents, unlocks, pricing, bonuses, buyOnce) {
        if (buyOnce === void 0) { buyOnce = false; }
        this.type = Type.plot;
        this.visible = false;
        this.available = false;
        this.tab = 0 /* story */;
        this.negated = false;
        this.value = false;
        this.buyOnce = false;
        this.name = name;
        this.story = story;
        this.description = description;
        this.negates = negates;
        this.parents = parents;
        this.unlocks = unlocks;
        this.pricing = pricing;
        this.bonuses = bonuses;
        this.buyOnce = buyOnce;
    }
    return Plot;
}());
export default Plot;
//# sourceMappingURL=plot.js.map