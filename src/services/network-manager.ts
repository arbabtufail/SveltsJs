import axios from "./axios/axios";
import {
  ACCOUNT_API,
  CONTACT_API,
  SIGN_IN_API,
  BUILDING_API,
  CRITICAL_DATES_API,
  LEASE_API,
  SUITES_API,
  BUILDING_PHOTO_API,
  BUILDING_SALES_API,
  FLYERS_API,
  FLOOR_PLAN_API,
  NEWS_API,
  VIDEO_API,
  ACCOUNT_TYPE_API,
} from "./axios/constants";

interface IFields {
  [key: string]: string;
}

const ApiFields: IFields = {
  account: ACCOUNT_API,
  contact: CONTACT_API,
  building: BUILDING_API,
  critical_dates: CRITICAL_DATES_API,
  lease: LEASE_API,
  suites: SUITES_API,
  building_photo: BUILDING_PHOTO_API,
  building_sales: BUILDING_SALES_API,
  flyers: FLYERS_API,
  floor_plan: FLOOR_PLAN_API,
  news: NEWS_API,
  video: VIDEO_API,
};

export default class NetworkManager {
  static signIn = async (username: string, password: string) => {
    const body = {
      username: username,
      password: password,
    };
    const data = JSON.stringify(body);
    return axios.post(SIGN_IN_API, data);
  };
  static contact = async () => {
    return axios.get(CONTACT_API);
  };
  static account = async () => {
    return axios.get(ACCOUNT_API);
  };
  static building = async () => {
    return axios.get(BUILDING_API);
  };
  static critical_dates = async () => {
    return axios.get(CRITICAL_DATES_API);
  };

  static getAccountType = async () => {
    return axios.get(ACCOUNT_TYPE_API);
  };
  static getDataById = async (id: string, key: string) => {
    return axios.get(`${ApiFields[key]}/${id}`);
  };
}
