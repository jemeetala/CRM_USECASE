import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization: "Token token=fg88hUkUczuzGL8gxyXJAA",
    "Content-Type": "application/json",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getTasks = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/api/tasks`,
    method: "get",
    params: { filter: "open", ...params },
    headers,
    data,
  });
};
