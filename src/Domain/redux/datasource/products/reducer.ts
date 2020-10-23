export default function reducer(
  state = {
    loading: false,
    success: false,
    error: false,
    data: null
  },
  action,
) {
  switch (action.type) {
    case 'LIST_HOME_PRODUCTS_PENDING': {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case 'LIST_HOME_PRODUCTS_FULFILLED': {
      return {
        loading: false,
        success: true,
        error: false,
        data: action.payload,
      };
    }

    case 'LIST_HOME_PRODUCTS_REJECTED': {
      return {
        loading: false,
        success: false,
        error: true,
        data: null
      };
    }

    default: return state;
  }
}
