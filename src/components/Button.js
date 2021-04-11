import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    return (
        <button onClick={onClick} className='btn' style={{color}}> {text} </button>
    )
}

Button.defaultProps = {
    color: 'brown'
}

Button.propTypes = {
    color: PropTypes.string
}

export default Button
