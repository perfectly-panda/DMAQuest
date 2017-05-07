import Tab from '../models/tab'
import { Type } from '../models/enums/type'

export const Tabs: object = {
    'story': new Tab(
        'Story',
        'Where the magic happens',
        []
    ),
    'upgrades': new Tab(
        'Upgrades',
        'Make life better',
        [['chairs', Type.resource, 5]]
    ),
    'shop': new Tab(
        'Shop',
        'Spend your moola',
        []
    )
}