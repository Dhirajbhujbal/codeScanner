import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, Alert, Button } from 'react-native';
import { AppHeader } from '../header/app-header';
import QRCodeScanner from 'react-native-qrcode-scanner';


export class AppProductScanner extends Component {


    constructor(props) {
        super(props)
        this.state= {
            isScannerOpened: false
        }
    }

    onSuccess = (e) => {
        Alert.alert(
            'Code Scanner',
            `Product list data is loaded for ${e.data} , Press 'Go' button to view the products.`,
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'OK', 
                    onPress: () => {
                        this.setState({
                            isScannerOpened: false
                        })
                        this.props.navigation.navigate('ProductList')
                    }
                },
            ],
        );
    }

    render() {
        return (
            <React.Fragment>
                <AppHeader {...this.props} enableBackImage={false} screenName={'Code Scanner'}/>
                <ScrollView>

                        {
                            (this.state.isScannerOpened) ? <QRCodeScanner
                            reactivateTimeout={3000}
                            reactivate={true}
                            onRead={this.onSuccess}
                            topContent={
                            <Text>
                                Scan This QR to get Product List
                            </Text>
                            }
                        /> : <Button title='Scan QR Code' onPress={ () => this.setState({ isScannerOpened: true})} />
                        }
                </ScrollView>
            </React.Fragment>
        );
    }

 

}
