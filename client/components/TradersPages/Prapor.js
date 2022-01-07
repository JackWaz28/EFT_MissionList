import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Prapor = props => {

    return (
        <div>
      <h1> Prapor </h1>
    </div>
    )
}

const mapState = state => {
    return {
        username: state.auth.username
    }
}

export default connect(mapState)(Prapor)
