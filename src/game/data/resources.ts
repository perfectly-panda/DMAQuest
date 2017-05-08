import Resource from '../models/resources'
import BonusObject from '../models/bonusObject'
import { Bonus } from '../models/enums/bonus'
import Identifier from "../models/identifier"
import { Conditional } from '../models/enums/conditional'

export const ResourceItems: object = {
    'minutes': new Resource(
        'Minutes',
        'How long your friend has been waiting',
        new BonusObject('minutesTick', 'minutes', Bonus.add, .1, [], []),
        -1,
        [new Identifier('resources', 'battery', 'value'), 0, Conditional.greaterThan]
    ),
    'people': new Resource(
        'People',
        'How many people are in line with your friend',
        new BonusObject('peopleTick', 'people', Bonus.add, 0, [], [])
    ),
    'chairs': new Resource(
        'Chairs',
        'How many places are there to sit',
        new BonusObject('chairsTick', 'chairs', Bonus.add, 0, [], [])
    ),
    'lines': new Resource(
        'Lines',
        'How many lines there are',
        new BonusObject('lineTick', 'lines', Bonus.add, 0, [], [])
    ),
    'battery': new Resource(
        'Battery',
        'How much battery life is left',
        new BonusObject('batteryTick', 'battery', Bonus.add, -.01, [], []),
        100
    )
}