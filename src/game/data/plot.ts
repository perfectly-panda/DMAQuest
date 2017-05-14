import Plot from '../models/plot'
import { Bonus } from '../models/enums/bonus'
import { Type } from '../models/enums/type'
import BonusObject from '../models/bonusObject'
import Identifier from '../models/identifier'

export const PlotItems: object = {
    'wait': new Plot(
        'Wait',
        'Wait',
        'Wait in line.',
        new Identifier(Type.plot, 'wait'),
        {
             bonuses: { 
                minutesAdd: new BonusObject(Bonus.add, 1, 'minutes',
                    new Identifier(Type.plot, 'wait', 'minutesAdd'))
            }
        }
    ),
    'people': new Plot(
        'People',
        'People',
        'People in line.',
        new Identifier(Type.plot, 'people'),
        {
            parents: [[new Identifier(Type.resource, 'minutes', ''), 10]],
            pricing: [['minutes', 1, 1]],
            bonuses: { 
                peopleAdd: new BonusObject(Bonus.add, 1, 'people',
                    new Identifier(Type.plot, 'people', 'peopleAdd'))
            }
        }
    ),
    'chairs': new Plot(
        'Chairs',
        'Chairs',
        'Chairs to sit in.',
        new Identifier(Type.plot, 'chairs'),
        {
            parents: [[new Identifier(Type.resource, 'people', ''), 5]],
            pricing: [['people', 1, 1]],
            bonuses: { 
                chairsAdd: new BonusObject(Bonus.add, 1, 'chairs',
                    new Identifier(Type.plot, 'chairs', 'chairsAdd'))
            }
        }    
    ),
    'lines': new Plot(
        'Lines',
        'Lines',
         'Open windows.',
         new Identifier(Type.plot, 'lines'),
         {
            parents: [[new Identifier(Type.resource, 'chairs', ''), 5]],
            pricing: [['chairs', 1, 1]],
            bonuses: { 
                lineAdd: new BonusObject(Bonus.add, 1, 'lines',
                    new Identifier(Type.plot, 'lines', 'lineAdd'))
            }
         }
    ),
    'battery': new Plot(
        'Battery',
        'Battery',
        'Your friend\'s remaining battery life.',
        new Identifier(Type.plot, 'battery'),
        {
            parents: [[new Identifier(Type.resource, 'lines', ''), 5]],
            pricing: [['minutes', 5, 1]],
            bonuses: { 
                batteryAdd: new BonusObject(Bonus.add, 1, 'battery',
                    new Identifier(Type.plot, 'battery', 'batteryAdd'))
            }
        }
    ),
    'wizards': new Plot(
        'Wizards',
        'Wizards',
         '...wizards?',
         new Identifier(Type.plot, 'wizards'),
         {
            parents: [[new Identifier(Type.resource, 'lines', ''), 10]],
            pricing: [['minutes', 5, 1]],
            negates: [new Identifier(Type.plot, 'chipmunks', '')],
            bonuses: { 
                wizardAdd: new BonusObject(Bonus.add, 1, 'wizards',
                    new Identifier(Type.plot, 'wizards', 'wizardsAdd'))
            }
         }    
    ),
    'chipmunks': new Plot(
        'Chipmunks',
        'Chipmunks',
         'Are they nuts?',
         new Identifier(Type.plot, 'chipmunks'),
         {
            parents: [[new Identifier(Type.resource, 'lines', ''), 10]],
            pricing: [['minutes', 5, 1]],
            negates: [new Identifier(Type.plot, 'wizards', '')],
            bonuses: { 
                chipmunkAdd: new BonusObject(Bonus.add, 1, 'chipmunks',
                    new Identifier(Type.plot, 'chipmunks', 'chipmunkAdd'))
            }
         }
    ),
    'portals': new Plot(
        'Portals',
        'Portals',
        'Oh noes!',
        new Identifier(Type.plot, 'portals'),
        {
            parents: [[new Identifier(Type.resource, 'wizards', ''), 10]],
            pricing: [['wizards', 5, 1]],
            bonuses: {
                portalAdd: new BonusObject(Bonus.add, 1, 'portals',
                    new Identifier(Type.plot, 'portals', 'portalAdd')),
                portalPerTick: new BonusObject(Bonus.perTick, 1, 'people',
                    new Identifier(Type.plot, 'portals', 'portalPerTick'))
            }
        }    
    ),
    'stayInside': new Plot(
        'Stay Inside',
        'StayInside',
         'Nope, here for a license, not leaving.',
         new Identifier(Type.plot, 'stayInside'),
         {
             parents: [[new Identifier(Type.upgrade, 'woodenSword', ''), 1]],
             pricing: [['portals', 5, 1]],
             negates: [new Identifier(Type.plot, 'goExploring', '')],
             buyOnce: true
         }
    ),
    'goExploring': new Plot(
        'Go Exploring',
        'GoExploring',
        'Jump through a portal',
        new Identifier(Type.plot, 'goExploring'),
        {
            parents: [[new Identifier(Type.upgrade, 'woodenSword', ''), 1]],
            pricing: [['portals', 5, 1]],
            negates: [new Identifier(Type.plot, 'stayInside', '')],
            bonuses: { 
                exploreAdd: new BonusObject(Bonus.add, 10, 'gold',
                    new Identifier(Type.plot,'goExploring', 'exploreAdd'))
            },
            buyOnce: true
        }
    ),
    'huts': new Plot(
        'Huts',
        'Huts',
        'Buildings in the village',
        new Identifier(Type.plot, 'huts'),
        {
            parents: [[new Identifier(Type.plot, 'goExploring', ''), 1]],
            pricing: [['gold', 1, 1]],
            bonuses: {
                hutsAdd: new BonusObject(Bonus.add, 1, 'huts',
                    new Identifier(Type.plot,'huts', 'hutsAdd'))
            }
        }
    )        
}