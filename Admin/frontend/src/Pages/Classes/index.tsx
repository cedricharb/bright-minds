import { Divider, Flex, Text, useMantineTheme } from "@mantine/core";
import BottomBar from "../../components/BottomBar";
import ClassesCard from "../../components/ClassesCard";
import { classes } from "../../data/backendFodder";
import axios from "axios";
interface Response {
  //add
 
  result: boolean;
 
  
}
const base_url ="http://127.0.0.1:8000/api/v1/admin";
const ClassesPage = () => {
  const theme = useMantineTheme();
  
  const addClass = async (title :string , description: string , age:number) => {
    if (!title || !description || !age)  {
      //setSubmitted(true);
      // handlePopUp();
    } else {
      // setSubmitted(false);
      //setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: base_url + "/class/addClass",
        params: {title: +title,
        description: +description,
        age_range: +age },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);


          if (data.result) {
            //added casses  
            console.log(data.result)
            return data;
          }
          //poputo indicate :
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
  const editClass = async (title :string , description: string , age:number) => {
    if (!title || !description || !age)  {
      //setSubmitted(true);
      // handlePopUp();
    } else {
      // setSubmitted(false);
      //setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: base_url + "/class/editClass",
        params: {title: +title,
        description: +description,
        age_range: +age },
        headers: {},
      };
      axios
        .request(options)
        .then(function ({ data }: { data: Response }) {
          console.log(data);


          if (data.result) {
            //added casses  
            console.log(data.result)
            return data;
          }
          //poputo indicate :
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
  const deleteClass = async (id:number ) => {
    

      const options = {
        method: 'GET',
        url: base_url + "/class/deleteClass/"+ id,
        params: { }, 
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
            return data;

          }
        })

        .catch(function (error: any) {
          console.error(error);
          // setSubmitted(true);
          //handlePopUp();
        });

      //setSubmitted(true);
      //setLoading(false);
    }
    const viewClasses = async ( ) => {
    

      const options = {
        method: 'GET',
        url: base_url + "/class/viewClasses",
        params: { }, 
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
            return data;

          }
        })

        .catch(function (error: any) {
          console.error(error);
          // setSubmitted(true);
          //handlePopUp();
        });

      //setSubmitted(true);
      //setLoading(false);
    } 
  return (
    <Flex bg={theme.colors.gray[4]} direction="column">
      <Flex
        bg={theme.colors.gray[4]}
        p="lg"
        direction="column"
        gap="md"
        h="100vh"
      >
        <Flex direction="column">
          <Text size="xl" weight="bold" color={theme.colors.yellow[4]}>
            Classes
          </Text>
          <Divider my="md" color="dark" />
        </Flex>
        <Flex gap="lg" justify="space-around" wrap="wrap">
          {classes.map((cls) => (
            <ClassesCard
              key={cls.id}
              name={cls.name}
              description={cls.description}
            />
          ))}
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};
export default ClassesPage;
