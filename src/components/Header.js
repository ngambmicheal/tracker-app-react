import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const onClick = () => {

    }

    return (
        <header className='header'>
            <h1 style={style}> {title}</h1>

            <Button color='green' text='Hello 4'></Button>
            <Button color='red' text='Hello 2'></Button>
            <Button  text='Hello 1' onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = { 
    title: 'This is Me'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const style ={
    color:'red',
}

export default Header
