var Checks = (function () {
    function Checks() {
    }
    return Checks;
}());
export default Checks;
Checks.available = function (game) {
    for (var item in game.plot) {
        this.availableLoop(item, game.plot, game);
    }
    for (var item in game.tabs) {
        this.availableLoop(item, game.tabs, game);
    }
    for (var item in game.upgrades) {
        this.availableLoop(item, game.upgrades, game);
    }
    for (var item in game.village) {
        this.availableLoop(item, game.village, game);
    }
};
Checks.purchasable = function (game) {
    for (var item in game.plot) {
        this.purchasableLoop(item, game.plot, game);
    }
    for (var item in game.upgrades) {
        this.purchasableLoop(item, game.upgrades, game);
    }
};
Checks.availableLoop = function (item, section, game) {
    if (section.hasOwnProperty(item)) {
        if (!section[item].flags.visible && !section[item].flags.negated) {
            var nowAvailable = true;
            var parents = section[item].parents;
            for (var i = 0; i < parents.length; i++) {
                var parent = parents[i];
                if (game[parent[0].type][parent[0].element].value < parent[1]) {
                    nowAvailable = false;
                }
            }
            if (nowAvailable) {
                section[item].flags.visible = true;
            }
        }
    }
};
Checks.purchasableLoop = function (item, section, game) {
    if (section.hasOwnProperty(item)) {
        if (!section[item].flags.available && !section[item].flags.negated) {
            var nowAvailable = true;
            var pricing = section[item].pricing;
            for (var i = 0; i < pricing.length; i++) {
                parent = pricing[i];
                if (game.resources[parent[0]].value < parent[1]) {
                    nowAvailable = false;
                }
            }
            if (nowAvailable)
                section[item].flags.available = true;
        }
    }
};
//# sourceMappingURL=checks.js.map