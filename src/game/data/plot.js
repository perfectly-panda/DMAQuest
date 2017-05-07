import Plot from '../models/plot';
import { Type } from '../models/enums/type';
export var PlotItems = {
    'wait': new Plot('Wait', 'Wait in line.', [], [['people', Type.plot, 10]], [], [["minutes", 0 /* add */, 1]]),
    'people': new Plot('People', 'People in line.', [['minutes', Type.resource, 10]], [], [['minutes', 10, 1.15]], [["people", 0 /* add */, 1]])
};
//# sourceMappingURL=plot.js.map