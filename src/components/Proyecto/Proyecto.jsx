import React from 'react'
import PropTypes from "prop-types"

const Proyecto = ({title, description, tags}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{tags}</p>
        </div>
    )
}

Proyecto.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
}

export default Proyecto
