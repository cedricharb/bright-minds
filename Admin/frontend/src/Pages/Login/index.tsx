import { Card, TextInput, PasswordInput, Button, Flex } from "@mantine/core";
import { useState } from "react";
import { login } from '../../API/loginAPI';
const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (!email || !password) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      setLoading(true);
      login();
      console.log(email);
      console.log(password);
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
            onClick={login}
          >
            Log in
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;