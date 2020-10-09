export const initialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => { 
    // In the above function state should be passed first,then action,otherwise reducer will not know the action is taking place for a particular state change.
    // console.log('Action reaction =>', action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding items to the basket
            return {
                ...state,
                basket: [
                    ...state.basket,
                    action.item
                ]
            };

        default:
            // setting state to current state when no cases are working
            return state;
    }
}

export default reducer
