const storage = localStorage.getItem("cart")
const initialState = storage ? JSON.parse(storage) : []

const productsReducer = (state = initialState, action) => {
    let newState;
    
    switch (action.type) {
        case "ADD":
            if (!state.some(item => item.id === action.payload.id)) {
                newState = [...state, action.payload];
                localStorage.setItem("cart", JSON.stringify(newState));
                return newState;
            }
            return state;
        case "DELETE_ONE":
            newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
            localStorage.setItem("cart", JSON.stringify(newState));
            return newState;
        case "DELETE_ALL":
            localStorage.removeItem("cart");
            return [];
        case "LOAD_FROM_LOCALSTORAGE":
            return action.payload;
        default:
            return state;
    }
};

export default productsReducer;
