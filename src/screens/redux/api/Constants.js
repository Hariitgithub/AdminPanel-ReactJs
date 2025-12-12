
export const BASE_URL = "https://dummyjson.com/posts"; // develop

export const URL = {
  LOGIN: "admin/login",
  LOGOUT: "admin-logout",

};

export const TOKEN = "token";
export const USER_DETAILS = "user_details";
export const PROFILE = "profile";

export const NUMBER = /^\+?(0|[6-9]\d*)$/;
export const EMAIL =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
export const PASS =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.?&])[A-Za-z\d@$!%.*?&]{8,}$/;
export const isValidEmail = (email) => {
  return EMAIL.test(email);
};


export const productDetailImg = {
  loop: true,
  autoplay: false,
  center: true,
  dots: true,
  autoplayTimeout: 3000,
  smartSpeed: 450,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
};
