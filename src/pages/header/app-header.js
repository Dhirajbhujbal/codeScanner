import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
// import backImage from '../../assets/images/back.png';
// import menuIconImage from '../../assets/images/menu-icons.png';
// import searchImage from '../../assets/images/search.png';
// import rightMenuImage from '../../assets/images/rightMenu.png';
import { headerStyle } from './app-header.style';
import { moderateScale } from '../scale';

export class AppHeader extends Component {

    style = headerStyle();

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView>
                <View style={[this.style.parentView, {backgroundColor: 'white' }]}>
                <Text>{this.props.title}</Text>
                </View>
            </SafeAreaView>
        )
    }

}