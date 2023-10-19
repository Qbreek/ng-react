import { useState } from 'react';

interface FormProps {
    onSubmit: (firstName: string, lastName: string) => void;
}

export function Form({ onSubmit }: FormProps): JSX.Element {
    const [firstNameControl, setFirstName] = useState<string>('');
    const [lastNameControl, setLastName] = useState<string>('');

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(firstNameControl, lastNameControl);
        handleFormReset();
    };

    const handleFormReset = (): void => {
        setFirstName('');
        setLastName('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex gap-4">
            <input
                type="text"
                value={firstNameControl}
                name="firstName"
                placeholder="First Name"
                onChange={(event) => setFirstName(event?.target.value)}
                required
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
                type="text"
                value={lastNameControl}
                name="lastName"
                placeholder="Last Name"
                onChange={(event) => setLastName(event?.target.value)}
                required
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Add user
            </button>
        </form>
    );
}
