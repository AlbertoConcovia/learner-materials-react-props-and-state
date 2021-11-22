import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatCard from "./components/CatCard";
import DogCard from "./components/DogCard";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import dogs from "./data/dog-data";
import cats from "./data/cat-data";
import { useState } from "react";

const dogsData = dogs;
const catsData = cats;

function App() {
  const [dogs, setDogs] = useState(dogsData);
  const [cats, setCats] = useState(catsData);

  const addCats = (newCat) => {
    setCats((cats) => [newCat, ...cats]);
  };

  const addDogs = (newDog) => {
    setDogs((dogs) => [newDog, ...dogs]);
  };

  const catCount = cats.length;
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <Form addCats={addCats} addDogs={addDogs} />

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
