import React from 'react';
import IconViewPresent from "./IconViewPresent"; 

export default class IconViewContainer extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <IconViewPresent /> 
        ); 
    }
}