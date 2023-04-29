import React, { useState } from "react";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import { Button, TextInput, Paper, Card, Flex } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { keywords } from '../../data/backendFodder'


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
      "For an answer send your question to the following email: cederic.harb@lau.edu"
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
    if(enableflag){
        return (
          <ActionIcon
            key={index}
            color={index<selectedStars? 'yellow' : 'dark'}
            onMouseOver={({target})=>setSelectedStars(index+1)}
            justify-content="flex-start"
            onClick={() => handleStarClick(index)}>
            <IconStar />
          </ActionIcon>
        );
    };
    return <></>;
  }
  

  return (
    <Flex align="end" justify="flex-end" h="100vh">
    <Card
      shadow="sm"
      
      radius="md" 
      withBorder
      w="30%">
      <div>
        <Paper style={{ marginBottom: theme.spacing.xs }}>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
          
        </Paper>
        <div style={{ display: "flex" }}>
          
          <TextInput
          
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
          <Button onClick={handleInputSubmit}>Send</Button>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {[...Array(5)].map((_, index) => renderStarIcon(index))}
          </div>
        </div>
      </div>
    </Card>
    </Flex>
  );
};

export default Chatbot;