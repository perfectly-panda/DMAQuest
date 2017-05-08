import Upgrade from '../models/upgrades'
import { Type } from '../models/enums/type'
import { Modifiers } from '../models/enums/modifiers'
import ModifierObject from '../models/modifierObject'
import Identifier from '../models/identifier'

export const UpgradeItems: object = {
    bystanders : new Upgrade(
        'Bystanders',
        'Who knows why, but some of the people who are hanging around aren\'t actually in line.',
        [['people', Type.resource, 10]],
        [],
        [],
        {},
        { bystanders: new ModifierObject(
            new Identifier(Type.plot,'people', "peopleAdd"),
            new Identifier(Type.upgrade,'bystanders', "bystanders"), 
            Modifiers.multiply, 
            .5)
        }
    )
}