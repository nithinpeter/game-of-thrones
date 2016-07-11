const defaultState = {
    name: "redux-starter",
};

export default function todos(state = defaultState, action) {
  switch(action.type) {
    case 'INITIAL_STATE':
    default:
        return state;
  }
}