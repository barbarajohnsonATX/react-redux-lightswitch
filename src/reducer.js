const initialState = {
    isLightOn: true
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'FLIP':
        return {
          ...state,
          isLightOn: !state.isLightOn
        };
      default:
        return state;
    }
  }

  export default reducer