var user = {
    firstName: 'Jane',
    lastName: 'LL'
};
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greeter(user);
