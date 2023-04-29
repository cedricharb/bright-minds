import { Flex, Text, useMantineTheme } from "@mantine/core";
import CircleComponent from "../../components/CircularComponent";
import { mainDesc } from "../../data/backendFodder";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Chatbot from "../../components/Chatbot";

const LandingPage = () => {
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
      <Chatbot />
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
      <Flex
        bg={theme.colors.dark[7]}
        h={250}
        w="100%"
        style={{ borderRadius: "30px 30px 0px 0px" }}
        align="center"
        justify="space-between"
      >
        <Flex direction="column" pl="lg">
          <Text color={theme.colors.yellow[4]} size="lg">
            Check out our frequently asked questions for more information.
          </Text>
          <Text color={theme.colors.yellow[4]} size="lg">
            Email us at test@gmail.com for any further or more detailed
            questions.
          </Text>
        </Flex>
        <Flex gap="lg" p="lg">
          <a href="https://www.facebook.com/">
            <IconBrandFacebook color={theme.colors.yellow[4]} size={50} />
          </a>
          <a href="https://www.instagram.com/brightminds_center/">
            <IconBrandInstagram color={theme.colors.yellow[4]} size={50} />
          </a>
          <a href="https://www.youtube.com/">
            <IconBrandYoutube color={theme.colors.yellow[4]} size={50} />
          </a>
          <a href="https://www.linkedin.com/">
            <IconBrandLinkedin color={theme.colors.yellow[4]} size={50} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
