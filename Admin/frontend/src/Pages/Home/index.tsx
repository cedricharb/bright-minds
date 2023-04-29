import { Flex, Text, useMantineTheme } from "@mantine/core";
import CircleComponent from "../../components/CircularComponent";
import { mainDesc } from "../../data/backendFodder";
import BottomBar from "../../components/BottomBar";

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
              : theme.colors.gray[2]
          }
          style={{ borderRadius: "0px 0px 30px 30px" }}
          w="100%"
          justify="center"
          h="80%"
          align="center"
          p="xl"
          direction="column"
        >
          <Text weight="bolder" size={50}>
            Insert Title Here
          </Text>
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
          <CircleComponent
            title="Our Camps"
            destination="/camps"
            description="Join one of our camps or check out previous camps!"
          />
          <CircleComponent
            title="Enroll in a Class"
            destination="/classes"
            description="Check the classes we offer and request to enroll!"
          />
          <CircleComponent
            title="Book a tutoring session"
            destination="/tutoring"
            description="Check out our many tutoring subjects and book a tutoring session!"
          />
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default Home;
