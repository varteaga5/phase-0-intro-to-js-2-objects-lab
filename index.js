// Write your solution in this file!
let employee = {name : "timmy", address: "ca"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
// this function should take in three arguments: a employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
    return Object.assign({}, employee, {[key]:value})

    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
// this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
    return Object.assign(employee, {[key]:value})
    }

function deleteFromEmployeeByKey(obj, key) {
// this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.
    let newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
                
    }
function destructivelyDeleteFromEmployeeByKey(obj, key) {
// this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
    delete obj[key] 
    return obj

    }