import Upgrade from '../models/upgrades'
import { Type } from '../models/enums/type'
import { Modifiers } from '../models/enums/modifiers'
import ModifierObject from '../models/modifierObject'
import Identifier from '../models/identifier'

export const ShopItems: object = {
    bystanders : new Upgrade(
        'Bystanders',
        'Who knows why, but some of the people who are hanging around aren\'t actually in line.',
        [],
        [[new Identifier(Type.resource, 'people', ''), 10]],
        [],
        [['people', 10, 1]],
        {},
        { bystanders: new ModifierObject(
            new Identifier(Type.plot,'people', "peopleAdd"),
            new Identifier(Type.upgrade,'bystanders', "bystanders"), 
            Modifiers.multiply, 
            .5)
        }
    ),
     shop : new Upgrade(
        'Shop',
        'With so many people hanging around, it was inevitable that someone started selling useful things.',
        [],
        [[new Identifier( Type.upgrade, 'bystanders', ''), 1]],
        [],
        [['people', 10, 1]],
        {},
        {}
    )
}