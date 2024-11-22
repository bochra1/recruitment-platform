import http from "./Http";
const Auth = (data) => {
  return http.post("/signin", data);
};
export default Auth;
