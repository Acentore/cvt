import React from "react";
import { Image, View, Platform } from "react-native";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Button,
  Icon
} from "native-base";
import { connect } from "react-redux";
import { getAvatar } from "../utils";
import { blue, darkBlue } from "../theme/colors";
import {
  withNavigation,
  NavigationActions,
  StackActions
} from "react-navigation";


const isIOS = Platform.OS === 'ios'

const routes = [
  {
    name: "Início",
    action: StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    })
  },
  {
    name: "Meu Cadastro",
    path: "PacienteForm",
    props: { edit: true }
  },
  {
    name: "Foto do perfil",
    path: "CadastroFotoPerfil",
    props: { edit: true }
  },

  {
    name: "Endereços",
    path: "EnderecosList"
  },

  {
    name: "Dependentes",
    path: "DependentesList"
  },
  {
    name: "Histórico de consultas",
    path: "Historico"
  },

  {
    name: "Cartões",
    path: "Cartoes"
  },

  {
    name: "Sair",
    path: "Sair"
  }
];

class SideBar extends React.Component {
  render() {
    return this.props.user ? (
      <Container style={style.container}>
        <View
          style={{
            flexDirection: "column",
            flexGrow: 0,
            margin: 0,
            padding: 0,
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 0,
              height: 120,
              width: "100%",
              alignItems: "center",
              overflow: "hidden",
              backgroundColor: darkBlue,
              paddingTop: isIOS ? 16 : 0,
              position: 'relative'
            }}
          >
            <Button
              rounded
              transparent
              icon
              style={style.close}
              onPress={() => this.props.drawer.closeDrawer()}
            >
              <Icon style={{ color: "#FFF" }} name="close" />
            </Button>
            <Image
              style={{
                borderRadius: 25,
                height: 50,
                width: 50,
                marginTop: 8,
                marginBottom: 6
              }}
              source={getAvatar(this.props.user)}
            />
            <Text
              style={{
                color: "#FFF",
                textShadowColor: "rgba(0,0,0,.25)",
                fontSize: 20
              }}
            >
              {this.props.user.nomeGuerra || this.props.user.nome}
            </Text>
          </View>
          <Content style={{ marginTop: 0, padding: 0 }}>
            <List
              scrollEnabled={true}
              dataArray={routes}
              renderRow={route => {
                return (
                  <ListItem
                    button
                    onPress={() =>
                      route.action
                        ? this.props.navigation.dispatch(route.action)
                        : this.props.navigation.navigate(
                            route.path,
                            route.props
                          )
                    }
                    style={{ justifyContent: "flex-start" }}
                  >
                    <Text style={{ color: blue }}>{route.name}</Text>
                  </ListItem>
                );
              }}
            />
          </Content>
        </View>
      </Container>
    ) : null;
  }
}

const style = {
  container: {
    position: "relative",
    height: "100%"
  },
  close: {
    position: "absolute",
    top: isIOS ? 12 : 0,
    right: 0,
    zIndex: 9999999
  }
};
export default connect(state => state.auth)(withNavigation(SideBar));
