import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getProductListAsync } from '../../store/Actions/app.action';
import { AppHeader } from '../header/app-header';
import laysPic from '../../assets/lays.png';
import { moderateScale } from '../scale';

class ProductList extends Component {


    componentDidMount() {
        this.props.getProductListAsync()
    }

    render() {
        const { getProductList } = this.props;
        const productKeys = Object.keys(getProductList)
        return (
            <React.Fragment>
                <AppHeader title={'Product List'}/>
                <ScrollView>
                <View style={{ flex:1 ,justifyContent:'center', alignSelf:'center'}}>
                    {
                        (productKeys.length) ? 
                        productKeys.map( (obj) => {
                            return <View style={{ padding: moderateScale(50), margin:moderateScale(10), flexDirection:'row', backgroundColor:'white' }}>
                                    <View>
                                        <Image source={laysPic} style={{ height: moderateScale(100), width:moderateScale(100)}} />
                                    </View>
                                    <View style={{ paddingHorizontal:moderateScale(100)}}>
                                        <Text>Product: {getProductList[obj].product_name}</Text>
                                        <Text>Qty: {getProductList[obj].qty}</Text>
                                        <Text>Price: {getProductList[obj].price}</Text>
                                    </View>
                                </View>
                        }) : null
                    }
                </View>
                </ScrollView>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        getProductList: state.getProductList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductListAsync : () => dispatch(getProductListAsync())

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductList)