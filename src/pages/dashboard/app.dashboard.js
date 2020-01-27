import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { AppHeader } from '../header/app-header';
import { AppNavigationConstant } from '../../navigator/navigator.constant';

export class AppDashboard extends Component {

    render() {
        return(
            <>
                <AppHeader title={'Dashboard'} />
                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Button title={'Product Scanner'} onPress={ () => this.props.navigation.navigate(AppNavigationConstant.APP_SCANNER)}  />
                        <Button  title={'Bluetooth List'} onPress={ () => this.props.navigation.navigate(AppNavigationConstant.APP_BLUETOOTH)} />
                </View>
            </>
        )
    }

}