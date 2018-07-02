interface Person {
    firstName: string;
    lastName: string;
}

let user = {
    firstName: 'Jane',
    lastName: 'LL'
};

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

document.body.innerHTML = greeter(user);