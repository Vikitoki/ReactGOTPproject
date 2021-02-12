export default class GOTService {
  constructor() {
    this._apiBase = "https://anapioficeandfire.com/api";
    this.noData = "---";
  }

  randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(
        `Couldnt fetch ${this._apiBase}${url}, status${response.status}`
      );
    }

    return await response.json();
  };

  getAllCharacters = async () => {
    const response = await this.getResource("/characters");
    return response.map((char) => this._modifiedCharacter(char));
  };

  getOneCharacter = async (id) => {
    const response = await this.getResource(`/characters/${id}`);
    return this._modifiedCharacter(response);
  };

  getRandomCharacter = async () => {
    const response = await this.getResource(
      `/characters/${this.randomInteger(1, 1000)}`
    );
    return this._modifiedCharacter(response);
  };

  getAllBooks = async () => {
    const response = await this.getResource("/books");
    return response;
  };

  getOneBook = async (id) => {
    const response = await this.getResource(`/books/${id}`);
    return response;
  };

  getRandomBook = async () => {
    const response = await this.getResource(
      `/books/${this.randomInteger(1, 10)}`
    );
    return response;
  };

  getAllHouses = async () => {
    const response = await this.getResource("/houses");
    return response.map((house) => this._modifiedHouse(house));
  };

  getOneHouse = async (id) => {
    const response = await this.getResource(`/houses/${id}`);
    return this._modifiedHouse(response);
  };

  getRandomHouse = async () => {
    const response = await this.getResource(
      `/houses/${this.randomInteger(1, 10)}`
    );
    return this._modifiedHouse(response);
  };

  _modifiedCharacter = (char) => {
    return {
      name: char.name || this.noData,
      gender: char.gender || this.noData,
      born: char.born || this.noData,
      died: char.died || this.noData,
      culture: char.culture || this.noData,
    };
  };

  _modifiedHouse = (house) => {
    return {
      name: house.name || this.noData,
      region: house.region || this.noData,
      words: house.words || this.noData,
      titles: house.titles || this.noData,
      overload: house.overload || this.noData,
      ancestralWeapons: house.ancestralWeapons || this.noData,
    };
  };

  _modifiedBook = (book) => {
    return {
      name: book.name || this.noData,
      numberOfPages: book.numberOfPages || this.noData,
      publiser: book.publiser || this.noData,
      released: book.released || this.noData,
    };
  };
}
