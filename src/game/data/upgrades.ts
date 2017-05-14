import Upgrade from '../models/upgrades'
import { Type } from '../models/enums/type'
import { Modifiers } from '../models/enums/modifiers'
import ModifierObject from '../models/modifierObject'
import Identifier from '../models/identifier'

export const UpgradeItems: object = {
    bystanders : new Upgrade(
        'Bystanders',
        'Who knows why, but some of the people who are hanging around aren\'t actually in line.',
        new Identifier(Type.upgrade, 'bystanders'),
        {
            parents: [[new Identifier(Type.resource, 'people'), 10]],
            pricing: [['people', 10, 1]],
            modifies: { bystanders: new ModifierObject(
                new Identifier(Type.plot,'people', "peopleAdd"),
                new Identifier(Type.upgrade,'bystanders', "bystanders"), 
                Modifiers.multiply, 
                .5)
            },
            buyOnce: true
        }
    ),
     shop : new Upgrade(
        'Shop',
        'With so many people hanging around, it was inevitable that someone started selling useful things.',
        new Identifier(Type.upgrade, 'shop'),
        {
            parents: [[new Identifier(Type.upgrade,'bystanders', ''), 1]],
            pricing: [['people', 10, 1]],
            buyOnce: true
        }
    ),
    woodenSword : new Upgrade(
        'Wooden Sword',
        'And old man offers you a wooden sword. "It\'s dangerous to go alone!" he says. "Take This."',
        new Identifier(Type.upgrade, 'woodenSword'),
        {
            parents: [[new Identifier(Type.resource, 'portals', ''), 10]],
            buyOnce: true
        }
    )
}