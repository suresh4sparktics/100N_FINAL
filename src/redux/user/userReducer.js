import {
  PHONENUMBER,
  USERNAME,
  EMAIL,
  ISLOGGED,
  EMPTYUSER,
  SALE_COUNT,
} from "./userTypes";

const USER = JSON.parse(localStorage.getItem("user"));

const userInitialState = USER
  ? USER
  : {
      userName: "",
      phoneNumber: "",
      email: "",
      isLogged: false,
      sale_count: 0,
    };

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case PHONENUMBER:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, phoneNumber: action.payload })
      );
      return { ...state, phoneNumber: action.payload };
    case USERNAME:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, userName: action.payload })
      );
      return { ...state, userName: action.payload };
    case EMAIL:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, email: action.payload })
      );
      return { ...state, email: action.payload };
    case SALE_COUNT:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, sale_count: action.payload })
      );
      return { ...state, sale_count: action.payload };
    case ISLOGGED:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, isLogged: action.payload })
      );
      return { ...state, isLogged: action.payload };
    case EMPTYUSER:
      // console.log("EmptyUSer");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, userName: "", phoneNumber: "", email: "" })
      );
      return { ...state, userName: "", phoneNumber: "", email: "" };
    default:
      return state;
  }
};
