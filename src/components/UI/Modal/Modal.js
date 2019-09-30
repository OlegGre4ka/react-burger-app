import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
    shouldComponentUpdate(nextProps){
        if(nextProps.show !==this.props.show || nextProps.children!==this.props.children){
            return true
        }
        return false
    }

    // componentDidUpdate(){
    //     console.log('Modal-DidUpdate');
    // }

    render() {
            // console.log('Modal')
        return (
            <>
                <Backdrop closed={this.props.closeModal} show={this.props.show} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </>)
    }
}

export default Modal