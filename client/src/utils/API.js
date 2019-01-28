import axios from "axios";

export default {
  // Gets user from userRoutes based on ID
  getUser: function(q) {
    return axios.get("/api/userRoutes", { params: { q: "id:" + id } });
  }
};