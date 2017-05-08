import Resource from '../models/resources';
import BonusObject from '../models/bonusObject';
import Identifier from "../models/identifier";
export var ResourceItems = {
    'minutes': new Resource('Minutes', 'How long your friend has been waiting', new BonusObject('minutesTick', 'minutes', 0 /* add */, .1, [], []), -1, [new Identifier('resources', 'battery', 'value'), 0, 0 /* greaterThan */]),
    'people': new Resource('People', 'How many people are in line with your friend', new BonusObject('peopleTick', 'people', 0 /* add */, 0, [], [])),
    'chairs': new Resource('Chairs', 'How many places are there to sit', new BonusObject('chairsTick', 'chairs', 0 /* add */, 0, [], [])),
    'lines': new Resource('Lines', 'How many lines there are', new BonusObject('lineTick', 'lines', 0 /* add */, 0, [], [])),
    'battery': new Resource('Battery', 'How much battery life is left', new BonusObject('batteryTick', 'battery', 0 /* add */, -.01, [], []), 100)
};
//# sourceMappingURL=resources.js.map