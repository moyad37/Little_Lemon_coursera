import React from "react";
import Card from "./Card";
import saladImg from "../assets/salad.jpg";
import spaghetti from "../assets/spaghetti.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import { useState } from "react";
import classes from "./Hightlights.module.css";
import OnlineMenu from "./onlineMenu";


export default function Hightlights() {
const [showMenu, setShowMenu] = useState(false);
  return (
    <section className={classes.Hightlights}>
      <div>
        <div className={classes.titleContainer}>
          <h1>This weeks specials</h1>
          <div className={classes.ButtonLayout}>
            <button
              className={classes.thisCodeByShihFengHsuButton}

              onClick={() => setShowMenu(!showMenu)}
            >
              Online Menu
            </button>
          </div>
        </div>
      </div>
       {showMenu && <OnlineMenu/>}
      <div className={classes.cardContainer}>
        <Card
          image={saladImg}
          name="Greek Salad"
          title="Greek Salad"
          price="$16.99"
          description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."
        />
        <Card
          image={bruchetta}
          name="Bruchetta"
          title="Bruchetta"
          price="$15.99"
          description="Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt."
        />
        <Card
          image={spaghetti}
          name="Spaghetti"
          title="Spaghetti"
          price="$10.99"
          description="Our favorite weeknight friendly spaghetti recipe with a meat sauce that is made completely from scratch. Use ground beef, turkey, pork, chicken or lamb to make it!"
        />
        
      </div>
    </section>
  );
}
