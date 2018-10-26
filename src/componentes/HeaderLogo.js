import React from 'react'

import {
  Header,
  Left,
  Right,
  Body,
  Icon,
  Button,
  View,
} from 'native-base'

import { Image } from 'react-native'

import { Platform } from 'react-native';

const isIOS = Platform.OS == 'ios'

const style = {
  header: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'center',
    // height: isIOS ? 80 : undefined,
    elevation: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent'
  },
  btn: {
    flexBasis: 64,
    flexGrow: 0,
    width: 64,
  },
  body: {
    flex: 1,
  },
  image: {
    resizeMode: isIOS ? 'contain' : 'center',
    width: '100%',
    height: '100%',
    marginTop: isIOS ? 8 : 0
  }
}

if (isIOS) {
  style.header.height = 86
}

export default class HeaderLogo extends React.Component {
  render () {
    return (
      <View style={{zIndex: 999}}>
        <Image
          source={require('../resources/images/borda_arredondada_transparente.png')}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />
        <Header style={style.header}>
          <Left style={style.btn}>
          {this.props.onBack
            ? <Button rounded style={{width: 50, justifyContent: 'center'}} transparent onPress={this.props.onBack}>
                <Icon name="arrow-back" />
              </Button>
            : null} 
          </Left>
          
          <Body style={style.body} >
            <Text style={{ fontSize: 18, color: darkBlue, textAlign: 'center' }}>{props.title}</Text>
          </Body>

          <Right style={style.btn}>
            {this.props.onMenu
            ? <Button style={{width: 50, justifyContent: 'center'}} rounded transparent onPress={this.props.onMenu}>
                <Icon name="menu" />
              </Button>
            : null} 
          </Right>

        </Header>

      </View>
    )
  }
}
