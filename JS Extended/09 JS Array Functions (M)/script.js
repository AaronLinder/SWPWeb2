let item = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]

const filterdItems = item.filter((item)  => {
    return item.price <= 100
})

console.log(item)
console.log(filterdItems)

const itemNames = item.map((item)  => {
    return item.name
})

console.log(itemNames)

const foundItem = item.find((item)  => {
    return item.name == 'Book'
})

console.log(foundItem)

item.forEach((item)=>{
    console.log(item.name)
})

const hasInexpensiveItems = item.some((item)  => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)

const InexpensiveItems = item.every((item)  => {
    return item.price <= 1000
})

console.log(InexpensiveItems)

const total = item.reduce((currentTotal, item)=>{
    return item.price + currentTotal
}, 0)

console.log(total)

item = [1, 2, 3, 4, 5]

const includesTwo = item.includes(2)

console.log(includesTwo)