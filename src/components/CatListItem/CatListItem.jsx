import styles from "./CatListItem.module.css";

function CatListItem({ id, name, breed, age, color, gender, imgSrc }) {
  return (
    <li className={styles.CardItem}>
      <img src={imgSrc} alt={name} className={styles.Img}></img>

      <div className={styles.InfoContainer}>
        <p className={styles.CatName}>{name}</p>
        <p className={styles.Breed}>{breed}</p>

        <div className={styles.InfoBlock}>
          <p className={styles.Age}>{age}</p>
          <p className={styles.Color}>{color}</p>
          <p className={styles.Gender}>{gender}</p>
        </div>
      </div>
    </li>
  );
}

export default CatListItem;
