import React, { useState } from "react";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import { Button, TextInput, Card, Flex, Drawer, Group } from "@mantine/core";
import { IconStar, IconMessage } from "@tabler/icons-react";
import { keywords } from "../../data/backendFodder";
import { useDisclosure } from "@mantine/hooks";

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const theme = useMantineTheme();
  const [enableflag, setEnableFlag] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() === "") {
      return;
    }

    setMessages([...messages, inputValue.trim()]);
    setInputValue("");

    // Check for keywords and respond accordingly0
    const lowerCaseInput = inputValue.toLowerCase();

    for (const keyword of keywords) {
      if (lowerCaseInput.includes(keyword)) {
        if (keyword === "hello" || keyword === "hi" || keyword === "hey") {
          setMessages([
            ...messages,
            inputValue,
            "Hi there! How can I help you today?",
          ]);
        } else if (keyword === "bye" || keyword === "goodbye") {
          setMessages([
            ...messages,
            inputValue,
            "Goodbye! Let me know if you need anything else.",
          ]);
        }
        setSelectedStars(0);
        setEnableFlag(true);
        return;
      }
    }

    setMessages([
      ...messages,
      inputValue,
      "I'm sorry, I am not qualified to answer this question",
      "For an answer send your question to the following email: cederic.harb@lau.edu",
    ]);
    setSelectedStars(0);
    setEnableFlag(true);
  };

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);

    setMessages([
      ...messages,
      `Thank you for your ${starIndex + 1}-star review!`,
    ]);
    setEnableFlag(false);
  };

  const renderStarIcon = (index: number) => {
    if (enableflag) {
      return (
        <ActionIcon
          key={index}
          color={index < selectedStars ? "yellow" : "dark"}
          onMouseOver={({ target }) => setSelectedStars(index + 1)}
          justify-content="flex-start"
          onClick={() => handleStarClick(index)}
          size="xl"
        >
          <IconStar />
        </ActionIcon>
      );
    }
    return <></>;
  };
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex className="bottom-right-container">
      <Drawer
        opened={opened}
        onClose={close}
        title="ChatBot: Ask a question"
        size="lg"
        style={{ msOverflowY: "auto" }}
        position="right"
        padding="md"
      >
        {
          <Flex style={{ position: "fixed", bottom: 0, right: 0 }} w="100%">
            <div style={{ width: "100%", padding: "15px" }}>
              <Card
                w=" 100%"
                shadow="sm"
                radius="md"
                withBorder
                style={{ marginBottom: theme.spacing.xs, overflowY: "auto" }}
              >
                {messages.map((message, index) => (
                  <div key={-index}>{message}</div>
                ))}
              </Card>

              <Card shadow="sm" radius="md" withBorder w="100%">
                <div style={{ display: "flex" }}>
                  <TextInput
                    w="120%"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleInputSubmit();
                      }
                    }}
                    placeholder="Type your message here..."
                    size="lg"
                    variant="filled"
                    style={{ marginRight: theme.spacing.xs }}
                  />
                  <Button
                    onClick={handleInputSubmit}
                    size="lg"
                    style={{ color: "black", backgroundColor: "yellow" }}
                  >
                    Send
                  </Button>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    {[...Array(5)].map((_, index) => renderStarIcon(index))}
                  </div>
                </div>
              </Card>
            </div>
          </Flex>
        }
      </Drawer>

      <Group position="center">
        <Button
          onClick={open}
          style={{
            right: "20%",
            bottom: "20%",
            color: "black",
            backgroundColor: "yellow",
          }}
        >
          <IconMessage />
        </Button>
      </Group>
    </Flex>
  );
};

export default Chatbot;
