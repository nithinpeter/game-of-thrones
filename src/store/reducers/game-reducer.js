import * as actions from "../actions/game-actions";

const defaultState = {
  isLoading: true,
};

export default function todos(state = defaultState, action) {
  switch(action.type) {
    case actions.FETCH_GAME_REQUEST:
      return { isLoading: true }
    case actions.FETCH_GAME_SUCCESS:
      return Object.assign({}, { isLoading: false }, { data: action.body })
    default:
      return state;

  }
}