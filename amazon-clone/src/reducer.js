export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      // basket: [...state.basket, action.item]
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      }

    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not present in cart.`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

      case "SET_USER":
        return{
          ...state,
          user: action.user
        };

    default:
      return state;
  }
};

export default reducer;
