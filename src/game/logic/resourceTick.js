var ResourceTick = (function () {
    function ResourceTick() {
    }
    ResourceTick.perTick = function (resource) {
        if ((resource.value + resource.perTickCache) <= 0) {
            resource.value = 0;
        }
        else if (resource.maxValue != -1 && (resource.value + resource.perTickCache) >= resource.maxValue) {
            resource.value = resource.maxValue;
        }
        else {
            resource.value += resource.perTickCache;
        }
    };
    return ResourceTick;
}());
export default ResourceTick;
ResourceTick.tick = function (game, resource) {
    if (resource.perTick != null && resource.perTickCache != 0) {
        if (resource.condition != null && resource.condition.length > 0) {
            var cond = resource.condition;
            var value = game[cond[0][0].type][cond[0][0].element][cond[0][0].item];
            var result;
            switch (cond[0][2]) {
                case 0 /* greaterThan */:
                    result = value > cond[0][1];
                    break;
                case 1 /* lessThan */:
                    result = value < cond[0][1];
                    break;
                case 2 /* equalTo */:
                    result = value == cond[0][1];
                    break;
                default:
                    result = false;
                    break;
            }
            if (result) {
                this.perTick(resource);
            }
        }
        else {
            this.perTick(resource);
        }
    }
};
//# sourceMappingURL=resourceTick.js.map