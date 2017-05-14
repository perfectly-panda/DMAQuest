var BonusObject = (function () {
    function BonusObject(bonusType, baseValue, resource, identifier) {
        this.additives = [];
        this.multiplier = [];
        this.bonusType = bonusType;
        this.baseValue = baseValue;
        this.identifier = identifier;
        this.resource = resource;
    }
    return BonusObject;
}());
export default BonusObject;
//# sourceMappingURL=bonusObject.js.map