import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [active, setActive] = React.useState("left");
  return (
    <React.Fragment>
      <section className="container">
        <div className={`leftSection ${active === "left" && "Section-active"}`}>
          <NavLink
            to="/MakeOrder"
            onClick={() => {
              setActive("left");
            }}
          >
            <span>Make an order</span>
          </NavLink>
        </div>
        <div
          className={`rightSection ${active === "right" && "Section-active"}`}
        >
          <NavLink
            to="/PrintInvoice"
            onClick={() => {
              setActive("right");
            }}
          >
            <span>Print invoice</span>
          </NavLink>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Nav;
