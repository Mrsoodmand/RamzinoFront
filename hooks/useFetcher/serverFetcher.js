import axios from "axios";
import { baseApi } from "./config";

const get = async (url, params = {}, ip) => {
  try {
    const { status, data } = await axios.get(baseApi + url, {
      params,
      proxy: false,
      headers: {
        HEADER_X_FORWARDED_ALL: ip ? ip : null,
      },
    });

    return {
      status,
      data,
    };
  } catch (err) {
    return {
      status: 500,
      data: null,
    };
  }
};

const serverFetcher = { get };

export default serverFetcher;
