import Flags from './flags';
var Tab = (function () {
    function Tab(name, tab, description, identifier, parents) {
        if (parents === void 0) { parents = []; }
        this.flags = new Flags();
        this.name = name;
        this.tab = tab;
        this.description = description;
        this.identifier = identifier;
        this.parents = parents;
    }
    return Tab;
}());
export default Tab;
//# sourceMappingURL=tab.js.map