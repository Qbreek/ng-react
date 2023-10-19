export const initUsers = () => {
    const localUserData = localStorage.getItem('users');
    return localUserData ? (JSON.parse(localUserData) as User[]) : [];
};
