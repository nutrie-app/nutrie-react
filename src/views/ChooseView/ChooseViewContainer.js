import React from 'react';
import ChooseViewPresent from "./ChooseViewPresent"; 

export default class ChooseViewContainer extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ChooseViewPresent /> 
        ); 
    }
}