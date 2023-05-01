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
  { link: "/landing-page", label: "Landing Page" },
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

  return (
    <Flex gap={5} direction="column" bg={theme.colors.gray[4]} w="100%">
      <UnstyledButton onClick={() => navigate("/landing-page")}>
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
  );
};

export default Navbar;
