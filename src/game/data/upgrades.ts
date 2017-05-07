import Upgrade from '../models/upgrades'
import { Type } from '../models/enums/type'
import { Modifiers } from '../models/enums/modifiers'

export const UpgradeItems: object = {
    bystanders : new Upgrade(
        'Bystanders',
        'Who knows why, but some of the people who are hanging around aren\'t actually in line.',
        [['people', Type.resource, 10]],
        [],
        [],
        [],
        [['people', Type.plot, Modifiers.multiply, [0,2]]]
    )
}