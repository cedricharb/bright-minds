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
import axios from "axios";
import { useState } from "react";

type Props = {
  isQuestion: boolean;
  question?: string;
  answer?: string;
};
interface Response {
  //add
  access_token: string;
  result: boolean;


}
const base_url = "http://127.0.0.1:8000/api/v1/admin";
const Question = ({ isQuestion, question, answer }: Props) => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [newKeywords, setNewKeywords] = useState<Array<string>>([]);

  const onSubmit = () => {
    //call api to add the question
    //seperate keyword into json format
    const addFAQ = async () => {
      if (!newQuestion || !newAnswer) {
        //setSubmitted(true);
        // handlePopUp();
      } else {
        // setSubmitted(false);
        //setLoading(true);

        //console.log(login());

        const options = {
          method: "POST",
          url: base_url + "/FAQ/addFAQ",
          params: { question: "" + newQuestion, answer: "" + newAnswer, newKeywords: { "key": "" } },
          headers: {},
        };
        axios
          .request(options)
          .then(function ({ data }: { data: Response }) {
            console.log(data);


            if (data.result) {
              //added casses  
              console.log(data.result)

            }
            //popu to indicate :
            /**
             * unauthorized
             * incorrect newQuestion format
             */
          })

          .catch(function (error: any) {
            console.error(error);
            // setSubmitted(true);
            //handlePopUp();
          });

        //setSubmitted(true);
        //setLoading(false);
      }
    };
  };
  /********************
   * 
   * delete faq api
   * 
   * 
   *******************/
  const deleteFAQ = async () => {
    if (!newQuestion) {
      //setSubmitted(true);
      // handlePopUp();
    } else {
      // setSubmitted(false);
      //setLoading(true);

      //console.log(login());

      const options = {
        method: 'POST',
        url: base_url + "/FAQ/deleteFAQ",
        params: { question: "" + newQuestion }, //question of slected question to delete
        headers: {

        },
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);


          if (data.result) {
            //added casses  
            console.log(data.result)

          }
          //popu to indicate :
          /**
           * unauthorized
           * incorrect newQuestion format
           */
        })

        .catch(function (error: any) {
          console.error(error);
          // setSubmitted(true);
          //handlePopUp();
        });

      //setSubmitted(true);
      //setLoading(false);
    }
  };
  /********************
   * 
   *view faqsapi
   * 
   * 
   *******************/
  const viewFAQ = async () => {


    const options = {
      method: 'GET',
      url: base_url + "/FAQ/viewFAQ",
      params: {},
      headers: {

      },
    };
    axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
        console.log(data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }
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
              onChange={(event) =>
                setNewKeywords(event.target.value.split(", "))
              }
            />
            <Button color="dark" w="200px" onClick={onSubmit}>
              Submit
            </Button>
          </Flex>
        </Card>
      </Modal>
      <Paper bg={theme.colors.dark[7]} radius="lg" w="100%" p="lg">
        <Flex direction="column">
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
