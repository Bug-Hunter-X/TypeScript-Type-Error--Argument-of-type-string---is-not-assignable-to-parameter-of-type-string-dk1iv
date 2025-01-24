function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane User", "John Smith"];
console.log(greeterArray(user)); //Correct usage

let singleUser = "Jane User";
console.log(greeter(singleUser)); // Correct usage