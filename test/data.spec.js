import {filterBySpecies, filterByStatus, filterByGender, searchByLocation} from '../src/data.js';
const dataBaseTest = [
  {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": {
          "name": "Earth (C-137)",
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
      },
  },
  {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": {
          "name": "Earth (C-137)",
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
      },
  },
  {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": {
          "name": "Earth (Replacement Dimension)",
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
      },
  },
];
describe('filter functions', () => {
    it('filterBySpecies is a function', () => {
      expect(typeof filterBySpecies).toBe('function');
    }); 

    it('if I insert characters and Human should return only Human characters', () => {
      expect(filterBySpecies(dataBaseTest, "Human")).toStrictEqual(dataBaseTest);
    });

    it('filterByStatus is a function', () => {
      expect(typeof filterByStatus).toBe('function');
    }); 

    it('if I insert characters and Alive should return only Alive characters', () => {
      expect(filterByStatus(dataBaseTest, "Alive")).toStrictEqual(dataBaseTest);
    });

    it('filterByGender is a function', () => {
      expect(typeof filterByGender).toBe('function');
    }); 

    it('if I insert characters and Female should return only Female characters', () => {
      const resultsFemale = [
        {
            "id": 3,
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "origin": {
                "name": "Earth (Replacement Dimension)",
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
            },
        },
      ];
      expect(filterByStatus(dataBaseTest, "Female")).toStrictEqual(resultsFemale);
    });   
  });    
/*describe('percentage of filtered characters', () => {
  it('if I insert an Original and a Filtered Array it should return the percentage of filtered itens', () => {
    expect(statisticData(results, results[0])).toBe(25);
  });
});*/

describe('search filter', () => {
  it('searchByLocation is a function', () => {
    expect(typeof searchByLocation).toBe('function');
  }); 

  it('if I insert Earth should return characters with Earth in location name', () => {
    expect(searchByLocation(dataBaseTest, "Earth").toBe(dataBaseTest));
  });
});