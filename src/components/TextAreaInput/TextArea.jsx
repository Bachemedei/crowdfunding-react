import React from 'react'
import './TextArea.css'

function TextArea({ label }) {
    return (
        <form>
            <label className="form-item">
                {label}:
                <textarea className="form-input  text-area"></textarea>
            </label>
        </form>
    )
}

export default TextArea
