import Resource from '../models/resources'
import BonusObject from '../models/bonusObject'
import { Bonus } from '../models/enums/bonus'
import Identifier from "../models/identifier"
import { Type } from "../models/enums/type"
import { Conditional } from '../models/enums/conditional'

export const ResourceItems: object = {
    'minutes': new Resource(
        'Minutes',
        'How long your friend has been waiting',
        new BonusObject('minutesTick', 'minutes', Bonus.add, .1, [], [], new Identifier(Type.resource, 'minutes', '')),
        -1,
        [new Identifier('resources', 'battery', 'value'), 0, Conditional.greaterThan]
    ),
    'people': new Resource(
        'People',
        'How many people are in line with your friend',
        new BonusObject('peopleTick', 'people', Bonus.add, 0, [], [], new Identifier(Type.resource, 'people', ''))
    ),
    'chairs': new Resource(
        'Chairs',
        'How many places are there to sit',
        new BonusObject('chairsTick', 'chairs', Bonus.add, 0, [], [], new Identifier(Type.resource, 'chairs', ''))
    ),
    'lines': new Resource(
        'Lines',
        'How many lines there are',
        new BonusObject('lineTick', 'lines', Bonus.add, 0, [], [], new Identifier(Type.resource, 'lines', ''))
    ),
    'battery': new Resource(
        'Battery',
        'How much battery life is left',
        new BonusObject('batteryTick', 'battery', Bonus.add, -.01, [], [], new Identifier(Type.resource, 'battery', '')),
        100
    ),
     'wizards': new Resource(
        'Wizards',
        'How many wizards came in',
        new BonusObject('wizardTick', 'wizards', Bonus.add, 0, [], [], new Identifier(Type.resource, 'wizards', ''))
    ),
     'chipmunks': new Resource(
        'Chipmunks',
        'How many chipmunks came in',
        new BonusObject('chipmunkTick', 'chipmunks', Bonus.add, 0, [], [], new Identifier(Type.resource, 'shipmunks', ''))
    ),
     'portals': new Resource(
        'Portals',
        'Wizard summoning protals',
        new BonusObject('portalTick', 'people', Bonus.add, 0, [], [], new Identifier(Type.resource, 'portals', ''))
    )
}