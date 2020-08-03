export const SET_ITEMS = "SET_ITEMS"
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const SET_ITEMS_LOADING = "SET_ITEMS_LOADING";
export const SET_ITEMS_ERROR = "SET_ITEMS_ERROR";

const initialState = {
    loading: false,
    data: [],
    error: null
};

const itemsData = (state = initialState, action) => {
    const {
        items,
        error
    } = action
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                data: items,
                loading: false,
                error: null,
            }
        case SET_ITEMS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case UPDATE_ITEMS:
            return {
                ...state,
                data: items
            }
        case SET_ITEMS_ERROR:
            return {
                ...state,
                error
            }
        default:
            return state
    }
}

export default itemsData