import { Type } from './enums/type';
var Plot = (function () {
    function Plot(name, story, description, negates, parents, unlocks, pricing, bonuses) {
        this.type = Type.plot;
        this.visible = false;
        this.available = false;
        this.tab = 0 /* story */;
        this.negated = false;
        this.purchased = false;
        this.name = name;
        this.story = story;
        this.description = description;
        this.negates = negates;
        this.parents = parents;
        this.unlocks = unlocks;
        this.pricing = pricing;
        this.bonuses = bonuses;
    }
    return Plot;
}());
export default Plot;
//# sourceMappingURL=plot.js.map