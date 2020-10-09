export const initialState = {
    basket: [],
}

function reducer(action, state) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding items to the basket
            break;

        default:
            // setting state to current state when no cases are working
            break;
    }
}

export default reducer
