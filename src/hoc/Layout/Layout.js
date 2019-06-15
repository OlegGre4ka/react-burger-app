import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrower from '../../components/Navigation/SideDrower/SideDrower';

class Layout extends React.Component {
    state = {
        showSideDrower: false
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