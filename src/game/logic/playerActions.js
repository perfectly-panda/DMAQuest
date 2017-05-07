import Calculator from './calculator';
var playerActions = (function () {
    function playerActions() {
    }
    playerActions.prototype.buyPlotItem = function (game, item) {
        var buy = Calculator.buy(game.resources, item.pricing);
        if (buy[0]) {
            game.story[item.name].visible = true;
            item.available = !buy[1];
            for (var i = 0; i < item.bonuses.length; i++) {
                var bonus = item.bonuses[i];
                Calculator.bonusFunc(game.resources, bonus[0], bonus[1], bonus[2]);
            }
        }
    };
    return playerActions;
}());
export default playerActions;
//# sourceMappingURL=playerActions.js.map