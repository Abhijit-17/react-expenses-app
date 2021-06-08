/**
 * wrapper component 
 */

// import css
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}

// export the componet
export default Card