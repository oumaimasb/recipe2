import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import style from "../recipe.module.css";
import cuisine from "../Assets/cuisine.jpeg";

class Welcome extends Component {
  render() {
    return (
      <div>
        <Image src={cuisine} fluid className={style.responsive} />
      </div>
    );
  }
}

export default Welcome;
