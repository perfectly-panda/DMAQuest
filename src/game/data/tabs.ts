import Tab from '../models/tab'
import { Type } from '../models/enums/type'
import Identifier from '../models/identifier'

export const Tabs: object = {
    'story': new Tab(
        'Story',
        'Where the magic happens',
        []
    ),
    'upgrades': new Tab(
        'Upgrades',
        'Make life better',
        [[new Identifier(Type.resource, 'chairs', ''), 5]]
    ),
    'shop': new Tab(
        'Shop',
        'Spend your moola',
        [[new Identifier(Type.upgrade, 'shop', ''), 1]]
    )
}