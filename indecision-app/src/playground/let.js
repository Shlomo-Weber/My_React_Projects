const user = {
    name: 'Shlomo',
    cities: ['Monsey', 'Givat Shmuel', 'Karnei Shomron', 'Bet Shemesh'],
    placesLived(){
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
}

console.log(user.placesLived())

// Challenge 

const multiplier = {
    numbers: [5, 6, 8],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num)=> num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())
