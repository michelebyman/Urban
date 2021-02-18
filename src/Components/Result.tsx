import React from 'react'

interface IProps {
    result: string
    textValue: string
}
const Result = ({ result, textValue }: IProps) => {
    return (
        <>
            {result && textValue &&
                <h2>Result</h2>
            }
            {textValue &&
                <p>{result}</p>
            }

        </>
    )
        ;
}


export default Result