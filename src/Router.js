import { createStackNavigator } from "react-navigation";
import Login from "./views/Login";
import Teste from "./views/Teste";

const view = screen => ({ screen });

export default createStackNavigator(
  {
    Teste: { screen: Teste },
    Login: view(Login),
  },
  {
    initialRouteName: "Teste",
    headerMode: "none"
  }
);
