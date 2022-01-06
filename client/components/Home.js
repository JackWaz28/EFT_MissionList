import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const { username } = props

  return (
    <div>
      <div>
        <h3>Welcome, {username}</h3>
      </div>
      <div class="traders-grid-homepage">
        <img class="traders-grid-items" src="Prapor.jpg"></img>  
        <img class="traders-grid-items" src="Therapist.jpg"></img>  
        <img class="traders-grid-items" src="Fence.jpg"></img>  
        <img class="traders-grid-items" src="Skier.jpg"></img>  
        <img class="traders-grid-items" src="Peacekeeper.jpg"></img>  
        <img class="traders-grid-items" src="Mechanic.jpg"></img>  
        <img class="traders-grid-items" src="Ragman.jpg"></img>  
        <img class="traders-grid-items" src="Jaeger.jpg"></img>  
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
