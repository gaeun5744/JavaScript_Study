// @ts-check
/* eslint-disable no-restricted-syntax */

/**
 * @typedef Persons
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 */

/** @type {Persons[]} */

const people = [
  {
    age: 20,
    city: '서울',
    pet: ['cat', 'dog'],
  },
  {
    age: 40,
    city: '부산',
  },
  {
    age: 31,
    city: '대구',
    pet: ['cat', 'dog'],
  },
  {
    age: 36,
    city: '서울',
  },
  {
    age: 27,
    city: '부산',
    pet: 'cat',
  },
  {
    age: 24,
    city: '서울',
    pet: 'dog',
  },
]

/**
 * A. 30대 미만이 한 명이라도 사는 모든 도시
 * B. 각 도시벼ㅕㄹ로 개와 고양이를 키우는 사람의 수
 */

function solveA() {
  /** @type {string[]} */

  const cities = []

  for (const person of people) {
    if (person.age < 30) {
      if (!cities.find((city) => person.city === city)) {
        cities.push(person.city)
      }
    }
  }

  return cities
}

console.log('solveA', solveA())

function solveAModern() {
  const allCities = people
    .filter((person) => person.age < 30)
    .map((person) => person.city)
  // people.filter(({ age }) => age < 30).map(({city}) => city)
  const set = new Set(allCities)
  return Array.from(set)
}

console.log('solveAModern', solveAModern())

// B. 각 도시별로 개와 고양이를 키우는 사람의 수

/**
 * {
 *  "서울":{
 *    "dog":2,
 *    "cat":1,
 *  },
 *  "대구":{
 *  }
 * }
 */

// @typedef {Object.<string,*>} PetsOfCities */ // 둘중 하나 사용하기
/** @typedef {Object.<string,Object.<string,number>>} PetsOfCities */

function solveB() {
  /** @type {PetsOfCities} */
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person

    if (petOrPets) {
      const petsOfCity = result[city] || {}

      if (typeof petOrPets === 'string') {
        const pet = petOrPets

        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = origNumPetsOfCity + 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }
      result[city] = petsOfCity
    }
  }

  return result
}

console.log('solveB', solveB())

/**
 * ["서울", "cat"],
 * ["서울", "dog"],
 * ["부산", "dog"],
 */

/**
 * [
 *   [
 *      ["서울", "cat"],
 *      ["서울", "dog"],
 *   ],
 *   [
 *      ["부산", "dog"],
 *   ]
 * ]
 */

function solveBModern() {
  return (
    people
      .map(({ pet: petOrPets, city }) => {
        const pets =
          (typeof petOrPets === 'string' ? [petOrPets] : petOrPets) || []

        return {
          city,
          pets,
        }
      })
      .map(({ city, pets }) => pets.map((pet) => [city, pet]))
      .flat()
      // flatMap() 사용 가능
      .reduce((/** @type {PetsOfCities} */ result, [city, pet]) => {
        if (!city || !pet) {
          return result
        }

        return {
          ...result,
        }
      }, {})
  )
}

console.log(solveBModern())
