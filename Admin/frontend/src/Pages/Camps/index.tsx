import { Divider, Flex, Text, useMantineTheme } from "@mantine/core";
import CampCard from "../../components/CampCard";
import { camps } from "../../data/backendFodder";
import { useState } from "react";
import BottomBar from "../../components/BottomBar";
import axios from "axios";
interface Response {
  //add
 
  result: boolean;
 
  
}
const base_url ="http://127.0.0.1:8000/api/v1/admin";
const Camps = () => {
  const theme = useMantineTheme();
  const [upcomingCamps, setupcomingCamps] = useState(
    camps.filter((camp) => camp.isUpcoming === true)
  );
  const [previousCamps, setPreviousCamps] = useState(
    camps.filter((camp) => !camp.isUpcoming === true)
  );

  const hasUpcomingCamps = upcomingCamps.length > 0;

  /***********************start of api************************ */
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

  /*************************end fo api************** */
  return (
    <Flex direction="column" bg={theme.colors.gray[4]}>
      <Flex
        direction="column"
        gap="lg"
        h="100%"
        bg={theme.colors.gray[4]}
        p="md"
        pb={100}
      >
        <Flex direction="column">
          <Text weight="bolder" size={40} align="center" p="md">
            Take a look at our camps!
          </Text>
        </Flex>
        {hasUpcomingCamps && (
          <>
            <Flex direction="column">
              <Text weight="bold" size="xl" p="md">
                Upcoming Camps
              </Text>
              <Divider my="md" color={theme.colors.dark[7]} />
            </Flex>
            <Flex gap="md" wrap="wrap" h={380}>
              {upcomingCamps.map((camp) => (
                <CampCard
                  key={camp.id}
                  title={camp.title}
                  description={camp.description}
                  isUpcoming
                  startDate={camp.startDate}
                  endDate={camp.endDate}
                />
              ))}
            </Flex>
          </>
        )}
        <Flex direction="column">
          <Text weight="bold" size="xl" p="md">
            Previous Camps
          </Text>
          <Divider my="md" color={theme.colors.dark[7]} />
        </Flex>
        <Flex gap="md" wrap="wrap" justify="space-around">
          {previousCamps.map((camp) => (
            <CampCard
              key={camp.id}
              title={camp.title}
              description={camp.description}
              endDate={camp.endDate}
            />
          ))}
        </Flex>
      </Flex>
      <BottomBar />
    </Flex>
  );
};

export default Camps;
