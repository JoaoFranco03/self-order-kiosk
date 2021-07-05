import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { useContext } from "react";
import { BrowserRouter, Route} from 'react-router-dom'
import AdminScreen from "./screens/AdminScreen";
import ChooseScreen from "./screens/ChooseScreen";
import CompleteOrderScreen from "./screens/CompleteOrderScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SelectPaymentScreen from "./screens/SelectPaymentScreen";
import { Store } from "./Store";

const themeObject = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
    h1: { 
      fontWeight: "bold" ,
    },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    type: 'dark',
    primary: { main: "#FFBC0D" },
    secondary: {
      main: "#be0c0c",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  const { state } = useContext(Store);
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route path="/select-payment" component={SelectPaymentScreen} exact></Route>
            <Route path="/payment" component={PaymentScreen} exact></Route>
            <Route path="/complete" component={CompleteOrderScreen} exact></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
