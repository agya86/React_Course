
// example of default component
function User(){
    return<>
    <h1>User Component</h1>
    </>
}

export default User

// Example of named and multiple component

export function Profile(){
    return <h1>Profile Component</h1>
}

export function Account(){
    return <h1>Account Component</h1>
}

// Example of export variable and simple javascript function

export let a = 10;
export let b=20


export function sum(){
    return a+b
}
