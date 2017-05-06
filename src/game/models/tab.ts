export default class Tab {
    name: string
    description: string
    visible: boolean = false

    constructor (name: string, description: string) {
        this.name = name
        this.description = description
    }
}