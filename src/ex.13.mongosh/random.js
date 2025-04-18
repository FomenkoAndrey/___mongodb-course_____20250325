const name = [
  'Bria',
  'Marta',
  'Missouri',
  'Larue',
  'Noemy',
  'Josefa',
  'Rosa',
  'Samara',
  'Lysanne',
  'Pasquale',
  'Jeremy',
  'Lexus',
  'Freida',
  'Rafael',
  'Rubie',
  'Easton',
  'Bob',
  'Alisa',
  'Clementina',
  'Orion',
  'Santina',
  'Dorcas',
  'Alvah',
  'John',
  'Johny',
  'Johns',
  'Johnas',
  'Donato',
  'Barry',
  'Tito',
  'Wayne',
  'Logan',
  'Ocie',
  'Cordell',
  'Horace',
  'Joshua',
  'Francesco',
  'Leora',
  'Armand',
  'Delmer',
  'Gloria',
  'Marcella',
  'Ivory',
  'Dallas',
  'Glennie',
  'Noemie',
  'Shannon',
  'Aracely',
  'Tessie',
  'Herminio',
  'Briana',
  'Benejoct',
  'Nathan',
  'Evans',
  'Camilla',
  'Hershel',
  'Titus',
  'Chauncey',
  'Katarina',
  'Sophia',
  'Griffin',
  'Immanuel',
  'Devante',
  'Elissa',
  'Chyna',
  'Danyka',
  'Eli',
  'Maurine',
  'Irving',
  'Kaycee',
  'Maryam',
  'Dayton',
  'Rosemarie',
  'Jewell',
  'Sabryna',
  'Hailie',
  'Luigi',
  'Demond',
  'Cyril',
  'Scotty',
  'Mafalda',
  'Lucienne',
  'Lonny',
  'Herta',
  'Jarred',
  'Johathan',
  'Hadley',
  'Claudine',
  'Toni',
  'Myah',
  'Drake',
  'Pink',
  'Eloise',
  'Krystina',
  'Selmer',
  'Libby',
  'Madisen',
  'Hilma',
  'Lane',
  'Barrett'
]
const surname = [
  'King',
  'Goyette',
  'Purdy',
  'Monahan',
  'Kling',
  'Kreiger',
  'Kuhlman',
  'Denesik',
  'Thiel',
  'Moore',
  'Fisher',
  'Abernathy',
  'Cruickshank',
  'Koch',
  'Gibson',
  'Grady',
  'Aufderhar',
  'Nitzsche',
  'Kiehn',
  'Hackett',
  'Schimmel',
  'Senger',
  'Cormier',
  'Fahey',
  'Fritsch',
  'Hilpert',
  'Sauer',
  'Bernier',
  'Nicolas',
  'Frami',
  'Blick',
  'Harris',
  'Wintjoiser',
  'Gaylord',
  'Rau',
  'Smith',
  'Smiths',
  'Smithson',
  'Smithy',
  'Rippin',
  'Conn',
  'Abshire',
  'Zemlak',
  'Maggio',
  'Schumm',
  'Thompson',
  'Wiegand',
  'Vandervort',
  'Douglas',
  'Stoltenberg',
  'Marley',
  'Yost',
  'Turcotte',
  'Cassin',
  'Schroeder',
  'Adams',
  'Cronin',
  'Keeling',
  'Keebler',
  'Wunsch',
  'Koepp',
  'Howe',
  'Grant',
  'Simonis',
  'Conroy',
  'Murphy',
  'Mitchell',
  'Larkin',
  'Mueller',
  'Emmerich',
  'Stamm',
  'Wilkinson',
  'Lynch',
  'Greenholt',
  'Macejkovic',
  'Kuphal',
  'Schuppe',
  'Runolfsdottir',
  'Ratke',
  'Swift',
  'Spinka',
  'Bergnaum',
  'Ferry',
  'Schaefer',
  'Mara',
  'Stiedemann',
  'Champlin',
  'Hand',
  'Orn',
  'Williamson',
  'Green'
]
const products = [
  'Oranges',
  'Apples',
  'Carrots',
  'Bananas',
  'Lemons',
  'Potatoes',
  'Corn',
  'Pea',
  'Tomato'
]

const randomNumber = (from, to) =>
  Math.floor(Math.random() * (to - from + 1)) + from

const randomDate = (start, end) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )

const randomArray = (length, startNum, endNum) =>
  [...new Array(length)].map(() => randomNumber(startNum, endNum))

const faker = {
  firstName: () => name[randomNumber(0, name.length - 1)],
  lastName: () => surname[randomNumber(0, surname.length - 1)],
  product: () => products[randomNumber(0, products.length - 1)]
}

function getUsers(usersCount, ordersCount = 0, scoresLength = 0) {
  const users = []

  for (let i = 0; i < usersCount; i++) {
    const user = {
      firstName: faker.firstName(),
      lastName: faker.lastName()
    }

    // Якщо передано ordersCount, додаємо випадкову кількість замовлень
    if (ordersCount > 0) {
      user.orders = randomNumber(1, ordersCount)
    }

    // Определяем, нужно ли генерировать scoresLength случайно
    const actualScoresLength = scoresLength === -1 ? randomNumber(1, 10) : scoresLength

    // Если передано scoresLength (не 0), добавляем массив баллов
    if (actualScoresLength > 0) {
      user.scores = randomArray(actualScoresLength, 1, 10)
    }

    users.push(user)
  }

  return users
}

function randomProducts(ordersCount) {
  const orders = []
  for (let i = 0; i < ordersCount; i++) {
    orders.push({
      product: faker.product(), // Генеруємо випадкову назву продукту
      count: randomNumber(1, 30) // Генеруємо випадкову кількість продукту від 1 до 30
    })
  }
  return orders // Повертаємо масив замовлень
}
