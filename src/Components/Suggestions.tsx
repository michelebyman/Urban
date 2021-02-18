import React from 'react'

interface IProps {
    suggestions: string[];
}

const Suggestions = ({ suggestions }: IProps) => {
    return (
        <>
            {suggestions.length ? <h2>Suggestions</h2> : null}
            {suggestions.map((suggestion, i) => (
                <p key={i}>{suggestion}</p>
            ))}
        </>
    );

}

export default Suggestions