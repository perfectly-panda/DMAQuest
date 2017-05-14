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
        new BonusObject(Bonus.add, .1, 'minutes',
            new Identifier(Type.resource, 'minutes', '')),
        -1,
        [[new Identifier('resources', 'battery', 'value'), 0, Conditional.greaterThan]]
    ),
    'people': new Resource(
        'People',
        'How many people are in line with your friend',
        new BonusObject(Bonus.add, 0, 'people',
            new Identifier(Type.resource, 'people', ''))
    ),
    'chairs': new Resource(
        'Chairs',
        'How many places are there to sit',
        new BonusObject(Bonus.add, 0, 'chairs',
            new Identifier(Type.resource, 'chairs', ''))
    ),
    'lines': new Resource(
        'Lines',
        'How many lines there are',
        new BonusObject(Bonus.add, 0, 'lines',
            new Identifier(Type.resource, 'lines', ''))
    ),
    'battery': new Resource(
        'Battery',
        'How much battery life is left',
        new BonusObject(Bonus.add, -.01, 'battery',
            new Identifier(Type.resource, 'battery', '')),
        100
    ),
     'wizards': new Resource(
        'Wizards',
        'How many wizards came in',
        new BonusObject(Bonus.add, 0, 'wizards',
            new Identifier(Type.resource, 'wizards', ''))
    ),
     'chipmunks': new Resource(
        'Chipmunks',
        'How many chipmunks came in',
        new BonusObject(Bonus.add, 0, 'chipmunks',
            new Identifier(Type.resource, 'chipmunks', ''))
    ),
     'portals': new Resource(
        'Portals',
        'Wizard summoning protals',
        new BonusObject(Bonus.add, 0, 'portals',
            new Identifier(Type.resource, 'portals', ''))
    ),
     'huts': new Resource(
        'Huts',
        'Huts In the village',
        new BonusObject(Bonus.add, 0, 'huts',
            new Identifier(Type.resource, 'huts', ''))
    ),
     'gold': new Resource(
        'Gold',
        'Olde timey money',
        new BonusObject(Bonus.add, 0, 'portals',
            new Identifier(Type.resource, 'portals', ''))
    )

}