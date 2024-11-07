const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}
// Exercise 1
console.dir(pokemon, { maxArrayLength: null })
// Exercise 2
//console.log(game)

/* Exercise 3 */
game.difficulty = 'hard'
//console.log(game)

/* Exercise 4 */

pokemon.forEach((poke) => {
  if (poke.starter === true) {
    game.party.push(poke)
  }
})
console.log(game.party)

/* Exercise 5 */
game.party.push(pokemon[109])
game.party.push(pokemon[100])
game.party.push(pokemon[130])
console.log(game.party)
/* Exercise 6 */
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})
console.log(game.gyms)

/* exercise 7 */
game.party.forEach((poke, index) => {
  if (poke.starter === true) {
    let i = poke.number
    game.party.splice(index, 1, pokemon[i])
  }
})
console.log(game.party)

/* exercise 8 */

game.party.forEach((poke) => {
  console.log(poke.name)
})

/* exercise 9 */

pokemon.forEach((poke) => {
  if (poke.starter === true) {
    console.log(poke.name)
  }
})

/* exercise 10 */

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)
}
game.catchPokemon(pokemon[56])
console.log(game.party)

/* exercise 11 */
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)
  game.items[1].quantity--
}
game.catchPokemon(pokemon[76])
console.log(game.items[1].quantity)

/* exercise 12 */
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})
console.log(game.gyms)

/* exercise 13 */
game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 }
  game.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })
  console.log(gymTally)
}
game.gymStatus()

/* exercise 14 */
game.partyCount = function () {
  return game.party.length
}
const numberOfPokemonInParty = game.partyCount()
console.log(`Number of Pokémon in the party: ${numberOfPokemonInParty}`)

/* exercise 15 */
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})
console.log(game.gyms)

/* exercise 16 */
console.log(game)
