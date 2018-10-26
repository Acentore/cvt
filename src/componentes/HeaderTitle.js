import React from 'react';
import {
    Header,
    View,
    Text
} from 'native-base';
import { Image, Platform } from 'react-native'
import { darkBlue } from '../theme/colors';

const isIOS = Platform.OS == 'ios'

const HeaderTitle = (props) => (
    <View style={{
        height: props.height || 90,
        position: 'absolute',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        top: isIOS ? 72 : 50,
        left: 0,
        right: 0,
        zIndex: 998,
    }}>
        <Image
            source={require('../resources/images/borda_circular_titulo.png')}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: -1
            }}
        />
        <Header
            style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 0,
                borderBottomColor: 'transparent',
                borderBottomWidth: 0
            }} 
        >
            <Text style={{ fontSize: 18, color: darkBlue, textAlign: 'center' }}>{props.title}</Text>
        </Header>
    </View>
);

export default HeaderTitle;
