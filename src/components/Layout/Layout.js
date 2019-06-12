import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrower from '../Navigation/SideDrower/SideDrower';

class Layout extends React.Component {
    state = {
        showSideDrower: true
    }
    showSideDrowerHandler = () => {
        this.setState({
            showSideDrower: !this.state.showSideDrower
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar showSideDrower={this.showSideDrowerHandler}  />
                <SideDrower open={this.state.showSideDrower} showSideDrower={this.showSideDrowerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout