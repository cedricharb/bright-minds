import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconNotebook } from "@tabler/icons-react";
import {
  Group,
  Text,
  Flex,
  Button,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import ThemeButton from "../ThemeSwitch";
import axios from "axios";

const links = [
  { link: "/home", label: "Home Page" },
  { link: "/classes", label: "Classes" },
  { link: "/faq", label: "FAQ" },
  { link: "/camps", label: "Camps" },
  { link: "/about-us", label: "About Us" },
];

const Navbar = () => {
  const [active, setActive] = useState(
    links.findIndex((element) => element.link === window.location.pathname)
  );
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const logout = () => {
    const base_url = "http://127.0.0.1:8000/api/v1/admin";
    const options = {
      method: "POST",
      url: base_url + "/auth/logout",
      params: {},
      headers: {
        Authorization :'Bearer' + localStorage.getItem("token"),
      },
    };

    axios
      .request(options)
      .then(function ({ data }) {
        console.log(data);
        //console.log(localStorage.getItem("token"))

        if (data.result) {
          localStorage.setItem("token", "");
         navigate("/login");
        }
      })
      .catch(function (error: any) {
        console.error(error);
      });
      //localStorage.setItem("token", "");
     // navigate("/login");
  };
  return (
    <Flex direction="column" justify="space-between" h="100%" p="lg">
      <Flex gap={5} direction="column" bg={theme.colors.gray[4]} w="100%">
        <UnstyledButton onClick={() => navigate("/home")}>
          <Group h={60} mb={20} pl={5}>
            <IconNotebook color={theme.colors.yellow[4]} />
            <Text weight="bolder" color={theme.colors.yellow[4]}>
              Bright Minds
            </Text>
          </Group>
        </UnstyledButton>
        {links.map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              color="yellow"
              onClick={() => setActive(index)}
              variant={index === active ? "filled" : "subtle"}
              style={{ borderRadius: 5 }}
            >
              <Text
                component="p"
                w={180}
                color={index === active ? "dark" : theme.colors.yellow[4]}
              >
                {item.label}
              </Text>
            </Button>
          </Link>
        ))}
      </Flex>
      <Flex gap="md" direction="column" w="100%">
        <Button color="yellow" onClick={logout} w="100%">
          Logout
        </Button>
        <ThemeButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
