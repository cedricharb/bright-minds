import { Flex, Text, useMantineTheme } from "@mantine/core";
import { Navigate } from "react-router-dom";
import AboutUsComp from "../../components/AboutUsComp";
import BottomBar from "../../components/BottomBar";
import { aboutUsParts } from "../../data/backendFodder";

const AboutUs = () => {
  const theme = useMantineTheme();

  const token = localStorage.getItem("token");

  return (
    <>
      {(token !== "" || token !== undefined || token !== null) && (
        <Flex bg={theme.colors.gray[4]} direction="column">
          <Flex direction="column" align="center" p="xl" gap="xl" mih="100vh">
            <Text weight="bolder" size={50}>
              About Us
            </Text>
            {aboutUsParts.map((part) => (
              <AboutUsComp
                title={part.title}
                key={part.id}
                description={part.description}
              />
            ))}
            <AboutUsComp />
          </Flex>
          <BottomBar />
        </Flex>
      )}{" "}
      {(token === "" || token === undefined || token === null) && (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default AboutUs;
