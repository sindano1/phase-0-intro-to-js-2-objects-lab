// Write your solution in this file!

const employees = {
    name: "firstName lastName",
    streetAddress: "123 Boulevard Ave"
}

function updateEmployeeWithKeyAndValue(employees, key, value) {
    //return {...employees, ...{ [key]: value}}
    return Object.assign({}, employees, { [key]: value })
}
