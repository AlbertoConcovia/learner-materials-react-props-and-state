import { useState } from "react";

function Form({ addCats, addDogs }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [nameBirthday, setNameBirthday] = useState("");

  const newCat = {
    name: name,
    species: species,
    favFoods: ["food"],
    birthYear: nameBirthday,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
    alt: "A pretty kitten",
  };

  const newDog = {
    name: name,
    species: species,
    favFoods: ["Dog food"],
    birthYear: nameBirthday,
    photo: "https://i.ytimg.com/vi/EFJwJpAJbDA/maxresdefault.jpg",
    alt: "Doggo with too many balls in it's mouth",
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleNameBirthday = (event) => {
    setNameBirthday(event.target.value);
  };

  const handleSubmitAddCats = () => {
    addCats(newCat);
  };

  const handleSubmitAddDogs = () => {
    addCats(newDog);
  };

  return (
    <div className="form">
      <h3 className="card__text card__header">
        Add yout favourite cats or dogs:
      </h3>
      <form>
        <label className="form__input">Name:</label>
        <input
          className="form__input"
          type="text"
          id="fname"
          name="fname"
          onChange={handleName}
        />
        <label>Specie:</label>
        <input
          className="form__input"
          type="text"
          id="fspecies"
          name="fspecies"
          onChange={handleSpecies}
        />
        <label>Birthday:</label>
        <input
          className="form__input"
          type="text"
          id="fbirthday"
          name="fbirthday"
          onChange={handleNameBirthday}
        />
        <button
          className="form__button"
          type="submit"
          onClick={handleSubmitAddCats}
        >
          {" "}
          Add Cat{" "}
        </button>
        <button
          className="form__button"
          type="submit"
          onClick={handleSubmitAddDogs}
        >
          {" "}
          Add Dog{" "}
        </button>
      </form>
    </div>
  );
}

export default Form;
