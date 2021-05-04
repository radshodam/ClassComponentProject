import React from "react";
import MoreToggle from "./MoreToggle";
import styles from "./secondItems.module.css";
class SecondItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      toggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ items: result });
      });
  }

  handleClick() {
    this.setState((state) => ({ toggle: !state.toggle }));
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className={styles.list}>
          {this.state.items.map((item, id) => {
            return (
              <div className=" bg-randomRadTwo" key={id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100"
                  height="350"
                />
                <li>title : {item.title}</li>
                <li>Price : {item.price}</li>
                <div>
                  {this.state.toggle ? <MoreToggle name={item.description} key={item.id} /> : "close"}
                </div>
                <button
                  type="button"
                  className={styles.product__button}
                  onClick={this.handleClick}
                >
                  <div> {this.state.toggle ? "close" : "show more"}</div>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default SecondItems;
