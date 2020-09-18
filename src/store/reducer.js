import * as actionTypes from "./actions";

const initialState = {
  persons: [],

  personality: [
    // { task: 'Go to home' },
    // { task: 'play PC' },
  ],

  work: [
    // { task: 'Solving tasks' },
    // { task: 'Finish current projects' }
  ],

  family: [
    // { task: 'Hanging  out with family' }
  ],
  isSelect: "personality",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem = {
        id: Math.random(), // not really unique but good enough here!
        name: action.itemData.name,
      };
      return {
        ...state,
        [state.isSelect]: [...state[state.isSelect], newItem],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        [state.isSelect]: [...state[state.isSelect]].filter((item) => item.id !== action.itemId) 
        //persons: state.persons.filter((item) => item.id !== action.itemId),
      };
    case actionTypes.PERSONALITY:
      return {
        ...state,
        isSelect: "personality",
      };
    case actionTypes.WORK:
      return {
        ...state,
        isSelect: "work",
      };
    case actionTypes.FAMILY:
      return {
        ...state,
        isSelect: "family",
      };
    case actionTypes.PERSONS: {
      return {
        ...state,
        isSelect: "persons",
      };
    }
    default:
      return state;
  }
};

export default reducer;
