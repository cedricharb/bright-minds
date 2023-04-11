import { Card,TextInput,PasswordInput,Button } from "@mantine/core";


const Login = () => {
    return(
        <Card style={{ background: 'grey'}} w="50%">
            <TextInput
            placeholder="email"
            label="email"
            error="Invalid email"
            radius="md"
            />
            <PasswordInput
            placeholder="password"
            label="password"
            error="Invalid password"
            radius="md"
            />
            <Button style={{ background: '#FFFF00'}} radius="md" size="md" uppercase>
                Log in
            </Button>
        </Card>
    )
};

export default Login;