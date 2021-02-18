import React from 'react'

interface IProps {
    isError: boolean
}

const ErrorMessage = ({ isError }: IProps) => {
    return (
        <>
            {isError &&
                <p>Error ooopppsss!</p>
            }
        </>
    );
}

export default ErrorMessage