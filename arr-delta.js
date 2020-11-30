let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];
let client = 'Ann';
let amount = 574;

function withdraw(clients, balances, client, amount){
  let indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] >= amount){
    balances[indexOfPerson] -= amount;
    return balances[indexOfPerson];
  }else if(balances[indexOfPerson] < amount){
    return -1;

  }

}

console.log(withdraw(clients, balances, client, amount));