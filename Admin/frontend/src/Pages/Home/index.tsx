import { Flex, Text, useMantineTheme } from "@mantine/core";
import CircleComponent from "../../components/CircularComponent";
import { mainDesc } from "../../data/backendFodder";
import BottomBar from "../../components/BottomBar";
import axios from "axios";
interface Response  {
  access_token: string;
  result :boolean;
  general: string;
  mission: string;
  vision: string;
};
const base_url = "http://127.0.0.1:8000/api/v1/admin";
const Home = () => {
  const theme = useMantineTheme();
  const viewAbout = async () => {


    const options = {
      method: 'GET',
      url: base_url + "/about/viewAbout",
      params: {},
      headers: {

      },
    };
    axios
      .request(options)
      .then(function ({ data }: { data: Response }) {
        console.log(data);
        /**
         * general 
         * mission
         * vision
         */
        if(data.result){
          //handle data
        }
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }
  return (
    <Flex
      direction="column"
      h="200vh"
      justify="space-between"
      p={0}
      bg={
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[4]
      }
    >
      <Flex direction="column" align="center" gap="xl" pl="xl" pr="xl" h="100%">
        <Flex
          bg={
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }
          style={{ borderRadius: "0px 0px 30px 30px" }}
          w="100%"
          justify="center"
          h="80%"
          align="center"
          p="xl"
          direction="column"
        >
          <Text weight="bolder" size={50}>
            Insert Title Here
          </Text>
          <Text w={800} p="xl" align="center">
            {mainDesc}
          </Text>
        </Flex>

        <Flex
          gap="xl"
          h="70%"
          align="center"
          justify="space-around"
          w="100%"
          p="xl"
          wrap="wrap"
        >
          <CircleComponent
            title="Our Camps"
            destination="/camps"
            description="Join one of our camps or check out previous camps!"
            image="/images/camps.jpg"
          />
          <CircleComponent
            title="Enroll in a Class"
            destination="/classes"
            description="Check the classes we offer and request to enroll!"
            image="/images/classes.jpg"
          />
          <CircleComponent
            title="Book a tutoring session"
            destination="/tutoring"
            description="Check out our many tutoring subjects and book a tutoring session!"
            image="/images/tutoring.jpg"
          />
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default Home;
