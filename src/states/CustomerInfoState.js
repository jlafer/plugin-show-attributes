const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';

const initialState = {
  fetchStatus: 'none',
  error: '',
  customer: {}
};


function fetchCustomerData(url, id) {
  return fetch(`${url}/${id}`)
    .then((response) => response.json())
}

export const actions = {
  fetchCustomerActionCreator: (url, id) => ({
    type: FETCH_CUSTOMER,
    payload: fetchCustomerData(url, id),
  }),
  clearCustomerActionCreator: () => ({
    type: CLEAR_CUSTOMER,
    payload: {}
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_CUSTOMER}_PENDING`: {
      return {
        ...state,
        fetchStatus: 'loading',
        customer: {},
        error: ''
      };
    }
    case `${FETCH_CUSTOMER}_FULFILLED`: {
      return {
        ...state,
        fetchStatus: 'done',
        customer: action.payload,
        error: ''
      };
    }
    case `${FETCH_CUSTOMER}_REJECTED`: {
      return {
        ...state,
        fetchStatus: 'failed',
        error: action.payload.error
      };
    }
    case CLEAR_CUSTOMER: {
      return initialState;
    }
    default:
      return state;
  }
}
