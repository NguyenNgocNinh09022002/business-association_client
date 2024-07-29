const serverHost = 'http://localhost:4000';

const getUser = async (userID) => {
    const userData = await fetch(`${serverHost}/users/${userID}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            alert(error);
        });
    return userData.fullName ? userData : {};
};

const getUsers = async () => {
    const userData = await fetch(`${serverHost}/users`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            alert(error);
        });
    return userData.length > 0 ? userData : [];
};
const addUser = () => {
    return `${serverHost}/users/add`;
};

const upDateUser = (userID) => {
    return `${serverHost}/users/${userID}?_method=PUT`;
};

const deleteUser = (userID) => {
    fetch(`${serverHost}/users/${userID}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data) => data == 'success' && document.location.reload());
};

const login = async (email, password) => {
    const result = await fetch(`${serverHost}/users/authen?email=${email}&password=${password}`)
    .then((response) => response.json())
    .then(data => data).catch(error => alert(error))

    
    return result?.role ? result : null;
};

export { getUser, getUsers, addUser, upDateUser, deleteUser, login };
