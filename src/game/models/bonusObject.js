var BonusObject = (function () {
    function BonusObject(name, resource, bonusType, baseValue, additives, multiplier, identifier) {
        this.name = name;
        this.resource = resource;
        this.bonusType = bonusType;
        this.baseValue = baseValue;
        this.additives = additives;
        this.multiplier = multiplier;
        this.identifier = identifier;
    }
    return BonusObject;
}());
export default BonusObject;
//# sourceMappingURL=bonusObject.js.map