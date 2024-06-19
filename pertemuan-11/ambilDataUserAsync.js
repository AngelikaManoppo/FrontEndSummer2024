function ambilDataUserAsync() {
    const response = await fetch ("https;//reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
}
export default ambilDataUserAsync;