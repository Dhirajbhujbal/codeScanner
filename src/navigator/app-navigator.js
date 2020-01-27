import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from 'react-native';
import { AppNavigationConstant } from './navigator.constant';
// import { AppNavigationConstant } from './navigation.constant';
import { AppDashboard } from '../pages/dashboard/app.dashboard';
import { AppProductScanner } from '../pages/product-scanner/product.scanner.root';
import { AppBluetoothComponent } from '../pages/app-bluetooth/app.bluetooth.root';
import ProductList from '../pages/product-scanner/product.list';

const MyFun = () => {
    return (
        <View style={{ width: '100%', height: 200, backgroundColor: 'red'}}>
            <Text>Loaded</Text>
        </View>
    )
}

export class AppNavigator {

    static Nav() {

        return createStackNavigator({
            [AppNavigationConstant.APP_DASHBOARD]: AppDashboard,
            [AppNavigationConstant.APP_SCANNER]: AppProductScanner,
            [AppNavigationConstant.APP_BLUETOOTH]: AppBluetoothComponent,
            [AppNavigationConstant.PRODUCT_LIST]: ProductList
        },{
            initialRouteName: 'Dashboard',
            headerMode: 'none'
        })

    }

}