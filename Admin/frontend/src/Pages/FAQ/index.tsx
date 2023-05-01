import { Flex, Text, useMantineTheme } from "@mantine/core";
import Question from "../../components/Question";
import BottomBar from "../../components/BottomBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface Response {
  //add
  result: boolean;
  data: Array<{
    question: string;
    answer: string;
    keywords: { key1: string; key2: string; key3: string };
  }>;
}

const FAQ = () => {
  const theme = useMantineTheme();
  const [questions, setQuestions] = useState<
    Array<{
      question: string;
      answer: String;
      keywords: { key1: string; key2: string };
    }>
  >();
  const base_url = "http://127.0.0.1:8000/api/v1/admin";

  const addFAQ = async (
    question: string,
    keys: { key1: string; key2: string; key3: string },
    answer: string
  ) => {
    if (!question || !answer) {
    } else {
      const options = {
        method: "POST",
        url: base_url + "/FAQ/addFAQ",
        params: { question: +question, answer: answer, newKeywords: +keys },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);

          if (data.result) {
            console.log(data.result);
            return data;
          }
        })

        .catch(function (error: any) {
          console.error(error);
        });
    }
  };

  const deleteFAQ = async (question: string) => {
    if (!question) {
    } else {
      const options = {
        method: "POST",
        url: base_url + "/FAQ/deleteFAQ",
        params: { question: "" + question },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);

          if (data.result) {
            console.log(data.result);
            return data;
          }
        })

        .catch(function (error: any) {
          console.error(error);
        });
    }
  };

  const onSubmitAdd = async (
    question: string,
    keys: { key1: string; key2: string; key3: string },
    answer: string
  ) => {
    await addFAQ(question, keys, answer);
  };
  const onSubmitDelete = async (question: string) => {
    await deleteFAQ(question);
  };

  const viewFAQ = async () => {
    const options = {
      method: "GET",
      url: base_url + "/FAQ/viewFAQ",
      params: {},
      headers: {},
    };
    axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
        setQuestions(data.data);
        return data;
      })
      .catch(function (error: any) {
        console.error(error);
      });
  };
  useEffect(() => {
    viewFAQ();
  }, []);

  const token = localStorage.getItem("token");

  return (
    <>
      {(token !== "" || token !== undefined || token !== null) && (
        <Flex
          bg={theme.colors.gray[4]}
          direction="column"
          justify="space-between"
        >
          <Flex w="100%" direction="column" gap="lg" mih="100vh">
            <Flex w="100%">
              <Text size={40} weight="bolder" w="100%" align="center">
                Frequently Asked Questions
              </Text>
            </Flex>
            <Flex direction="column" gap="md" p="xl">
              {questions?.map((question) => (
                <Question
                  isQuestion
                  question={question.question}
                  answer={question.answer.toString()}
                  onSubmitAdd={onSubmitAdd}
                  onSubmitDelete={onSubmitDelete}
                />
              ))}
              <Question
                isQuestion={false}
                onSubmitAdd={onSubmitAdd}
                onSubmitDelete={onSubmitDelete}
              />
            </Flex>
          </Flex>
          <BottomBar />
        </Flex>
      )}
      {(token === "" || token === undefined || token === null) && (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default FAQ;
