const FETCH_CUSTOMER = 'FETCH_CUSTOMER';

const initialState = {
  fetchStatus: 'none',
  error: '',
  customer: {}
};


function fetchCustomerData(id) {
  return fetch(`https://456986ba-6d99-406f-a86c-3f1b8d676f07.mock.pstmn.io/customers/${id}`)
    .then((response) => response.json())
}

export const actions = {
  fetchCustomerActionCreator: (id) => ({
    type: FETCH_CUSTOMER,
    payload: fetchCustomerData(id),
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_CUSTOMER}_PENDING`: {
      return {
        ...state,
        fetchStatus: 'Loading...',
        customer: {},
        error: ''
      };
    }
    case `${FETCH_CUSTOMER}_FULFILLED`: {
      return {
        ...state,
        fetchStatus: 'Done',
        customer: action.payload,
        error: ''
      };
    }
    case `${FETCH_CUSTOMER}_REJECTED`: {
      return {
        ...state,
        fetchStatus: 'Failed',
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
