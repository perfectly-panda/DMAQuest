import Upgrade from '../models/upgrades';
import { Type } from '../models/enums/type';
import ModifierObject from '../models/modifierObject';
import Identifier from '../models/identifier';
export var UpgradeItems = {
    bystanders: new Upgrade('Bystanders', 'Who knows why, but some of the people who are hanging around aren\'t actually in line.', [['people', Type.resource, 10]], [], [['people', 10, 1]], {}, { bystanders: new ModifierObject(new Identifier(Type.plot, 'people', "peopleAdd"), new Identifier(Type.upgrade, 'bystanders', "bystanders"), 1 /* multiply */, .5)
    }),
    shop: new Upgrade('Shop', 'With so many people hanging around, it was inevitable that someone started selling useful things.', [['bystanders', Type.upgrade, 1]], [], [['people', 100, 1]], {}, {})
};
//# sourceMappingURL=upgrades.js.map