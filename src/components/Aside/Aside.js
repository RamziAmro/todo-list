import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Aside.css";

const selectedStyle = {
  color: "blue",
};

const Aside = (props) => {
  const dispatch = useDispatch();
  const changeCategory = (type) => () => {
    dispatch({ type });
  };

  const isSelect = useSelector((state) => state.isSelect);

  return (
    <div className="Aside">
      <p style={isSelect === "persons" ? selectedStyle : {}} onClick={changeCategory("PERSONS")}>
        Persons
      </p>
      <p style={isSelect === "personality" ? selectedStyle : {}} onClick={changeCategory("PERSONALITY")}>
        Personality
      </p>
      <p style={isSelect === "work" ? selectedStyle : {}} onClick={changeCategory("WORK")}>
        Work
      </p>
      <p style={isSelect === "family" ? selectedStyle : {}} onClick={changeCategory("FAMILY")}>
        Family
      </p>
    </div>
  );
};

export default Aside;
