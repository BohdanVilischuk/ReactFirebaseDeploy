import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {

            alert.show('Nice', 'success')
            setValue('')
        } else {
            alert.show('Bad')
        }
      
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                className="form-control" 
                type="text"
                placeholder="Type some"
                value={value}
                onChange={e => setValue(e.target.value)}

                />
            </div>

        </form>

    )
}