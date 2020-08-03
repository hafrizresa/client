export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const FLUSH_CART = "FLUSH_CART";

const initialState = {
    count: 0,
    data: [],
};

const cartData = (state = initialState, action) => {
    const {
        items,
    } = action
    switch (action.type) {
        case ADD_CART:
            return {
                count: state.count + 1,
                data: items
            }
        case REMOVE_CART:
            return {
                count: state.count - 1,
                data: items
            }
        case FLUSH_CART:
            return {
                count: 0,
                data: []
            }
        default:
            return state
    }
}

export default cartData