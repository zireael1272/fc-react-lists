import { Component } from "react";
import CatListItem from "../CatListItem/CatListItem";
import styles from "./CatList.module.css";

class CatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [
        {
          id: 1,
          name: "Murzik",
          breed: "British Shorthair",
          age: 3,
          color: "Gray",
          gender: "Male",
          imgSrc:
            "https://images.pexels.com/photos/32131245/pexels-photo-32131245.jpeg",
        },
        {
          id: 2,
          name: "Luna",
          breed: "Siamese",
          age: 2,
          color: "White",
          gender: "Female",
          imgSrc:
            "https://images.pexels.com/photos/10912323/pexels-photo-10912323.jpeg",
        },
        {
          id: 3,
          name: "Barsik",
          breed: "Maine Coon",
          age: 5,
          color: "Orange",
          gender: "Male",
          imgSrc:
            "https://images.pexels.com/photos/8942602/pexels-photo-8942602.jpeg",
        },
        {
          id: 4,
          name: "Milka",
          breed: "Scottish Fold",
          age: 1,
          color: "White and Gray",
          gender: "Female",
          imgSrc:
            "https://images.pexels.com/photos/14630894/pexels-photo-14630894.jpeg",
        },
        {
          id: 5,
          name: "Tom",
          breed: "Bengal",
          age: 4,
          color: "Golden",
          gender: "Male",
          imgSrc:
            "https://images.pexels.com/photos/17685161/pexels-photo-17685161.jpeg",
        },
        {
          id: 6,
          name: "Sima",
          breed: "Persian",
          age: 6,
          color: "White",
          gender: "Male",
          imgSrc:
            "https://images.pexels.com/photos/17885998/pexels-photo-17885998.jpeg",
        },
        {
          id: 7,
          name: "Oscar",
          breed: "Abyssinian",
          age: 3,
          color: "Brown",
          gender: "Male",
          imgSrc:
            "https://images.pexels.com/photos/13986951/pexels-photo-13986951.jpeg",
        },
        {
          id: 8,
          name: "Cleo",
          breed: "Egyptian Mau",
          age: 2,
          color: "Silver",
          gender: "Female",
          imgSrc:
            "https://images.pexels.com/photos/20374460/pexels-photo-20374460.jpeg",
        },
      ],
    };
  }

  mapCat = (cat) => {
    return <CatListItem key={cat.id} {...cat}></CatListItem>;
  };

  render() {
    const { cats } = this.state;

    return (
      <div className={styles.CatsCardsContainer}>
        <ul className={styles.CatsList}>{cats.map(this.mapCat)}</ul>
      </div>
    );
  }
}

export default CatList;
