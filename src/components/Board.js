import React from 'react'

const style = {
    scoreBox: {
        borderRadius: "5px",
        borderWidth: "2px",
        borderColor: "black",
        borderStyle: "solid",
        width: "200px"
    }
}

export default props => (
    <div style={ style.scoreBox }>
        <h3> SCORE </h3>
        <h1>{ props.score } </h1>
    </div>    
)