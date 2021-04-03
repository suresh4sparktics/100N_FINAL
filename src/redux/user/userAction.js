import {
  EMAIL,
  ISLOGGED,
  PHONENUMBER,
  USERNAME,
  EMPTYUSER,
  SALE_COUNT,
} from "./userTypes";

export const phoneNumber = (phone) => {
  return {
    type: PHONENUMBER,
    payload: phone,
  };
};

export const userName = (user) => {
  return {
    type: USERNAME,
    payload: user,
  };
};

export const email = (email) => {
  return {
    type: EMAIL,
    payload: email,
  };
};

export const isLogged = (isLogged) => {
  return {
    type: ISLOGGED,
    payload: isLogged,
  };
};

export const emptyUser = (emptyUser) => {
  return {
    type: EMPTYUSER,
    payload: emptyUser,
  };
};

export const saleCount = (salecount) => {
  return {
    type: SALE_COUNT,
    payload: salecount,
  };
};
