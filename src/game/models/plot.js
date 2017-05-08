import { Type } from './enums/type';
var Plot = (function () {
    function Plot(name, story, description, parents, unlocks, pricing, bonuses) {
        this.type = Type.plot;
        this.visible = false;
        this.available = true;
        this.tab = 0 /* story */;
        this.name = name;
        this.story = story;
        this.description = description;
        this.parents = parents;
        this.unlocks = unlocks;
        this.pricing = pricing;
        this.bonuses = bonuses;
    }
    return Plot;
}());
export default Plot;
//# sourceMappingURL=plot.js.map