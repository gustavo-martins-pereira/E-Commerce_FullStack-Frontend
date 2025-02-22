function getUserByLoggedUser() {
    return JSON.parse(localStorage.getItem("loggedInUser"));
}

export {
    getUserByLoggedUser,
};
