import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatCard from "./components/CatCard";
import DogCard from "./components/DogCard";
import { v4 as uuidv4 } from "uuid";
import dogs from "./data/dog-data";
import cats from "./data/cat-data";
import { useState } from "react";

const dogsData = dogs;
const catsData = cats;

function App() {
  const [dogs, setDogs] = useState(dogsData);
  const [cats, setCats] = useState(catsData);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [nameBirthday, setNameBirthday] = useState("");

  const addCats = () => {
    const newCat = {
      name: name,
      species: species,
      favFoods: ["food"],
      birthYear: nameBirthday,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
      alt: "A pretty kitten",
    };
    setCats((cats) => [newCat, ...cats]);
  };

  const addDogs = () => {
    const newDog = {
      name: name,
      species: species,
      favFoods: ["Dog food"],
      birthYear: nameBirthday,
      "photo": "https://i.ytimg.com/vi/EFJwJpAJbDA/maxresdefault.jpg",
      "alt": "Doggo with too many balls in it's mouth"
    };
    setDogs((dogs) => [newDog, ...dogs]);
  };

  const catCount = cats.length;
  const dogCount = dogs.length;

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleNameBirthday = (event) => {
    setNameBirthday(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />
      
      <div className="form">
        <h3 className="card__text card__header">
          Add yout favourite cats or dogs:
        </h3>
        <form >
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
          <button className="form__button" type="submit" onClick={addCats}> Add Cat </button>
          <button className="form__button" type="submit" onClick={addDogs}> Add Dog </button>
        </form>
      </div>

      <main>
        <div className="cards__wrapper">
          {cats.map((cat) => {
            cat.id = uuidv4();
            return (
              <CatCard
                key={cat.id}
                name={cat.name}
                species={cat.species}
                favFoods={cat.favFoods.join(", ")}
                birthYear={cat.birthYear}
                photo={cat.photo}
                alt={cat.alt}
              />
            );
          })}

          {dogs.map((dog) => {
            dog.id = uuidv4();
            return (
              <DogCard
                key={dog.id}
                name={dog.name}
                species={dog.species}
                favFoods={dog.favFoods}
                birthYear={dog.birthYear}
                photo={dog.photo}
                alt={dog.alt}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
