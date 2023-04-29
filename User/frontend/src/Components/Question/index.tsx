import { Flex, Paper, Text, useMantineTheme } from "@mantine/core";

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const theme = useMantineTheme();

  return (
    <Paper bg={theme.colors.dark[7]} radius="lg" w="100%" p="lg">
      <Flex direction="column">
        <Text color={theme.colors.yellow[4]} weight="bolder" w="100%">
          {question}
        </Text>
        <Text color={theme.colors.yellow[4]} w="100%">
          {answer}
        </Text>
      </Flex>
    </Paper>
  );
};

export default Question;
