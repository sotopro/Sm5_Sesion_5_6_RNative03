export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
        const productIndex = state.findIndex(item => item.name === action.product.name)
        if(productIndex < 0) {
            return state;
        }
        const update = [...state];
        update.splice(productIndex, 1);
        return update;
        default:
            return state
    }
}

export const getTotal = (cart) => {
    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0)
    return total.toLocaleString(undefined, currencyOptions)
}