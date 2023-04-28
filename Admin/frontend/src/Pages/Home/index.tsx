import { Flex, Text, useMantineTheme } from "@mantine/core";
import CircleComponent from "../../components/CircularComponent";
import { mainDesc } from "../../data/backendFodder";

const Home = () => {
  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      h="200vh"
      justify="space-between"
      p={0}
      bg={
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[4]
      }
    >
      <Flex direction="column" align="center" gap="xl" pl="xl" pr="xl" h="100%">
        <Flex
          bg={
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[5]
          }
          style={{ borderRadius: "0px 0px 30px 30px" }}
          w="100%"
          justify="center"
          h="90%"
          align="center"
          p="xl"
        >
          <Text w={800} p="xl" align="center">
            {mainDesc}
          </Text>
        </Flex>

        <Flex
          gap="xl"
          h="70%"
          align="center"
          justify="space-around"
          w="100%"
          p="xl"
          wrap="wrap"
        >
          <CircleComponent description="Our Camps" destination="/camps" />
          <CircleComponent
            description="Enroll in a Class"
            destination="/classes"
          />
          <CircleComponent
            description="Book a tutoring session"
            destination="/tutoring"
          />
        </Flex>
      </Flex>
      <Flex
        bg={theme.colors.dark[7]}
        h={250}
        w="100%"
        style={{ borderRadius: "30px 30px 0px 0px" }}
      ></Flex>
    </Flex>
  );
};

export default Home;
