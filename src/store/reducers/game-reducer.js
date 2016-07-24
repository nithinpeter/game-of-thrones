import * as actions from "../actions/game-actions";

const defaultState = {
  isLoading: true,
  characterTree: {},
  characterHolderTree: {},
  isFinished: false,
};

const itemDroppedState = (state, action) => {
  let characterHolderTree = [...state.characterHolderTree];
  characterHolderTree.map(characterHolder => {
    if(characterHolder.droppedItemId == action.droppedItemId) characterHolder.droppedItemId = undefined
  })
  characterHolderTree[action.id].droppedItemId = action.droppedItemId;

  let isFinished = false;

  for (var i = 0; i < characterHolderTree.length; i++) {

    if (!characterHolderTree[i].isPrimary) {

      if (characterHolderTree[i].droppedItemId != characterHolderTree[i].id) {
        isFinished = false;
        break;

      } else {
        isFinished = true;
      }

    }

  }

  let characterTree = [...state.characterTree];
  characterTree[action.droppedItemId].isDropped = true;

  return {characterHolderTree, characterTree, isFinished};
}

const itemDroppedBackState = (state, {id}) => {
  let characterHolderTree = [...state.characterHolderTree];
  characterHolderTree.map(characterHolder => {
    if(characterHolder.droppedItemId == id) characterHolder.droppedItemId = undefined
  })

  let characterTree = [...state.characterTree];
  characterTree[id].isDropped = false;

  return {characterHolderTree, characterTree};
  
}

export default function todos(state = defaultState, action) {
  switch(action.type) {
    case actions.FETCH_GAME_REQUEST:
      return { isLoading: true }
    case actions.FETCH_GAME_SUCCESS:
      let gameData = Object.assign({}, { isLoading: false }, action.body)
      gameData.characterHolderTree = action.body.characterTree;
      return gameData;
    case actions.ITEM_DROPPED:
      return Object.assign({}, state, itemDroppedState(state, action));
    case actions.ITEM_DROPPED_BACK:
      return Object.assign({}, state, itemDroppedBackState(state, action));
    default:
      return state;

  }
}