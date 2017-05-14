var Identifier = (function () {
    function Identifier(type, element, item) {
        if (item === void 0) { item = ''; }
        this.type = type;
        this.element = element;
        this.item = item;
    }
    Identifier.Copy = function (identifier) {
        return new Identifier(identifier.type, identifier.element, identifier.item);
    };
    return Identifier;
}());
export default Identifier;
//# sourceMappingURL=identifier.js.map