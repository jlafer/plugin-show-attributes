const
fetch(`https://456986ba-6d99-406f-a86c-3f1b8d676f07.mock.pstmn.io/customers/${id}`)
.then(resp => {
  console.log('---------------------resp', resp);
  const data = resp;
  const {firstName, lastName, email} = data;
