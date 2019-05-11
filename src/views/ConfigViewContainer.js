import React from 'react';
import ConfigViewPresent from "./ConfigViewPresent"; 

export default class ConfigViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profile: "Profile text" };
    }    

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ConfigViewPresent 
                profile={this.state.profile} 
                handleOnSliderSlide={this._handleOnSliderSlide} 
                hanleOnButtonPress={this._handleOnButtonPress}
            /> 
        ); 
    }

    /**
     * 
     */
    _handleOnSliderSlide = () => {};
    /**
     * 
     */
    _handleOnButtonPress = () => {};
}
