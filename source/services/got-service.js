export default class GOTService {
  constructor() {
    this._apiBase = "https://anapioficeandfire.com/api";
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
    return response;
  };

  getOneCharacter = async (id) => {
    const response = await this.getResource(`/characters/${id}`);
    return response;
  };

  getRandomCharacter = async () => {
    const response = await this.getResource(
      `/characters/${this.randomInteger(1, 1000)}`
    );
    return response;
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
    return response;
  };

  getOneHouse = async (id) => {
    const response = await this.getResource(`/houses/${id}`);
    return response;
  };

  getRandomHouse = async () => {
    const response = await this.getResource(
      `/houses/${this.randomInteger(1, 10)}`
    );
    return response;
  };
}
