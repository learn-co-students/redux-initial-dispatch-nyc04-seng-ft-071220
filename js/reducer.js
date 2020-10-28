let state

// reducer function has switch statement
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// dispatch calls reducer function
function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

dispatch({ type: "@@INIT" });
dispatch({type: 'INCREASE_COUNT'})