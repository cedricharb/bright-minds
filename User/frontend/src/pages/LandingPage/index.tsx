import { Flex, Text } from "@mantine/core";
import CircleComponent from "../../Components/CircularComponent";
import { mainDesc } from "../../data/backendFodder";

const MainPage = () => {
  return (
    <Flex direction="column" h="200vh" justify="space-between">
      <Flex direction="column" align="center" gap="xl" p="xl" h="100%">
        <div style={{ width: "300px", height: "200px" }} />
        <Text w={800} p="xl" align="center">
          {mainDesc}
        </Text>
        <Flex
          gap="xl"
          h="50%"
          align="center"
          justify="space-around"
          w="100%"
          p="xl"
        >
          <CircleComponent description="Our Camps" destination="camps" />
          <CircleComponent
            description="Enroll in a Class"
            destination="classes"
          />
          <CircleComponent
            description="Book a tutoring session"
            destination="tutoring"
          />
        </Flex>
      </Flex>
      <Flex bg="dark" h={200} w="100%"></Flex>
    </Flex>
  );
};

export default MainPage;
