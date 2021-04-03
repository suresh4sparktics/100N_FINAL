/* eslint-disable no-unused-vars */
import { CardMedia, makeStyles, SvgIcon } from "@material-ui/core";
import "./Icon.css";
// import about_Green from "./about.png";
// import about_White from "./about-2.png";
import basket_Green from "./basket_Green.png";
import basket_White from "./basket_White.png";
import facebook_Green from "./fb_Green.png";
import facebook_White from "./fb_White.png";
import gallery_White from "./gallery_White.png";
import gallery_Green from "./gallery_Green.png";
import home_Green from "./home_Green.png";
import home_White from "./home_White.png";
import insta_Green from "./insta_Green.png";
import insta_White from "./insta_White.png";
import list_Green from "./list_Green.png";
import list_White from "./list_White.png";
import lock_Green from "./lock_Green.png";
import lock_White from "./lock_White.png";
import menu_Green from "./menu_Green.png";
import menu_Orange from "./menu_Orange.png";
import menu_White from "./menu_White.png";
import menu_Orange_Full from "./menu_Orange_Full.png";
import profile_Green from "./profile_Green.png";
import profile_White from "./profile_White.png";
import orders_Green from "./orders_Green.png";
import orders_White from "./orders_White.png";
import nonVeg from "./nonVeg.png";
import veg from "./veg.png";
import egg from "./egg.png";
import signOut_Green from "./signout_Green.png";
import signOut_White from "./signout_White.png";
import leftArrow from "./LeftArrow.png";
import rightArrow from "./RigthAroow.png";

import inQueue from "./inQueue.png";
import preparation from "./preparation.png";
import delivery from "./delivery.png";
import completed from "./completed.png";

import inQueue1 from "./inQueue1.png";
import preparation1 from "./preparation1.png";
import delivery1 from "./delivery1.png";
import completed1 from "./completed1.png";

import inQueue_White from "./inQueue_White.png";
import preparation_White from "./inPreparation_White.png";
import delivery_White from "./readyForDelivery_White.png";
import completed_White from "./completed_White.png";

import info from "./info.png";

import binoculars from "./binoculars.png";

const useStyles = makeStyles({
  small_icon: {
    height: "24px",
    width: "24px",
    marginLeft: "-5.5px !important",
  },
  icon: {
    height: "32px",
    width: "32px",
  },
  basketIcon: {
    height: "36px",
    width: "36px",
  },
  menuIcon: {
    height: "28px",
    width: "28px",
  },
  orderIcons: {
    height: "32px",
    width: "32px",
  },
  infoIcon: {
    height: "17px",
    width: "17px",
  },
  mediaIcon: {
    height: "36px",
    width: "36px",
  },
  arrow: {
    height: "24px",
    width: "24px",
    marginLeft: "-5.5px !important",
  },
  binoculars: {
    marginRight: "5px",
  },
});

export function BasketIconGreen() {
  const classes = useStyles();
  return (
    <img src={basket_Green} className={classes.basketIcon} alt="Basket" />
    // <CardMedia
    //   component="img"
    //   className={classes.basketIcon}
    //   image={basket_Green}
    //
    // />
  );
}

export function BasketIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.basketIcon}
      image={basket_White}
    />
  );
}

export function FBIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.mediaIcon}
      image={facebook_Green}
    />
  );
}

export function FBIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.icon}
      image={facebook_White}
    />
  );
}

export function GalleryIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={gallery_Green} />
  );
}

export function GalleryIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={gallery_White} />
  );
}

export function HomeIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={home_Green} />
  );
}

export function HomeIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={home_White} />
  );
}

export function InstaIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.mediaIcon}
      image={insta_Green}
    />
  );
}

export function InstaIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={insta_White} />
  );
}

export function ListIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={list_Green} />
  );
}

export function ListIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={list_White} />
  );
}

export function LockIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={lock_Green} />
  );
}

export function LockIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={lock_White} />
  );
}

export function MenuIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.menuIcon}
      image={menu_White}
      title="Menu"
    />
  );
}

export function MenuIconOrange() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={menu_Orange} />
  );
}

export function MenuIconOrangeFull() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.icon}
      image={menu_Orange_Full}
    />
  );
}

export function ProfileIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={profile_Green} />
  );
}

export function ProfileIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={profile_White} />
  );
}

export function OrdersIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={orders_Green} />
  );
}

export function OrdersIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={orders_White} />
  );
}

export function SignOutIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={signOut_Green} />
  );
}

export function SignOutIconWhite() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.icon} image={signOut_White} />
  );
}

export function Veg() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.small_icon} image={veg} />
  );
}

export function NonVeg() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.small_icon} image={nonVeg} />
  );
}

export function Egg() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.small_icon} image={egg} />
  );
}

export function RightArrow() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.arrow} image={rightArrow} />
  );
}

export function LeftArrow() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.arrow} image={leftArrow} />
  );
}
export function InQueue() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.orderIcon} image={inQueue} />
  );
}

export function Preparation() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={preparation}
    />
  );
}

export function Delivery() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={delivery}
      title="Delivery"
    />
  );
}

export function Completed() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={completed}
    />
  );
}

export function InQueue1() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.orderIcon} image={inQueue1} />
  );
}

export function Preparation1() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={preparation1}
    />
  );
}

export function Delivery1() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={delivery1}
      title="Delivery"
    />
  );
}

export function Completed1() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={completed1}
    />
  );
}

export function InQueue_White() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={inQueue_White}
    />
  );
}

export function Preparation_White() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={preparation_White}
    />
  );
}

export function Delivery_White() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={delivery_White}
      title="Delivery"
    />
  );
}

export function Completed_White() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.orderIcon}
      image={completed_White}
    />
  );
}

export function BackIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" htmlColor={props.colour}>
      <polygon points="20,11 6.416,11 12.718,4.707 11.305,3.292 2.585,12 11.305,20.707 12.718,19.292 6.417,13 20,13 " />
    </SvgIcon>
  );
}

export function InfoIcon() {
  const classes = useStyles();
  return (
    <CardMedia component="img" className={classes.infoIcon} image={info} />
  );
}

export function MenuIconGreen() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      className={classes.menuIcon}
      image={menu_Green}
      title="Menu"
    />
  );
}

export function MenuIconCustom() {
  return (
    <div className="menu">
      <span className="bar bar1"></span>
      <span className="bar bar2"></span>
      <span className="bar bar1"></span>
    </div>
  );
}

export function Binoculars() {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      image={binoculars}
      className={classes.binoculars}
    />
  );
}
