class Cookie {
    constructor(name, type, price){
        this.name = name
        this.type = type
        this.price = price
    }
}

class Chocolate extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Chocolate", price)
        this.isSweet = isSweet || false
    }
}
class Strawberry extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Strawberry", price)
        this.isSweet = isSweet || false
    }
}
class Oreo extends Cookie {
    constructor(name, price, isSweet){
        super(name, "Oreo", price)
        this.isSweet = isSweet || false
    }
}

class Oven {
    constructor(container){
        this.container = container || []
    }
    bake(cookie){
        this.container.push(cookie)
    }
    delivery(cookie_name){
        this.container = this.container.filter(cookie => cookie.name !== cookie_name)
    }
}

let oven = new Oven()
oven.bake(new Chocolate("Brownies", 100000))
oven.bake(new Strawberry("Red Velvet", 120000))
oven.bake(new Oreo("Oreo Milk", 150000, true))
oven.delivery("Brownies")

console.log(oven.container)