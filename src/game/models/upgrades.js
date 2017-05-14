import Flags from './flags';
var Upgrade = (function () {
    function Upgrade(name, description, identifier, optionalParameters) {
        this.flags = new Flags();
        this.value = false;
        this.parents = [];
        this.pricing = [];
        this.negates = [];
        this.bonuses = {};
        this.modifies = {};
        this.name = name;
        this.description = description;
        this.identifier = identifier;
        if (optionalParameters.parents != null)
            this.parents = optionalParameters.parents;
        if (optionalParameters.pricing != null)
            this.pricing = optionalParameters.pricing;
        if (optionalParameters.negates != null)
            this.negates = optionalParameters.negates;
        if (optionalParameters.bonuses != null)
            this.bonuses = optionalParameters.bonuses;
        if (optionalParameters.modifies != null)
            this.modifies = optionalParameters.modifies;
        if (optionalParameters.buyOnce != null)
            this.flags.buyOnce = optionalParameters.buyOnce;
    }
    return Upgrade;
}());
export default Upgrade;
//# sourceMappingURL=upgrades.js.map