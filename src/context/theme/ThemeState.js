import React from 'react'
import themeContext from './themeContext'


const ThemeState = (props) => {
    return (
        <themeContext.Provider value={{ decoded, setDecoded }}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState