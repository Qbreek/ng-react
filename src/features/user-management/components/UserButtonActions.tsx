interface UserButtonActionsProps {
    onSaveClick(): void;
    onDeleteClick(): void;
    onCancelClick(): void;
    onEditClick(): void;
    isEdit: boolean;
}

export function UserButtonActions({
    onSaveClick,
    onDeleteClick,
    onCancelClick,
    onEditClick,
    isEdit,
}: UserButtonActionsProps): JSX.Element {
    if (isEdit) {
        return (
            <>
                <button
                    type="button"
                    onClick={onSaveClick}
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onDeleteClick}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Delete
                </button>
                <button
                    type="button"
                    onClick={onCancelClick}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </>
        );
    } else {
        return (
            <>
                <button
                    type="button"
                    onClick={onEditClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Edit
                </button>
            </>
        );
    }
}
