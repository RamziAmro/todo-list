import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Item/Item";
import AddItem from "../components/AddItem/AddItem";
import * as actionTypes from "../store/actions";
import Aside from "../components/Aside/Aside";
import "./Items.css";

const Items = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onAddedItem = (name) => {
    dispatch({ type: actionTypes.ADD_ITEM, itemData: { name: name } });
  };

  const onRemovedItem = (id) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, itemId: id });
  };

  return (
    <div className='main_div' >
      <Aside />
      <div className="Items">
        {
          <div>
            <AddItem itemAdded={onAddedItem} />
            {state[state.isSelect].map((item) => {
              console.log(item);
              return (
                <div key={item.id}>
                  <Item
                    name={item.name}
                    clicked={() => onRemovedItem(item.id)}
                  />
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default Items;
