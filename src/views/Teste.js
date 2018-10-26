import React, { Component } from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import {
  Container,
  Header,
  List,
  ListItem,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button,
  Content
} from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import {
  PieChart
} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
const screenWidth = Dimensions.get('window').width

export default class Teste extends Component {
  render() {
    const data = [
      { name: 'Limoeiro do Norte', population: 27, color: '#C04C4C', legendFontColor: '#7F7F7F', legendFontSize: 16 },
      { name: 'Morada Nova', population: 16, color: '#3C8C77', legendFontColor: '#7F7F7F', legendFontSize: 16 },
      { name: 'Russas', population: 14, color: '#D1BC3F', legendFontColor: '#7F7F7F', legendFontSize: 16 },
      { name: 'Tabuleiro', population: 13, color: '#8F467B', legendFontColor: '#7F7F7F', legendFontSize: 16 },
      { name: 'Fortaleza', population: 8, color: '#5791C5', legendFontColor: '#7F7F7F', legendFontSize: 16 },
      { name: 'Cidade Alta', population: 2, color: '#54B743', legendFontColor: '#7F7F7F', legendFontSize: 16 }
    ]

    let pop = data.map(p => p.population).reduce(function(cont, atual) {
      return cont + atual;
    });

    return (
      <Container>
        <StatusBar backgroundColor="#02632E" />
        <Header
          androidStatusBarColor="#025A2A"
          style={{ backgroundColor: "#025A2A" }}
        >
          <Text style={{ color: "#fff", alignSelf: 'center', fontSize: 22 }}>CVT</Text>
        </Header>
        <Content>
          <PieChart
            data={data}
            width={screenWidth}
            height={250}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
          
          <List>
            {data.map((item, key)=>(
              <ListItem key={key} onPress={() => alert(item.name)}>
                <Text
                  style={{ color: `${item.color}` }}
                > 
                  <FontAwesome>{Icons.circle} </FontAwesome>
                  {Math.round(100 / pop * item.population)}% { item.name }
                </Text>
              </ListItem>
            ))}
          </List>
          <Footer>
            <FooterTab style={{ backgroundColor: "#025A2A" }}>
              <Button>
                <Text style={style.texto}>Apps</Text>
              </Button>
              <Button>
                <Text style={style.texto}>Camera</Text>
              </Button>
              <Button>
                <Text style={style.texto}>Navigate</Text>
              </Button>
              <Button>
                <Text style={style.texto}>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }
}

const style = {
  texto: {
    color: "#fff",
  }
}