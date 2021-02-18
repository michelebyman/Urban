import React from 'react'

interface IProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>

}

const Input = ({ value, onChange, onSubmit }: IProps) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={value}
                placeholder="Type any word"
            />
        </form>
    );
}

export default Input