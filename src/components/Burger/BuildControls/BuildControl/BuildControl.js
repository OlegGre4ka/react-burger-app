import React from 'react';
import classes from './BuildControl.module.scss';
// import './BuildControl.module.scss';


const buildControl = props => {
    return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>)
    // return(
    //     <div className="BuildControl">
    //         <div className="Label">{props.label}</div>
    //         <button className="Less">Less</button>
    //         <button className="More">More</button>
    //     </div>)
}
export default buildControl