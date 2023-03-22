import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
      break;

    default:
      return state;
      break;
  }
};
