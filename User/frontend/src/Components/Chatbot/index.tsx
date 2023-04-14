import React, { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import {  Button, TextInput } from "@mantine/core";

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
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
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