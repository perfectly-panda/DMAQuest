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
};
Checks.purchasable = function (game) {
    for (var item in game.plot) {
        if (game.plot.hasOwnProperty(item)) {
            if (!game.plot[item].available) {
                var nowAvailable = true;
                var pricing = game.plot[item].pricing;
                for (var i = 0; i < pricing.length; i++) {
                    parent = pricing[i];
                    if (game.resources[parent[0]].value < parent[1]) {
                        nowAvailable = false;
                    }
                }
                if (nowAvailable)
                    game.plot[item].available = true;
            }
        }
    }
};
Checks.availableLoop = function (item, section, game) {
    if (section.hasOwnProperty(item)) {
        if (!section[item].visible) {
            var nowAvailable = true;
            var parents = section[item].parents;
            for (var i = 0; i < parents.length; i++) {
                parent = parents[i];
                if (game[parent[1]][parent[0]].value < parent[2]) {
                    nowAvailable = false;
                }
            }
            if (nowAvailable) {
                section[item].visible = true;
            }
        }
    }
};
//# sourceMappingURL=checks.js.map