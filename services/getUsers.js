 async function getUsers(){
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);   
    console.log(data);
    return data.json();
}
export default getUsers;