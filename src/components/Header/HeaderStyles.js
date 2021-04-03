import { makeStyles } from "@material-ui/core";

const drawerWidth = 225;

export const HeaderStyles = makeStyles((theme) => ({
  gridWidth: {
    width: "75%",
  },
  headerStyle: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "65px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: "100",
    // boxShadow: "0 8px 6px -6px #47a848",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0px",
    },
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  HeaderStylees: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginRight: "0px",
    },
    marginLeft: "auto",
    marginRight: "auto",
  },
  item: {
    textAlign: "center",
    maxWidth: "75%",
    flexBasis: "75%",
  },
  alignIconHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "5%",
    flexBasis: "5%",
  },
  media: {
    width: "120px",
    height: "50px",
  },
  sideBarMedia: {
    width: "100px",
    height: "40px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  hideIcons: {
    display: "none",
  },
  badgeColor: {
    backgroundColor: "#47a848",
    color: "white",
  },
  socialIconAlignment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  hyperlink: {
    textDecoration: "none",
    color: "green",
    fontSize: "15px",
  },
  menuAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    maxWidth: "15%",
    flexBasis: "15%",
    height: "65px",
  },
  divStyle: {
    width: "70%",
    backgroundColor: "red",
  },
  drawerLeft: {
    left: "0",
    [theme.breakpoints.down("sm")]: {
      left: "0",
    },
  },
}));
