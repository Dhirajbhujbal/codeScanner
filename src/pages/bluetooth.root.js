import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { BleManager } from "react-native-ble-plx"

 

export class BluetoothCmp extends Component {

    bleManagerObj = new BleManager();

    componentDidMount() {
        
        this.bleManagerObj.startDeviceScan(null, null, (error, device) => {
            // if (error) {
            //     // Handle error (scanning will be stopped automatically)
            //     return
            // }

            // if(error) {
            //     Alert.alert('error')
            // }

            if(device) {
                Alert.alert('Device found')
            }
    
            // console.log('-------', JSON.stringify(device));

            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            // if (device.name === 'TI BLE Sensor Tag' || 
            //     device.name === 'SensorTag') {
                
            //     // Stop scanning as it's not necessary if you are scanning for one device.
            //     this.bleManagerObj.stopDeviceScan();
    
            //     // Proceed with connection.
            // }
        });
    }

    render() {
        return (
            <View style={{ flex:1, justifyContent:'center'}}>
                <Text>
                    Bluetooth Component is loaded..
                </Text>
            </View>
        )
    }

}