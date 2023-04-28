import { useState } from "react";
import { Link } from "react-router-dom";
import { IconNotebook } from "@tabler/icons-react";
import { Group, Text, Flex, Button } from "@mantine/core";

const links = [{ link: "/Home", label: "Home Page" }];

const Navbar = () => {
  const [active, setActive] = useState(
    links.findIndex((element) => element.link === window.location.pathname)
  );

  return (
    <Flex gap={5} direction="column">
      <Group h={60} mb={20} pl={5}>
        <IconNotebook />
        <Text weight="bolder">Bright Minds</Text>
      </Group>
      {links.map((item, index) => (
        <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            color="gray"
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
