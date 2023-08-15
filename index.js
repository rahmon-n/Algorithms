const people = [
  {
    name: 'Akbar',
    lastName: 'Rakhimov',
    birthYear: 1945,
    deathYear: 2000,
    city: 'Tashkent',
  },
  {
    name: 'Elena',
    lastName: 'Ivanova',
    birthYear: 1968,
    deathYear: 2015,
    city: 'Bukhara',
  },
  {
    name: 'Sergey',
    lastName: 'Petrov',
    birthYear: 1975,
    deathYear: 2020,
    city: 'Samarqand',
  },
  {
    name: 'Larisa',
    lastName: 'Sidorova',
    birthYear: 1950,
    deathYear: 2005,
    city: 'Tashkent',
  },
  {
    name: 'Dmitry',
    lastName: 'Smirnov',
    birthYear: 1982,
    deathYear: 2021,
    city: 'Bukhara',
  },
  {
    name: 'Maria',
    lastName: 'Egorova',
    birthYear: 1948,
    deathYear: 1999,
    city: 'Samarqand',
  },
  {
    name: 'Ivan',
    lastName: 'Kuznetsov',
    birthYear: 1990,
    deathYear: 2022,
    city: 'Tashkent',
  },
  {
    name: 'Olga',
    lastName: 'Volkova',
    birthYear: 1972,
    deathYear: 2007,
    city: 'Bukhara',
  },
  {
    name: 'Andrey',
    lastName: 'Sokolov',
    birthYear: 1965,
    deathYear: 2019,
    city: 'Samarqand',
  },
  {
    name: 'Natalia',
    lastName: 'Morozova',
    birthYear: 1988,
    deathYear: 2022,
    city: 'Tashkent',
  },
  {
    name: 'Mikhail',
    lastName: 'Orlov',
    birthYear: 1957,
    deathYear: 2002,
    city: 'Bukhara',
  },
  {
    name: 'Ekaterina',
    lastName: 'Novikova',
    birthYear: 1979,
    deathYear: 2016,
    city: 'Samarqand',
  },
  {
    name: 'Pavel',
    lastName: 'Fedorov',
    birthYear: 1946,
    deathYear: 1998,
    city: 'Tashkent',
  },
  {
    name: 'Tatiana',
    lastName: 'Kozlova',
    birthYear: 1985,
    deathYear: 2010,
    city: 'Bukhara',
  },
  {
    name: 'Sergei',
    lastName: 'Golubev',
    birthYear: 1963,
    deathYear: 2017,
    city: 'Samarqand',
  },
  {
    name: 'Yulia',
    lastName: 'Pavlova',
    birthYear: 1992,
    deathYear: 2020,
    city: 'Tashkent',
  },
  {
    name: 'Alexei',
    lastName: 'Popov',
    birthYear: 1954,
    deathYear: 2003,
    city: 'Bukhara',
  },
  {
    name: 'Irina',
    lastName: 'Semenova',
    birthYear: 1971,
    deathYear: 2008,
    city: 'Samarqand',
  },
  {
    name: 'Vladimir',
    lastName: 'Kuzmin',
    birthYear: 1994,
    deathYear: 2022,
    city: 'Tashkent',
  },
  {
    name: 'Anastasia',
    lastName: 'Belyanova',
    birthYear: 1959,
    deathYear: 2013,
    city: 'Bukhara',
  },
  {
    name: 'Maxim',
    lastName: 'Tarasov',
    birthYear: 1967,
    deathYear: 2014,
    city: 'Samarqand',
  },
  {
    name: 'Elena',
    lastName: 'Morozova',
    birthYear: 1987,
    deathYear: 2019,
    city: 'Tashkent',
  },
  {
    name: 'Andrei',
    lastName: 'Mikhailov',
    birthYear: 1952,
    deathYear: 2006,
    city: 'Bukhara',
  },
  {
    name: 'Marina',
    lastName: 'Vasilieva',
    birthYear: 1977,
    deathYear: 2011,
    city: 'Samarqand',
  },
  {
    name: 'Nikolai',
    lastName: 'Ivanov',
    birthYear: 1996,
    deathYear: 2021,
    city: 'Tashkent',
  },
  {
    name: 'Yelena',
    lastName: 'Sokolova',
    birthYear: 1955,
    deathYear: 2001,
    city: 'Bukhara',
  },
  {
    name: 'Sergey',
    lastName: 'Kozlov',
    birthYear: 1969,
    deathYear: 2018,
    city: 'Samarqand',
  },
  {
    name: 'Anna',
    lastName: 'Egorova',
    birthYear: 1989,
    deathYear: 2016,
    city: 'Tashkent',
  },
  {
    name: 'Igor',
    lastName: 'Fedorov',
    birthYear: 1956,
    deathYear: 2009,
    city: 'Bukhara',
  },
  {
    name: 'Elena',
    lastName: 'Novikova',
    birthYear: 1973,
    deathYear: 2012,
    city: 'Samarqand',
  },
  {
    name: 'Viktor',
    lastName: 'Petrov',
    birthYear: 1993,
    deathYear: 2020,
    city: 'Tashkent',
  },
  {
    name: 'Larisa',
    lastName: 'Smirnova',
    birthYear: 1958,
    deathYear: 2005,
    city: 'Bukhara',
  },
  {
    name: 'Dmitry',
    lastName: 'Kuznetsov',
    birthYear: 1974,
    deathYear: 2017,
    city: 'Samarqand',
  },
  {
    name: 'Natalia',
    lastName: 'Golubeva',
    birthYear: 1991,
    deathYear: 2018,
    city: 'Tashkent',
  },
  {
    name: 'Mikhail',
    lastName: 'Orlov',
    birthYear: 1951,
    deathYear: 1996,
    city: 'Bukhara',
  },
  {
    name: 'Ekaterina',
    lastName: 'Semenova',
    birthYear: 1983,
    deathYear: 2007,
    city: 'Samarqand',
  },
];

const yearArg = process.argv[2];

if (!yearArg) {
  console.log('Вы не указали год в командной строке.');
  process.exit(1);
}

const year = parseInt(yearArg);

// filtering array by the period
const newPeopleArr = (function filterByYear() {
  if (!isNaN(year)) {
    return people.filter(
      (human) => human.birthYear <= year && human.deathYear > year
    );
  }
})();

showResult(newPeopleArr);

function showResult(arr) {
  const { maxPopulation, mostPopulatedCity } = calculatePopulation(arr);
  if (mostPopulatedCity) {
    console.log(
      `В ${year} году наибольшее население (${maxPopulation} чел.) было в городе ${mostPopulatedCity}.`
    );
  } else {
    console.log(`В ${year} году нет данных о городах.`);
  }
}

function calculatePopulation(arr) {
  const cityPopulation = {};

  arr.forEach((human) => {
    if (!cityPopulation[human.city]) {
      cityPopulation[human.city] = 1;
    } else {
      cityPopulation[human.city]++;
    }
  });

  return compareCites(cityPopulation);
}

function compareCites(cityPopulation) {
  let maxPopulation = 0;
  let mostPopulatedCity = '';

  for (const city in cityPopulation) {
    if (cityPopulation[city] > maxPopulation) {
      maxPopulation = cityPopulation[city];
      mostPopulatedCity = city;
    }
  }

  return { maxPopulation, mostPopulatedCity };
}
