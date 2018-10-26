import React, { Component } from 'react';
import { Container, Header, Item, Input, View, Button, Text } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#025A2A"
          style={{ backgroundColor: "#025A2A" }}
        >
          <Text style={{ color: "#fff", alignSelf: 'center', fontSize: 22 }}>Centec</Text>
        </Header>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 10
          }}
        >
          <View>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
              <Input placeholder="Senha" />
            </Item>
          </View>
          <Button
            style={{ backgroundColor: "#025A2A", marginTop: 8, alignSelf:"center" }}
            primary
            onPress={() => this.props.navigation.navigate('Teste')}
          >
            <Text> Entrar </Text>
          </Button>
        </View>
      </Container>
    );
  }
}