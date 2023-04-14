import { Card, TextInput, ScrollArea, Button, Flex, } from "@mantine/core";
import { useCounter } from '@mantine/hooks';
import { useState } from "react";

const Chatbot = () => {
    const keywords = ["hi","help","classes"];
    const [submitted, setSubmitted] = useState(false);
    const [question, setQuestion] = useState("");
    const answer = "hello"

    const [count, handlers] = useCounter(3, { min: 0, max: 10 });
    const content = Array(count)
        .fill(0)
        .map((_, index) => <p key={index}>{answer}</p>);

    const asked = () => {
        if (!question) {
          setSubmitted(true);
          
        } else {
          setSubmitted(false);
          handlers.increment();
        }
      };
    return(
        <Flex align="center" justify="center" h="100vh">
            
            <Card style={{ background: "grey", minHeight: "250px" }} w="30%">

            <div style={{ height: "50px", width: "50px" }} />
            <Flex direction="column" gap="md" h={160}>
            <ScrollArea h={250} offsetScrollbars scrollbarSize={2} scrollHideDelay={0}>
                {content}
            </ScrollArea>
                <TextInput
                placeholder="Question"
                error={submitted ? " " : ""}
                radius="md"
                onChange={(event) => {
                    setQuestion(event.currentTarget.value);
                    console.log(question);
                }}
                value={question}
                />
          </Flex>
          <Flex align="center" justify="center" p="lg">
            <Button
              style={{ background: "#FFFF00" }}
              radius="md"
              size="md"
              uppercase
              onClick={asked}
            >
              send
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
};

export default Chatbot;