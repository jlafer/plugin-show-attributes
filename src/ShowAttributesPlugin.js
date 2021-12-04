import { Manager } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace, actions } from './states';

const PLUGIN_NAME = 'ShowAttributesPlugin';

const onReservationCreated = (reservation) => {
  const task = reservation.task;
  const {dispatch} = Manager.getInstance().store;
  dispatch( actions.fetchCustomerActionCreator(task.attributes.id) );
};

export default class ShowAttributesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(_flex, manager) {
    this.registerReducers(manager);
    manager.workerClient.on("reservationCreated", onReservationCreated);
  }

  registerReducers(manager) {
    manager.store.addReducer(namespace, reducers);
  }
}
