import React from 'react';
import ScanViewPresent from "./ScanViewPresent"; 

export default class ScanViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "Scan something"};
    }    

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ScanViewPresent
                title={this.state.title}
                handleOnButtonPress={this._handleOnButtonPress} 
                handleOnTogglePress={this._handleOnTogglePress}
            /> 
        ); 
    }

    /**
     * 
     */
    _handleOnButtonPress = () => {};
    /**
     * 
     */
    _handleOnTogglePress = () => {};
}
