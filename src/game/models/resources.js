var Resource = (function () {
    function Resource(name, description, perTick, maxValue, condition) {
        if (maxValue === void 0) { maxValue = -1; }
        if (condition === void 0) { condition = null; }
        this.value = 0;
        this.visible = false;
        this.purchasable = false;
        this.resetValue = 0;
        this.perTickCache = 0;
        this.name = name;
        this.description = description;
        this.maxValue = maxValue;
        this.perTick = perTick;
        this.condition = condition;
    }
    return Resource;
}());
export default Resource;
//# sourceMappingURL=resources.js.map