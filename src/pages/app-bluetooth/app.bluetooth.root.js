import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppHeader } from '../header/app-header';
import { BluetoothCmp } from '../bluetooth.root';

export class AppBluetoothComponent extends Component {

    render() {
        return(
            <>
            <AppHeader title={'App Bluetooth'}/>
            <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>App Bluetooth is loaded.....</Text>
                <BluetoothCmp />
            </View>
            </>
        )
    }

}