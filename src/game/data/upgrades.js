import Upgrade from '../models/upgrades';
import { Type } from '../models/enums/type';
export var UpgradeItems = {
    bystanders: new Upgrade('Bystanders', 'Who knows why, but some of the people who are hanging around aren\'t actually in line.', [['people', Type.resource, 10]], [], [], [], [['people', Type.plot, 1 /* multiply */, [0, 2]]])
};
//# sourceMappingURL=upgrades.js.map