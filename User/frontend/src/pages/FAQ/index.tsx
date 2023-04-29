import { Flex, Text, useMantineTheme } from "@mantine/core";
import Question from "../../components/Question";
import { questions } from "../../data/backendFodder";
import BottomBar from "../../components/BottomBar";

const FAQ = () => {
  const theme = useMantineTheme();

  return (
    <Flex bg={theme.colors.gray[4]} direction="column" justify="space-between">
      <Flex w="100%" direction="column" gap="lg" mih="100vh">
        <Flex w="100%">
          <Text size={40} weight="bolder" w="100%" align="center">
            Frequently Asked Questions
          </Text>
        </Flex>
        <Flex direction="column" gap="md" p="xl">
          {questions.map((question) => (
            <Question question={question.question} answer={question.answer} />
          ))}
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default FAQ;
