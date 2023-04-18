import React, { useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { Button, TextInput, Paper, StarIcon } from "@mantine/core";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const theme = useMantineTheme();
  const keywords = ["hello", "hi", "hey", "bye", "goodbye"];

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

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
    setMessages([
      ...messages,
      `Thank you for your ${starIndex + 1}-star review!`,
    ]);
  };

  const renderStarIcon = (index: number) => {
    if (index < selectedStars) {
      return (
        <StarIcon
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: "pointer", color: theme.colors.yellow[7] }}
          color="000000"
        />
      );
    }
    return (
      <StarIcon
        key={index}
        onClick={() => handleStarClick(index)}
        style={{ cursor: "pointer" }}
      />
    );
  };

  return (
    <div>
      <Paper style={{ marginBottom: theme.spacing.xs }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {[...Array(5)].map((_, index) => renderStarIcon(index))}
        </div>
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
      </div>
    </div>
  );
};

export default Chatbot;
