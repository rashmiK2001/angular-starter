export class User {
    id: number
    name: string
    email: string

    constructor({
        id = 0,
        name = '',
        email = '',
    }) {
        this.id = id
        this.name = name
        this.email = email
    }
}