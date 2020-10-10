export const initialState = {
    basket: [],
    user: null,
}

// Selector
export const getBasketTotal = (basket) => basket?.reduce( (amount, item) => item.price + amount, 0);

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

        case 'REMOVE_FROM_BASKET':
            // Logic for removing items from the basket
            let newBasket = [...state.basket]

            // Checking for index and assignd checked index to a variable named inex.
            const index = state.basket.findIndex( (basketItem) => basketItem.id === action.id)

            if (index >= 0){
                // item exists,so splice or remove the index by 1.
                newBasket.splice(index, 1);
            }
            else{
                // eslint-disable-next-line no-template-curly-in-string
                console.warn('Cannot remove product (id: ${action.id}) as it iss not in the basket');
            }
            
            return {
                ...state,
                basket: newBasket
            }

        default:
            // setting state to current state when no cases are working
            return state;
    }
}

export default reducer
