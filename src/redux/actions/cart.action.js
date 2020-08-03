const AddCart = (item, currentCart, currentItem) => {
    return dispatch => {
        currentItem.forEach(value => {
            if (value.id === item.id) {
                value.qty += 1
            }
        })
        dispatch({ type: 'UPDATE_ITEMS', items: currentItem });
        if (currentCart.length === 0) {
            let items = [{
                id: item.id,
                title: item.title,
                qty: 1
            }];
            dispatch({ type: 'ADD_CART', items });
        } else {
            let status = false
            currentCart.forEach(value => {
                if (value.id === item.id) {
                    status = true;
                    value.qty++
                }
            });
            if (!status) {
                currentCart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1
                })
            }
            dispatch({ type: 'ADD_CART', items: currentCart });
        }
    }
};

const DeleteCart = (item, currentCart, currentItem) => {
    return dispatch => {
        currentItem.forEach(value => {
            if (value.id === item.id) {
                value.qty -= 1
            }
        })
        dispatch({ type: 'UPDATE_ITEMS', items: currentItem });
        currentCart.forEach(value => {
            if (value.id === item.id) {
                value.qty--
            }
        });
        dispatch({ type: 'REMOVE_CART', items: currentCart });
    }
};

const FlushCart = (currentItem) => {
    return dispatch => {
        currentItem.forEach(value => {
            if (value.qty !== 0) {
                value.qty = 0;
            }
        })
        dispatch({ type: 'UPDATE_ITEMS', items: currentItem });
        dispatch({ type: 'FLUSH_CART' });
    }
}

export {
    AddCart,
    FlushCart,
    DeleteCart
};
