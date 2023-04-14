import React, { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { Button, TextInput } from "@mantine/core";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const theme = useMantineTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() === "") {
      return;
    }

    setMessages([...messages, inputValue.trim()]);
    setInputValue("");
    //here we will link with the api to get all the key words into an array
    //this is a place holder
    const keywords = ["hi", "hey","hello", "goodbye", "bye"];
    const lowerCaseInput = inputValue.toLowerCase();
    for (const keyword of keywords) {
      if (lowerCaseInput.includes(keyword)) {
        if (keyword === "hello" || keyword === "hi" || keyword === "hey") {
          setMessages([
            ...messages,
            "Hi there! How can I help you today?",
          ]);
        } else if (keyword === "bye" || keyword === "goodbye") {
          setMessages([
            ...messages,
            "Goodbye! Let me know if you need anything else.",
          ]);
        }
        return;
      }
    }

    setMessages([
      ...messages,
      "I'm sorry, I didn't understand what you said.",
    ]);
  };
  //if messages contain a keyword send a specific message

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <TextInput
          id="question_area"
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
          style={{ marginBottom: theme.spacing.xs }}
        />
        <Button onClick={handleInputSubmit}>Send</Button>
      </div>
    </div>
  );
};

export default Chatbot;
