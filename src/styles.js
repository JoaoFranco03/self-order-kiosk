import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((themeObject) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  red: {
    backgroundColor: "#EE0000",
    color: "#ffffff",
  },
  black: {
    backgroundColor: "#000000",
    color: "#000000",
  },
  gray: {
    backgroundColor: "#6F6F6F",
    color: "#6F6F6F",
  },
  main: {
    flex: 1,
    overflowX: "hidden", 
    overflowY: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  centerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 55,
    paddingBottom: 170,
  },
  Btn_StartOrder: {
    height: "15vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  green: {
    backgroundColor: "#00b020",
  },
  yellow: {
    backgroundColor: "#FFBC0D",
  },
  largeLogo: {
    height: 100,
  },
  corner: {
    position: "relative",
    width: 200,
    height: 200,
    padding: 10,
    margin: 100,
  },
  logo: {
    height: 50,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rounded: {
    borderRadius: 35,
  },
  lessRounded: {
    borderRadius: 15,
  },
  card: {
    position: 'relative',
    margin: 10,
  },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: {
    width: 200,
    padding: 20,
  },
  reviewMedia: {
    width: 20,
    padding: 20,
  },
  largeButton: {
    width: 250,
  },
  largeInput: {
    width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 30,
    margin: 5,
    borderStyle: "solid",
  },
  row: {
    display: "flex",
    padding: 10,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  chooseBackground: {
    backgroundImage: 'url("../images/ChooseBackground.svg")',
    backgroundSize: "cover",
  },
  textWhite: {
    color: "white",
  },
  chooseBackground2: {
    backgroundImage: 'url("../images/ChooseBackground2.svg")',
    backgroundSize: "cover",
  },
  TextBlack: {
    color: "black",
  },
  column: { flexDirection: "column" },
}));
