import {
  Card,
  TextInput,
  PasswordInput,
  Button,
  Flex,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../data/popup.css";
import axios from "axios";
interface Response {
  //add
  access_token: string;
  result: boolean;
}
const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [confirm_email, setConfirmEmail] = useState("");
  const [old_password, set_Old_Password] = useState("");
  const [new_password, set_new_Password] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const navigate = useNavigate();

  const handlePopUp = () => {
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 3000);
  };

  const loginButton = async () => {
    if (!email || !old_password) {
      setSubmitted(true);
      handlePopUp();
    } else {
      setSubmitted(false);
      setLoading(true);

      const options = {
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/admin/auth/login",
        params: { email: "" + email, password: "" + old_password },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);
          console.log(data.access_token);
          navigate("/home");
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

  const changePassword = async () => {

    if(confirm_email === "" || old_password=== "" ||new_password==="" ){
      handlePopUp();
    }
    else{
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/admin/auth/changePassword",
      params: {
        old_password: "" + old_password,
        new__password: "" + new_password,
        email: "" + email,
      },
      headers: {},
    };
    axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
        console.log(data);
        if (!data.result) {
          handlePopUp();
        } else {
          navigate("/login");
        }
      })

      .catch(function (error: any) {
        console.error(error);
        setSubmitted(true);
        handlePopUp();
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Card style={{ background: "grey", minHeight: "250px" }} w="30%">
        <Title align="center" fz="xl">
          Log in
        </Title>
        <div style={{ height: "50px", width: "50px" }} />
        <Flex direction="column" gap="md" h={160}>
          <TextInput
            placeholder="Email"
            label="Email"
            error={submitted ? " " : ""}
            radius="md"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              setConfirmEmail(event.currentTarget.value);
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
              set_Old_Password(event.currentTarget.value);
              console.log(old_password);
            }}
            value={old_password}
          />
        </Flex>
        <Flex align="center" justify="center" p="lg">
          <Button
            style={{ background: "#FFFF00", color: "black" }}
            radius="md"
            size="md"
            uppercase
            loading={loading}
            onClick={loginButton}
          >
            Log in
          </Button>

          {showPopUp && (
            <div className="pop-up">
              Cannot log in make sure you credentials are correct
            </div>
          )}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;
