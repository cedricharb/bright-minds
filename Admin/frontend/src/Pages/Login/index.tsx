import {
  Card,
  TextInput,
  PasswordInput,
  Button,
  Flex,
  Title,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../data/popup.css";
import axios from "axios";
import "../../data/popup.css";
interface Response {
  //add
  access_token: string;
  result: boolean;
  result_pass: boolean;
  
}
const base_url ="http://127.0.0.1:8000/api/v1/admin";
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

  const loginButton = async (email:string ,old_password:string) => {
    if (false) {
      setSubmitted(true);
      handlePopUp();
    } else {
      setSubmitted(false);
      setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: base_url+"/auth/login",
        params: { email: "" + email, password: "" + old_password },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);
          console.log(data.access_token);
          
          if(data.result){
            //added casses  
            console.log(data.result)
            navigate("/Home");
          }
          //popu to indicate :
          /**
           * unauthorized
           * incorrect email format
           */
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

  const changePassword = async (confirm_email:string ,old_password:string ,new_password:string  ) => {
    if (confirm_email === "" || old_password === "" || new_password === "") {
      handlePopUp();
    } else {
      const options = {
        method: "POST",
        url: base_url+"/auth/changePassword",
        params: {
          old_password: "" + old_password,
          new_password: "" + new_password,
          email: "" + email,
        },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);
          if (!data.result_pass) { // email format
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
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex align="center" justify="center" h="100vh">
      <Modal opened={opened} onClose={close} title="Change Password">
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
          placeholder="Old Password"
          label="Old Password"
          error={submitted ? " " : ""}
          radius="md"
          onChange={(event) => {
            set_Old_Password(event.currentTarget.value);
            console.log(old_password);
          }}
          value={old_password}
        />
        <PasswordInput
          placeholder="New Password"
          label="New Password"
          error={submitted ? " " : ""}
          radius="md"
          onChange={(event) => {
            set_new_Password(event.currentTarget.value);
            console.log(new_password);
          }}
          value={old_password}
        />
        <Flex align="center" justify="center" p="lg">
          <Button
            style={{ background: "#FFFF00", color: "black" }}
            radius="md"
            size="md"
            uppercase
            onClick={()=>changePassword}
          >
            Save
          </Button>
        </Flex>
      </Modal>
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
            style={{ background: "#FFFF00", color: "black", marginLeft: "20px" }}
            radius="md"
            size="md"
            uppercase
            loading={loading}
            onClick={() => {loginButton}}
          >
            Log in
          </Button>
          <Button
            style={{ background: "#FFFF00", color: "black", marginLeft: "20px" }}
            radius="md"
            size="md"
            uppercase
            onClick={open}
          >
            Change Password
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
