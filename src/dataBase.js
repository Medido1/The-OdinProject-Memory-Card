import bulbasaur from './assets/images/Bulbasaur.webp';
import Charmander from './assets/images/Charmander.webp';
import Squirtle from './assets/images/Squirtle.webp';
import Caterpie from './assets/images/Caterpie.webp';
import Weedle from './assets/images/Weedle.webp';
import Pidgey from './assets/images/Pidgey.webp';

const easyPokemons = [
  {
    id: "1",
    name : "bulbasaur",
    url : bulbasaur,
    isClicked : false,
  },
  {
    id: "2",
    name : "Charmander",
    url : Charmander,
    isClicked: false,
  },
  {
    id: "3",
    name: "Squirtle",
    url : Squirtle,
    isClicked: false,
  },
  {
    id: "4",
    name: "Caterpie",
    url: Caterpie,
    isClicked: false,
  },
  {
    id: "5",
    name : "Weedle",
    url: Weedle,
    isClicked: false,
  },
  {
    id: "6",
    name : "Pidgey",
    url : Pidgey,
    isClicked: false,
  }
]

const normalPokemon = [
  ...easyPokemons,
  {
    
  }
]

export {easyPokemons, normalPokemon};