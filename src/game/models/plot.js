var Plot = (function () {
    function Plot(name, description, stroyText, parents, unlocks, pricing, bonuses) {
        this.type = 0 /* plot */;
        this.visible = false;
        this.tab = 0 /* story */;
        this.name = name;
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