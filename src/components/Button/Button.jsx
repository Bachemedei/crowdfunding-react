import React from 'react'
import "./Button.css"

function Button({ value }) {
    return (
        <form className="btn-container">
            <input className="btn" type="submit" value={value}/>
        </form>
    )
}

export default Button
