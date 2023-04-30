import { Card, TextInput, PasswordInput, Button, Flex } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { login } from "../../API/loginAPI";
import axios from "axios";
interface Response {
  access_token: string;
}
const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate();

  const handlePopUp = () => {
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 3000);
  };

  const loginButton = async () => {
    if (!email || !password) {
      setSubmitted(true);
      handlePopUp();
    } else {
      setSubmitted(false);
      setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/admin/auth/login",
        params: { email: "" + email, password: "" + password },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);
          console.log(data.access_token);
          navigate("/Home");
        })

        .catch(function (error: any) {
          console.error(error);
          setSubmitted(true);
          handlePopUp();
        });
      //navigate("/Home");
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Card style={{ background: "grey", minHeight: "250px" }} w="30%">
        <div style={{ height: "50px", width: "50px" }} />
        <Flex direction="column" gap="md" h={160}>
          <TextInput
            placeholder="Email"
            label="Email"
            error={submitted ? " " : ""}
            radius="md"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              console.log(email);
            }}
            value={email}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            error={submitted ? " " : ""}
            radius="md"
            onChange={(event) => {
              setPassword(event.currentTarget.value);
              console.log(password);
            }}
            value={password}
          />
        </Flex>
        <Flex align="center" justify="center" p="lg">
          <Button
            style={{ background: "#FFFF00" }}
            radius="md"
            size="md"
            uppercase
            loading={loading}
            onClick={loginButton}
          >
            Log in
          </Button>

          {showPopUp && (
            <div className="pop-up">Cannot log in make sure you credentials are correct</div>
          )}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;
