import Flags from './flags';
var Plot = (function () {
    function Plot(name, story, description, identifier, optionalParameters) {
        this.flags = new Flags();
        this.value = false;
        this.parents = [];
        this.unlocks = [];
        this.pricing = [];
        this.negates = [];
        this.bonuses = {};
        this.modifies = {};
        this.name = name;
        this.story = story;
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
    return Plot;
}());
export default Plot;
//# sourceMappingURL=plot.js.map