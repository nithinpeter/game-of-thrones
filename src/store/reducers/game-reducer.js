import * as actions from "../actions/game-actions";

const defaultState = {
  isLoading: true,
  characterTree: {},
  characterHolderTree: {},
};

export default function todos(state = defaultState, action) {
  switch(action.type) {
    case actions.FETCH_GAME_REQUEST:
      return { isLoading: true }
    case actions.FETCH_GAME_SUCCESS:
      let gameData = Object.assign({}, { isLoading: false }, action.body)
      gameData.characterHolderTree = action.body.characterTree;
      return gameData;
    case actions.ITEM_DROPPED:
      let characterHolderTree = [...state.characterHolderTree];
      characterHolderTree[action.id].droppedItemId = action.droppedItemId;

      let characterTree = [...state.characterTree];
      characterTree[action.droppedItemId].isDropped = true;

      return Object.assign({}, state, {characterHolderTree, characterTree});  
    default:
      return state;

  }
}