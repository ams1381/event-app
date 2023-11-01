import React, { FC } from "react";
import { Image, ImageSourcePropType, ViewStyle } from "react-native";

interface IconProps {
  name: string;
  style?: object;
}

interface IconStyle {
  Icon: ViewStyle;
}

interface IconImages {
  [key: string]: ImageSourcePropType;
}

const iconImages: IconImages = {
  baseLogo: require("./../../assets/images/baseLogo.png"),
  backLogo: require("./../../assets/images/backLogo.png"),
  originLogo: require("./../../assets/images/logo.png"),
  bigLogo: require("./../../assets/images/Vector.png"),
  shape: require("./../../assets/images/shape.png"),
  shapeLine: require("./../../assets/images/shapeLine.png"),
  loading: require("./../../assets/images/loading.png"),
  welComeGif: require("./../../assets/images/gifs/welcome.gif"),
  welComeCircle: require("./../../assets/images/svg/welcome/Frame19.png"),
  welComeLine1: require("./../../assets/images/svg/welcome/Vector1.png"),
  welComeLine2: require("./../../assets/images/svg/welcome/Vector2.png"),
  welComeGif2: require("./../../assets/images/gifs/welcom2.gif"),
  welComeCircleTop2: require("./../../assets/images/svg/welcome2/Frame2.png"),
  welComeCricleBottom2: require("./../../assets/images/svg/welcome2/Ellipse2.png"),
  welComeCircleRight2: require("./../../assets/images/svg/welcome2/Frame26.png"),
  otpLogo: require("./../../assets/images/svg/otp/big.png"),
  otpBigLogo: require("./../../assets/images/svg/otp/org.png"),
  phone: require("./../../assets/images/svg/login/Call.png"),
  otpSmsShape: require("./../../assets/images/otpsms.png"),
  otpSmsOrigin: require("./../../assets/images/otpShapeOrigin.png"),
  user: require("./../../assets/images/svg/profile/User.png"),
  edit: require("./../../assets/images/svg/profile/Edit.png"),
  homeShape: require('./../../assets/images/shapeHome.png'),
  shapeGradiant: require('./../../assets/images/linerGradiant.png'),
  info: require('./../../assets/images/info.png'),
  X:require('./../../assets/images/X.png'),
  navbarLogo:require('./../../assets/images/navbarLogo.png'),
  search:require('./../../assets/images/Search.png'),
};

const Icon: FC<IconProps> = ({ name, style }) => {
  return <Image style={style} resizeMode="contain" source={iconImages[name]} />;
};

export default Icon;
