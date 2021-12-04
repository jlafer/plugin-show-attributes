import React from 'react';

const CustomerInfoPanel = (props) => {
  const {customerInfo} = props;
  const {customer, fetchStatus, error} = customerInfo;

  if (fetchStatus === 'none') {
    return null;
  }
  if (fetchStatus === 'loading') {
    return <div>Loading...</div>;
  }
  if (fetchStatus === 'failed') {
    return <div>An error has occurred: {error}</div>;
  }
  const {id, email, phone, firstName, lastName} = customer;
  return (
    <div>
      <div>Id: {id}</div>
      <div>First: {firstName}</div>
      <div>Last: {lastName}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
    </div>
  )
}

export default CustomerInfoPanel;