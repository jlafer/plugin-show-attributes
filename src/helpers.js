import { Actions, Manager } from "@twilio/flex-ui";

export const initiateRetrieveCustomerData = (id) => {
  const manager = Manager.getInstance();
  const {store} = manager;
  store.dispatch( setMyPageState('PAGE_ACTIVE') );
}
