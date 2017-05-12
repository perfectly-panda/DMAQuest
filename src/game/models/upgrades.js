import { Type } from './enums/type';
var Upgrade = (function () {
    function Upgrade(name, description, negates, parents, unlocks, pricing, bonuses, modifies) {
        this.type = Type.upgrade;
        this.visible = false;
        this.available = false;
        this.value = false;
        this.tab = 1 /* upgrades */;
        this.name = name;
        this.description = description;
        this.negates = negates;
        this.parents = parents;
        this.unlocks = unlocks;
        this.pricing = pricing;
        this.bonuses = bonuses;
        this.modifies = modifies;
    }
    return Upgrade;
}());
export default Upgrade;
//# sourceMappingURL=upgrades.js.map