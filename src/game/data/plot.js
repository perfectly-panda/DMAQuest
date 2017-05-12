import Plot from '../models/plot';
import { Type } from '../models/enums/type';
import BonusObject from '../models/bonusObject';
import Identifier from '../models/identifier';
export var PlotItems = {
    'wait': new Plot('wait', 'Wait', 'Wait in line.', [], [], [[new Identifier(Type.resource, 'people', ''), 10]], [], { minutesAdd: new BonusObject("minutesAdd", "minutes", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'wait', 'minutesAdd')) }),
    'people': new Plot('people', 'People', 'People in line.', [], [[new Identifier(Type.resource, 'minutes', ''), 10]], [], [['minutes', 1, 1]], { peopleAdd: new BonusObject("peopleAdd", "people", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'people', 'peopleAdd')) }),
    'chairs': new Plot('chairs', 'Chairs', 'Chairs to sit in.', [], [[new Identifier(Type.resource, 'people', ''), 5]], [], [['people', 1, 1]], { chairsAdd: new BonusObject("chairsAdd", "chairs", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'chairs', 'chairsAdd')) }),
    'lines': new Plot('lines', 'Lines', 'Open windows.', [], [[new Identifier(Type.resource, 'chairs', ''), 5]], [], [['chairs', 1, 1]], { lineAdd: new BonusObject("lineAdd", "lines", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'lines', 'lineAdd')) }),
    'battery': new Plot('battery', 'Battery', 'Your friend\'s remaining battery life.', [], [[new Identifier(Type.resource, 'lines', ''), 5]], [], [['minutes', 5, 1]], { batteryAdd: new BonusObject("batteryAdd", "battery", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'battery', 'batteryAdd')) }),
    'wizards': new Plot('wizards', 'Wizards', '...wizards?', [new Identifier(Type.plot, 'chipmunks', '')], [[new Identifier(Type.resource, 'lines', ''), 10]], [], [['minutes', 5, 1]], { wizardAdd: new BonusObject("wizardAdd", "wizards", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'wizards', 'wizardsAdd')) }),
    'chipmunks': new Plot('chipmunks', 'Chipmunks', 'Are they nuts?', [new Identifier(Type.plot, 'wizards', '')], [[new Identifier(Type.resource, 'lines', ''), 10]], [], [['minutes', 5, 1]], { chipmunkAdd: new BonusObject("chipmunkAdd", "chipmunks", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'chipmunks', 'chipmunkAdd')) }),
    'portals': new Plot('portals', 'Portals', 'Oh noes!', [], [[new Identifier(Type.resource, 'wizards', ''), 10]], [], [['wizards', 5, 1]], { portalAdd: new BonusObject("portalAdd", "portals", 0 /* add */, 1, [], [], new Identifier(Type.plot, 'portals', 'portalAdd')),
        portalPeopleAdd: new BonusObject("portalAdd", "people", 2 /* perTick */, 1, [], [], new Identifier(Type.plot, 'portals', 'portalPeopleAdd')) })
};
//# sourceMappingURL=plot.js.map