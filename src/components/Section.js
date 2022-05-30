import PropTypes from 'prop-types' 
import React from 'react'

export default function Selection({ title, children }){
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

Selection.propTypes = {
    title: PropTypes.string,
    children:PropTypes.node,
}