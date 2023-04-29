import axios from "axios";
interface Response {
  token: string;
}
export function login() {
  const options = {
    method: "POST",
    url: "http://127.0.0.1:8000/api/v1/admin/auth/login",
    params: { email: "", password: "" },
    headers: {},
  };
  axios
    .request(options)
    .then(function ({ data }: { data: Response }) {
      console.log(data);
    })
    .catch(function (error: any) {
      console.error(error);
    });
}
