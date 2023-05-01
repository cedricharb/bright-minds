import {
  Button,
  Card,
  Flex,
  Input,
  Modal,
  Paper,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

type Props = {
  isQuestion: boolean;
  question?: string;
  answer?: string;
  onSubmitAdd: (
    question: string,
    keys: { key1: string; key2: string; key3: string },
    answer: string
  ) => void;
  onSubmitDelete: (question: string) => void;
};

const Question = ({
  isQuestion,
  question,
  answer,
  onSubmitAdd,
  onSubmitDelete,
}: Props) => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [newKeywords, setNewKeywords] = useState<{
    key1: string;
    key2: string;
    key3: string;
  }>({
    key1: "",
    key2: "",
    key3: "",
  });

  return (
    <>
      <Modal opened={opened} onClose={close} radius="30px" size="xl" centered>
        <Card w="100%" h="100%" padding="md">
          <Flex direction="column" gap="lg" align="center">
            <Text w="100%" align="center">
              Add a new question.
            </Text>
            <Input
              w="100%"
              placeholder="Question"
              value={newQuestion}
              onChange={(event) => setNewQuestion(event.target.value)}
            />
            <Input
              w="100%"
              placeholder="Answer"
              value={newAnswer}
              onChange={(event) => setNewAnswer(event.target.value)}
            />
            <Input
              w="100%"
              placeholder="Keywords (separated by ', ')"
              onChange={(event) => {
                let bigKeyword = event.target.value.split(", ");
                setNewKeywords({
                  key1: bigKeyword[0] || "",
                  key2: bigKeyword[1] || "",
                  key3: bigKeyword[2] || "",
                });
              }}
            />
            <Button
              color="dark"
              w="200px"
              onClick={() => {
                onSubmitAdd(newQuestion, newKeywords, newAnswer);
              }}
            >
              Submit
            </Button>
          </Flex>
        </Card>
      </Modal>
      <Paper bg={theme.colors.dark[7]} radius="lg" w="100%" p="lg">
        <Flex direction="column" style={{ position: "relative" }}>
          {!isQuestion && (
            <UnstyledButton w="100%" h="100%" onClick={open}>
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
              <IconX
                style={{ position: "absolute", top: "5px", right: "5px" }}
                color="red"
                size={10}
                onClick={(e) => {
                  e.stopPropagation();
                  onSubmitDelete(question || "");
                }}
              />
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
    </>
  );
};

export default Question;
