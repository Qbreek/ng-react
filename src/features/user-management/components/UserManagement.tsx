import { useState } from 'react';
import { Form } from './Form';
import { UserList } from './UserList';
import { initUsers } from '../utils/initUsers';
import { updateLocalStorage } from '../utils/updateUserStorage';
import { guidGenerator } from '../utils/guidGenerator';

export function UserManagement(): JSX.Element {
    const [users, setUsers] = useState<User[]>(initUsers);

    const handleUserAddition = (firstName: string, lastName: string): void => {
        const newUsers = [...users];
        newUsers.push({ firstName: firstName, lastName: lastName, id: guidGenerator() });
        setUsers(newUsers);
        updateLocalStorage(newUsers);
    };

    const handleUserDeletion = (id: string): void => {
        const newUsers = users.filter((user) => user.id != id);
        setUsers(newUsers);
        updateLocalStorage(newUsers);
    };

    const handleUserEdit = (id: string, editedFirstName: string, editedLastName: string) => {
        const newUsers = users.map((user) => {
            if (user.id != id) return user;
            return { ...user, firstName: editedFirstName, lastName: editedLastName };
        });
        setUsers(newUsers);
        updateLocalStorage(newUsers);
    };

    return (
        <section className="flex flex-col gap-4">
            <Form onSubmit={handleUserAddition} />
            <UserList users={users} onUserEdit={handleUserEdit} onUserDelete={handleUserDeletion} />
        </section>
    );
}
