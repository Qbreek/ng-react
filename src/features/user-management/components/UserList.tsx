import { User } from './User';

interface UserListProps {
    users: User[];
    onUserEdit: (id: string, firstName: string, lastName: string) => void;
    onUserDelete: (id: string) => void;
}

export function UserList({ users, onUserEdit, onUserDelete }: UserListProps): JSX.Element {
    return (
        <ul className="flex flex-col gap-4">
            {users.map((user) => (
                <li key={user.id} className="flex gap-4">
                    <User
                        user={user}
                        onEdit={(editedFirstName, editedLastName) =>
                            onUserEdit(user.id, editedFirstName, editedLastName)
                        }
                        onDelete={() => onUserDelete(user.id)}
                    />
                </li>
            ))}
        </ul>
    );
}
