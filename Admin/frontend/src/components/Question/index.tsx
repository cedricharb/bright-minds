import {
  Flex,
  Paper,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

type Props = {
  isQuestion: boolean;
  question?: string;
  answer?: string;
};

const Question = ({ isQuestion, question, answer }: Props) => {
  const theme = useMantineTheme();

  return (
    <Paper bg={theme.colors.dark[7]} radius="lg" w="100%" p="lg">
      <Flex direction="column">
        {!isQuestion && (
          <UnstyledButton w="100%" h="100%">
            <Text
              color={theme.colors.yellow[4]}
              size={30}
              align="center"
              weight="bold"
            >
              Add an FAQ +
            </Text>
          </UnstyledButton>
        )}
        {isQuestion && (
          <>
            <Text color={theme.colors.yellow[4]} weight="bolder" w="100%">
              {question}
            </Text>
            <Text color={theme.colors.yellow[4]} w="100%">
              {answer}
            </Text>
          </>
        )}
      </Flex>
    </Paper>
  );
};

export default Question;
