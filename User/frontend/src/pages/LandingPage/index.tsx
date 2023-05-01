import { Button, Flex, Text, useMantineTheme } from "@mantine/core";
import CircleComponent from "../../components/CircularComponent";
import BottomBar from "../../components/BottomBar";
import { useState } from "react";
import { mainDesc } from "../../data/backendFodder";
import translateAPI from "../../APIs/translate";
import Chatbot from "../../components/Chatbot";

const LandingPage = () => {
  const theme = useMantineTheme();

  const [isEn, setIsEn] = useState(true);
  const [isTranslated, setIsTranslated] = useState(false);

  const [frDesc, setFrDesc] = useState<string>();
  const desc = isEn ? mainDesc : frDesc;

  const translate = async () => {
    const test = {
      from: "en",
      to: "fr",
      content: mainDesc,
    };
    let newText = await translateAPI(test);
    return newText;
  };

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
      <Button
        color="yellow"
        onClick={async () => {
          if (!isTranslated) {
            let newText = await translate();
            let re = /&#39;/gi;
            setFrDesc(newText.replace(re, "'"));
            setIsTranslated(true);
          }
          setIsEn(!isEn);
        }}
        style={{ position: "absolute", top: "15px", right: "15px" }}
      >
        Change Language
      </Button>

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
            Insert title here
          </Text>
          <Text w={800} p="xl" align="center">
            {desc}
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
            image="/images/camps.jpg"
          />
          <CircleComponent
            title="Enroll in a Class"
            destination="/classes"
            description="Check the classes we offer and request to enroll!"
            image="/images/classes.jpg"
          />
          <CircleComponent
            title="Book a tutoring session"
            destination="/tutoring"
            description="Check out our many tutoring subjects and book a tutoring session!"
            image="/images/tutoring.jpg"
          />
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default LandingPage;
