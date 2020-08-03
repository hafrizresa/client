import axios from '../../libs/axios';

const FetchItems = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_ITEMS_LOADING' });
            const result = await axios.get();
            result.forEach(element => {
                element.qty = 0
            });
            dispatch({ type: 'SET_ITEMS', items: result });
        } catch (error) {
            dispatch({ type: 'SET_ITEMS_ERROR', error: error.message });
        }
    }
};

export {
    FetchItems
};
