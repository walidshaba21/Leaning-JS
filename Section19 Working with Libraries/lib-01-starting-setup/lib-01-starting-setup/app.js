const customer = ['Max', 'Manuel', 'Anna'];

const activeCustomer = ['Max', 'Manuel'];

const inactiveCustomer = _.difference(customer, activeCustomer);

console.log(inactiveCustomer);
