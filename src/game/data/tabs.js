import Tab from '../models/tab';
import { Type } from '../models/enums/type';
import Identifier from '../models/identifier';
export var Tabs = {
    'story': new Tab('Story', 'Story', 'Where the magic happens', new Identifier(Type.tab, 'story')),
    'upgrades': new Tab('Upgrades', 'Upgrades', 'Make life better', new Identifier(Type.tab, 'upgrades'), [[new Identifier(Type.resource, 'chairs', ''), 5]]),
    'shop': new Tab('Shop', 'Shop', 'Spend your moola', new Identifier(Type.tab, 'shop'), [[new Identifier(Type.upgrade, 'shop', ''), 1]]),
    'village': new Tab('Village', 'Village', 'Am I in the Renn Faire?', new Identifier(Type.tab, 'village'), [[new Identifier(Type.plot, 'goExploring', ''), 1]])
};
//# sourceMappingURL=tabs.js.map