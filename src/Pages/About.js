import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import hervet from "../Assets/hervet.jpg";
import style from "../recipe.module.css";

class About extends Component {
  render() {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img
            src={hervet}
            alt="Card image"
            className={style.responsive}
          />
          <Card.ImgOverlay>
            <Card.Title>HERVÉ HERT</Card.Title>
            <Card.Text className="about-text">
              <p>
                Hervé Hert est un chef cuisinier authentique et passionné par
                son métier qu’il exerce depuis plus de 20 ans. Grâce à son
                expérience acquise au sein de grands établissements Français,
                Allemands, Luxembourgeois et Suisse, Hervé Hert vous propose une
                cuisine originale et raffinée, conforme à vos souhaits et
                adaptée à l’ensemble de vos évènements et réceptions. La cuisine
                d’Hervé Hert allie tradition et inventivité en travaillant
                exclusivement les produits du terroir, frais et de saison afin
                de privilégier une authenticité et une traçabilité permettant de
                respecter les normes et critères environnementaux. La priorité
                absolue étant la fraicheur, les mets sont préparés juste avant
                livraison et vous garantissent une qualité gastronomique et un
                savoir-faire incomparable. Hervé Hert souhaite vous faire
                partager sa passion pour ce métier afin de vous donner entière
                satisfaction quels que soient vos souhaits. Nous sommes à votre
                disposition pour vous rencontrer, personnaliser vos menus,
                banquets et autres buffets, y apporter éventuellement des
                modifications afin d’élaborer un devis sur mesure tenant compte
                de l’ensemble de vos exigences !
              </p>
            </Card.Text>
            <Card.Text>UN PARCOURS PROFESSIONNEL, UN SAVOIR-FAIRE !</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default About;
