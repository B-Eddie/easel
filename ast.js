export class Literal {
    constructor(value) {
        this.type = 'Literal'
        this.value = value
    }
}

export class Array {
    constructor(value) {
        this.type = 'Array'
        this.value = value
    }
}

export class Var {
    constructor(name, value) {
        this.type = 'Var'
        this.name = name
        this.value = value
    }
}

export class Binary {
    constructor(left, operator, right) {
        this.type = 'Binary'
        this.left = left
        this.operator = operator
        this.right = right
    }
}

export class Func {
    constructor(name, params, body) {
        type: 'Func'
        this.name
        this.params
        this.body = body
    }
}

export class Return {
    constructor(value) {
        type: 'Return'
        this.value = value
    }
}

export default {
    Literal,
    Array,
    Var,
    Binary,
    Func,
    Return
}