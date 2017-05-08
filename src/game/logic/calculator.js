import Identifier from '../models/identifier';
var Calculator = (function () {
    function Calculator() {
    }
    Calculator._calculateBonus = function (bonus) {
        var sum = function (sum, cur) {
            return sum + cur[1];
        };
        var additives = bonus.additives.reduce(sum, bonus.baseValue);
        var multipliers = bonus.multiplier.reduce(sum, 1);
        return additives * multipliers;
    };
    return Calculator;
}());
export default Calculator;
Calculator.bonusFunc = function (resources, bonus) {
    switch (bonus.bonusType) {
        case 0 /* add */:
            resources[bonus.resource].value += this._calculateBonus(bonus);
            resources[bonus.resource].visible = true;
            break;
    }
};
Calculator.modifyFunc = function (game, modifier) {
    var modifies = modifier.modifies;
    var loopBack = modifier.loopBack;
    switch (modifier.modifierType) {
        case 0 /* add */:
            var item = game[modifies.type][modifies.element][modifies.item];
            item.additives.push([new Identifier(loopBack.type, loopBack.element, loopBack.item), modifier.value]);
            break;
        case 1 /* multiply */:
            var item = game[modifies.type][modifies.element].bonuses[modifies.item];
            item.multiplier.push([new Identifier(loopBack.type, loopBack.element, loopBack.item), modifier.value]);
            break;
    }
};
Calculator.buy = function (resources, cost) {
    var result = true;
    var disable = false;
    var temp = [];
    for (var i = 0; i < cost.length; i++) {
        if (cost[i][1] <= resources[cost[i][0]].value) {
            temp.push([cost[i][0]], cost[i][1]);
            resources[cost[i][0]].value -= cost[i][1];
        }
        else {
            result = false;
            break;
        }
    }
    if (result) {
        for (var k = 0; k < cost.length; k++) {
            cost[k][1] = +(cost[k][1] * cost[k][2]).toFixed(4);
            if (cost[k][1] > resources[cost[k][0]].value) {
                disable = true;
            }
        }
    }
    else {
        for (var j = 0; j < temp.length; j++) {
            resources[temp[i][0]].value += temp[i][1];
        }
    }
    return [result, disable];
};
Calculator.updateCache = function (game, resource) {
    if (resource.perTick != null) {
        resource.perTickCache = this._calculateBonus(resource.perTick);
    }
};
//# sourceMappingURL=calculator.js.map