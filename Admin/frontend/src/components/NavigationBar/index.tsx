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

const links = [
  { link: "/Home", label: "Home Page" },
  { link: "/classes", label: "Classes" },
];

const Navbar = () => {
  const [active, setActive] = useState(
    links.findIndex((element) => element.link === window.location.pathname)
  );
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Flex gap={5} direction="column" bg={theme.colors.gray[4]} w="100%">
      <UnstyledButton onClick={() => navigate("/home")}>
        <Group h={60} mb={20} pl={5}>
          <IconNotebook />
          <Text weight="bolder">Bright Minds</Text>
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
            <Text component="p" w={180}>
              {item.label}
            </Text>
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default Navbar;
