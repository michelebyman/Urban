import React, { useState } from 'react'
import axios from 'axios'
import Input from './Input'
import Suggestions from './Suggestions'
import Result from './Result'
import ErrorMessage from './ErrorMessage'



const UrbanDictonary = () => {
    const [textValue, setTextValue] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [result, setResult] = useState<string>("")



    const onChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {

        event.preventDefault()

        if (!textValue) {
            setResult("")
        }
        const { value } = event.currentTarget
        setTextValue(value)
        try {
            const response = await axios.get(
                `https://api.urbandictionary.com/v0/autocomplete-extra?key=ab71d33b15d36506acf1e379b0ed07ee&term=${value}`
            );
            const newSuggestions = response.data.results.map(
                ({ term }: { term: string }) => term
            )
            setSuggestions(newSuggestions)
            setIsError(false)
        } catch {
            setIsError(true)
        }

    }


    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await axios.get(`http://api.urbandictionary.com/v0/define?term=${textValue}`)
            const [{ definition }] = response.data.list
            setResult(definition)
            setIsError(false)
        } catch {
            setIsError(true)
        }



    }


    return (
        <>
            <Input onChange={onChangeHandler} value={textValue} onSubmit={onSubmitHandler} />

            <Suggestions suggestions={suggestions} />

            <Result result={result} textValue={textValue} />

            <ErrorMessage isError={isError} />

        </>
    );
}



export default UrbanDictonary;