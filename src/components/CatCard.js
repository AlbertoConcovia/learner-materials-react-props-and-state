function CatCard({ name, photo, alt, species, favFoods, birthYear }) {
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <img className="card__image" src={photo} alt={alt}></img>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
}

export default CatCard;
