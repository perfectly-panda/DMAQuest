var calculator = (function () {
    function calculator() {
    }
    return calculator;
}());
export default calculator;
calculator.bonusFunc = function (resources, resource, type, amount) {
    switch (type) {
        case 0 /* add */:
            resources[resource].value += amount;
            break;
    }
    return resources;
};
calculator.buy = function (resources, cost) {
    var result = true;
    var disable = false;
    var temp = [];
    for (var i = 0; i < cost.length; i++) {
        if (cost[i][1] <= resources[cost[i][0]].value) {
            temp.push([cost[i][0]], cost[i][1]);
            resources[cost[i][0]].value -= cost[i][1];
            if (cost[i][1] > resources[cost[i][0]].value)
                disable = true;
        }
        else {
            result = false;
            break;
        }
    }
    if (result) {
        for (var k = 0; k < cost.length; k++) {
            cost[k][1] = +(cost[k][1] * cost[k][2]).toFixed(4);
        }
    }
    else {
        for (var j = 0; j < temp.length; j++) {
            resources[temp[i][0]].value += temp[i][1];
        }
    }
    return [result, disable];
};
//# sourceMappingURL=calculator.js.map