import Tab from '../models/tab'

export const Tabs: object = {
    'story': new Tab(
        'Story',
        'Where the magic happens'
    ),
    'upgrades': new Tab(
        'Upgrades',
        'Make life better'
    ),
    'shop': new Tab(
        'Shop',
        'Spend your moola'
    )
}