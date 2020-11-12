import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        className="food-image"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/11/chilli-chicken-salad-52ff417.jpg?quality=90&resize=960,408"
        alt="chicken"
      />
      <img
        className="food-image"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gfo_1112_cake_so_hr-1-0278f06.jpg?webp=true&quality=90&resize=400%2C363"
        alt="cake"
      />
      <img
        className="food-image"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/galette-ef7b68c.jpg?webp=true&quality=90&resize=500%2C454"
        alt="pizza"
      />
      <img src={img + "?grayscale"} alt="assorted pictures"></img>
    </div>
  </div>,
  document.getElementById("root")
);

// The proper attribute in React for class is actualy className
// Note that they use camel case in the attribute. This differs from HTML which doesn't normally use camel case.
// The most common attribute you will add is going to be the className
