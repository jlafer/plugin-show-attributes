import React from 'react';
import { Manager } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace, actions } from './states';
import CustomerInfoContainer from './CustomerInfoContainer';

const PLUGIN_NAME = 'ShowAttributesPlugin';

const {REACT_APP_CUSTOMER_ENDPOINT} = process.env;

const onReservationCreated = (reservation) => {
  const task = reservation.task;
  const {dispatch} = Manager.getInstance().store;
  dispatch( actions.fetchCustomerActionCreator(REACT_APP_CUSTOMER_ENDPOINT, task.attributes.id) );
};

const afterCompleteTask = (_payload) => {
  const {dispatch} = Manager.getInstance().store;
  dispatch( actions.clearCustomerActionCreator() );
};

export default class ShowAttributesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    this.registerReducers(manager);
    manager.workerClient.on("reservationCreated", onReservationCreated);
    flex.Actions.addListener("afterCompleteTask", afterCompleteTask);
    flex.AgentDesktopView.Panel2.Content.add(<CustomerInfoContainer key="customer-info"/>);
  }

  registerReducers(manager) {
    manager.store.addReducer(namespace, reducers);
  }
}
