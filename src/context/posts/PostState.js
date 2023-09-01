import React from 'react'
import postContext from './postContext'


const PostState = (posts) => {
    return (
        <postContext.Provider value={{ decoded, setDecoded }}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState