var Resource = (function () {
    function Resource(name, description) {
        this.value = 0;
        this.visible = false;
        this.purchasable = false;
        this.resetValue = 0;
        this.name = name;
        this.description = description;
    }
    return Resource;
}());
export default Resource;
//# sourceMappingURL=resources.js.map