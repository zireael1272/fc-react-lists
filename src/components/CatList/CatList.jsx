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
          imgSrc: "https://example.com/cats/murzik.jpg",
        },
        {
          id: 2,
          name: "Luna",
          breed: "Siamese",
          age: 2,
          color: "White",
          gender: "Female",
          imgSrc: "https://example.com/cats/luna.jpg",
        },
        {
          id: 3,
          name: "Barsik",
          breed: "Maine Coon",
          age: 5,
          color: "Orange",
          gender: "Male",
          imgSrc: "https://example.com/cats/barsik.jpg",
        },
        {
          id: 4,
          name: "Milka",
          breed: "Scottish Fold",
          age: 1,
          color: "White and Gray",
          gender: "Female",
          imgSrc: "https://example.com/cats/milka.jpg",
        },
        {
          id: 5,
          name: "Tom",
          breed: "Bengal",
          age: 4,
          color: "Golden",
          gender: "Male",
          imgSrc: "https://example.com/cats/tom.jpg",
        },
        {
          id: 6,
          name: "Sima",
          breed: "Persian",
          age: 6,
          color: "White",
          gender: "Female",
          imgSrc: "https://example.com/cats/sima.jpg",
        },
        {
          id: 7,
          name: "Oscar",
          breed: "Abyssinian",
          age: 3,
          color: "Brown",
          gender: "Male",
          imgSrc: "https://example.com/cats/oscar.jpg",
        },
        {
          id: 8,
          name: "Cleo",
          breed: "Egyptian Mau",
          age: 2,
          color: "Silver",
          gender: "Female",
          imgSrc: "https://example.com/cats/cleo.jpg",
        },
      ],
    };
  }

  render() {
    return <></>;
  }
}

export default CatList;
