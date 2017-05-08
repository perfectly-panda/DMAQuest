import Calculator from './calculator';
var playerActions = (function () {
    function playerActions() {
    }
    playerActions.prototype.buyPlotItem = function (game, item) {
        var buy = Calculator.buy(game.resources, item.pricing);
        if (buy[0]) {
            game.story[item.story].visible = true;
            game.plot[item.name].available = !buy[1];
            for (var key in item.bonuses) {
                if (item.bonuses.hasOwnProperty(key)) {
                    Calculator.bonusFunc(game.resources, item.bonuses[key]);
                }
            }
        }
    };
    playerActions.prototype.buyUpgradeItem = function (game, item) {
        var buy = Calculator.buy(game.resources, item.pricing);
        if (buy[0]) {
            item.completed = true;
            for (var key in item.bonuses) {
                if (item.bonuses.hasOwnProperty(key)) {
                    Calculator.bonusFunc(game.resources, item.bonuses[key]);
                }
            }
            for (var key in item.modifies) {
                if (item.modifies.hasOwnProperty(key)) {
                    Calculator.modifyFunc(game, item.modifies[key]);
                }
            }
        }
    };
    return playerActions;
}());
export default playerActions;
//# sourceMappingURL=playerActions.js.map