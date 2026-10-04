import styles from "./CatListItem.module.css";

function CatListItem({ id, name, breed, age, color, gender, imgSrc }) {
  const genderColor = { color: gender === "Female" ? "rgb(236, 0, 137)" : "blue" };

  return (
    <li className={styles.CardItem}>
      <img src={imgSrc} alt={name} className={styles.Img}></img>

      <div className={styles.InfoContainer}>
        <p className={styles.CatName}>{name}</p>
        <p className={styles.Breed}>{breed}</p>

        <div className={styles.InfoBlock}>
          <p className={styles.Age}>
            {age} {age > 4 ? "years" : "year"}
          </p>
          <p className={styles.Color}>{color}</p>
          <p className={styles.Gender} style={genderColor}>
            {gender}
          </p>
        </div>
      </div>
    </li>
  );
}

export default CatListItem;
