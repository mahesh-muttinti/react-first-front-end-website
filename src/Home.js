import React from "react";
import Signin from "./Signin";

export default function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Mahesh Muttinti</h1>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEWnUNs9nBCHg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-IC-uiY8DCCavT23yjg41jCqZHGHfR3MyRRzN19zqMM" />
      </header>

      <nav class="menu-bar">
        <input type="checkbox" className="toggleNav" />
        <ul className="menu">
          <li>
            <a href="./Home.js">Home</a>
          </li>
          <li>
            <a href="signin">Signin</a>
          </li>
          <li>
            <a href="./Signup.js">Signup</a>
          </li>
          <li>
            <a href="./Products.js">Products</a>
          </li>
        </ul>
      </nav>

      <div className="profile-card">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEWnUNs9nBCHg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-IC-uiY8DCCavT23yjg41jCqZHGHfR3MyRRzN19zqMM"
          style={{
            shapeOutside:
              'url("https://media-exp1.licdn.com/dms/image/C4E03AQEWnUNs9nBCHg/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-IC-uiY8DCCavT23yjg41jCqZHGHfR3MyRRzN19zqMM")',
            float: "left",
            shapeMargin: "20px",
            fontSize: "39px"
          }}
        />

        <p className="description">
          My name is Mahesh Muttinti. My Hobbies include playing football,
          listening to music and coding.
        </p>
      </div>

      <div className="page-description">
        <p>
          Hey, there!
          <br />
          How are you? This webpage is developed by using react js and some of
          css added to it for enhancing the style of the page.
        </p>
      </div>

      <Signin />

      <footer>
        <h3>&copy; All Rights are reserved.</h3>
        <p>Designed and Developed by Mahesh Muttinti</p>
      </footer>
    </div>
  );
}
