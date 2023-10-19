import { useState } from 'react';
import { UserButtonActions } from './UserButtonActions';

interface UserProps {
    user: User;
    onEdit: (firstName: string, lastName: string) => void;
    onDelete: () => void;
}

export function User({ user, onEdit, onDelete }: UserProps): JSX.Element {
    const [editedFirstName, setEditedFirstName] = useState<string>(user.firstName);
    const [editedLastName, setEditedLastName] = useState<string>(user.lastName);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleSave = () => {
        setIsEdit(!isEdit);
        onEdit(editedFirstName, editedLastName);
    };

    const handleDelete = () => {
        setIsEdit(!isEdit);
        onDelete();
    };

    const handleCancel = () => {
        setIsEdit(!isEdit);
        setEditedFirstName(user.firstName);
        setEditedLastName(user.lastName);
    };

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <>
            <>
                <input
                    type="text"
                    value={editedFirstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={(event) => setEditedFirstName(event?.target.value)}
                    required
                    disabled={isEdit ? false : true}
                    className={
                        isEdit
                            ? 'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            : 'bg-gray-100 shadow appearance-none  border rounded border-gray-300 text-gray-900 py-2 px-3 leading-tight cursor-not-allowed'
                    }
                />
                <input
                    type="text"
                    value={editedLastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={(event) => setEditedLastName(event?.target.value)}
                    required
                    disabled={isEdit ? false : true}
                    className={
                        isEdit
                            ? 'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            : 'bg-gray-100 shadow appearance-none  border rounded border-gray-300 text-gray-900 py-2 px-3 leading-tight cursor-not-allowed'
                    }
                />
                <UserButtonActions
                    isEdit={isEdit}
                    onSaveClick={handleSave}
                    onDeleteClick={handleDelete}
                    onCancelClick={handleCancel}
                    onEditClick={handleEdit}
                />
            </>
        </>
    );
}
