const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  // toLowercase deixa tudo em minusculo, split quebra a string em um array é vai levar em base o parametro passado para quebrar... no exemplo vai ser os espaços, o join une todo um array é usa o parametro apontado o que vai fazer a divisão no exemplo eo _
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (formataName) => {
  const employees = {
    id1: formataName('Pedro Guerra'),
    id2: formataName('Luiza Drumond'),
    id3: formataName('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));