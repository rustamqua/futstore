import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import Link from "next/link";
import Logo from "../public/exportLogo";
import { Button } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StorefrontIcon from "@material-ui/icons/Storefront";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0px",
    padding: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block"
    },
    fontSize: "24px"
  },
  AppBar: {
    width: "100%",
    margin: "0px",
    padding: "0px",
    background: "rgb(0,7,43)"
  },
  Shop: {
    fontSize: "30px"
  },
  Menu: {
    fontSize: "30px"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    "&:hover": {
      borderBottom: "3px solid white",
      borderRadius: "0px"
    },
    ["@media (max-width:780px)"]: {
      display: "none"
    }
  },
  buttoncreate: {
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none"
    }
  }
}));

function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link href="/">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Главная">
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={"Главная"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/cardConstructor">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Создать карточку">
              <ListItemIcon>
                <SettingsIcon></SettingsIcon>
              </ListItemIcon>
              <ListItemText primary={"Создать карточку"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/catalog">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Каталог">
              <ListItemIcon>
                <StorefrontIcon></StorefrontIcon>
              </ListItemIcon>
              <ListItemText primary={"Каталог"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/delivery">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Доставка">
              <ListItemIcon>
                <LocalShippingIcon></LocalShippingIcon>
              </ListItemIcon>
              <ListItemText primary={"Доставка"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/faq">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="FAQ">
              <ListItemIcon>
                <LiveHelpIcon></LiveHelpIcon>
              </ListItemIcon>
              <ListItemText primary={"FAQ"}></ListItemText>
            </ListItem>
          </a>
        </Link>
        <Link href="/shopCart">
          <a style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button key="Корзина">
              <ListItemIcon>
                <ShoppingBasketIcon></ShoppingBasketIcon>
              </ListItemIcon>
              <ListItemText primary={"Корзина"}></ListItemText>
            </ListItem>
          </a>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon className={classes.Menu} />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <Logo></Logo>
          <Link href="/">
            <Button color="inherit" className={classes.button}>
              Главная
            </Button>
          </Link>
          <Link href="/catalog">
            <Button color="inherit" className={classes.button}>
              КАТАЛОГ
            </Button>
          </Link>
          <Link href="/delivery">
            <Button color="inherit" className={classes.button}>
              ДОСТАВКА
            </Button>
          </Link>
          <Link href="/faq">
            <Button color="inherit" className={classes.button}>
              FAQ
            </Button>
          </Link>
          <Link href="/#contact">
            <Button color="inherit" className={classes.button}>
              КОНТАКТЫ
            </Button>
          </Link>
          <Link href="/cardConstructor">
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttoncreate}
            >
              Создать карточку
            </Button>
          </Link>
          <Link href="/shopCart">
            <IconButton className={classes.menuButton} color={"inherit"}>
              <div className={classes.searchIcon}>
                <ShoppingBasketIcon
                  className={classes.Shop}
                ></ShoppingBasketIcon>
              </div>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Nav;
