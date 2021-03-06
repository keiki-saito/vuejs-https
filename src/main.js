import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-b3d58/databases/(default)/documents";

// データがサーバーに届く前
const interceptorsRequest = axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// サーバーからデータが届く前
const interceptorsResponse = axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
