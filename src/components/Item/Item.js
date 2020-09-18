import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "./Item.css";

const Item = (props) => (
  <div className="Item">
    <span> {props.name} </span>
    <span className="Item_Span">
      <AiTwotoneDelete onClick={props.clicked} />
    </span>
  </div>
);

export default Item;
