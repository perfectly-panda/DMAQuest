import Plot from '../models/plot';
import { Type } from '../models/enums/type';
import BonusObject from '../models/bonusObject';
export var PlotItems = {
    'wait': new Plot('wait', 'Wait', 'Wait in line.', [], [['people', Type.plot, 10]], [], { minutesAdd: new BonusObject("minutesAdd", "minutes", 0 /* add */, 1, [], []) }),
    'people': new Plot('people', 'People', 'People in line.', [['minutes', Type.resource, 10]], [], [['minutes', 10, 1]], { peopleAdd: new BonusObject("peopleAdd", "people", 0 /* add */, 1, [], []) }),
    'chairs': new Plot('chairs', 'Chairs', 'Chairs to sit in.', [['people', Type.resource, 5]], [], [['people', 5, 1]], { chairsAdd: new BonusObject("chairsAdd", "chairs", 0 /* add */, 1, [], []) })
};
//# sourceMappingURL=plot.js.map