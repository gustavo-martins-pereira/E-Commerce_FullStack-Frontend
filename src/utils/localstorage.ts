interface LoggedInUser {
    username: string;
    role: string;
}

function getUserByLoggedUser(): LoggedInUser | null {
    const userString = localStorage.getItem("loggedInUser");
    if (!userString) return null;
    
    return JSON.parse(userString) as LoggedInUser;
}

export {
    getUserByLoggedUser,
    type LoggedInUser
};
