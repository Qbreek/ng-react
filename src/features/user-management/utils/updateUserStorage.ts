export const updateLocalStorage = (users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
};
