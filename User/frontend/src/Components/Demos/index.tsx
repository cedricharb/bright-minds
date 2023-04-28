import React, { useState } from "react";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import { Button, TextInput, Paper, Card, Flex } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import {answers} from "../../data/backendFodder";


const Demo = () => {
  const [answer, setAnswer] = useState<string[]>([]);
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
  
    setAnswer([...answer, inputValue.trim()]);
    setInputValue("");
    const lowerCaseInput = inputValue.toLowerCase();

    for (const keyword of answers) {
        if (lowerCaseInput.includes(keyword)) {
          
            if(keyword==="4"){
                setAnswer([
                    ...answer,
                    inputValue,
                    "This answer is correct",
                ]);
            }
        
        }
        setSelectedStars(0);
        setEnableFlag(true);
        return;
        }
      
  
      setAnswer([
        ...answer,
        inputValue + "sorry but that answer is incorrect",
        "sorry but that answer is incorrect"
      ]);
      setSelectedStars(0);
      setEnableFlag(true);
  };

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
    
    setAnswer([
      ...answer,
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
    <Flex align="center" justify="center" h="100vh">
        <Card
            shadow="sm"
            
            radius="md" 
            withBorder
            w="30%">
            <div>
                <Paper style={{ marginBottom: theme.spacing.xs }}>
                {answer.map((answer, index) => (
                    <div key={index}>{answer}</div>
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

export default Demo;
