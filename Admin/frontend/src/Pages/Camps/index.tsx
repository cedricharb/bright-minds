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
  /**
   * "title":"summer camp 2023",
	"start_date": "6/25/2023",
	"end_date": "6/30/2023",
	"description":"camp desc",
	"age_range":"5-10",
    "visibility":true
   */
  const addCamp = async (title :string , description: string , start_date:string ,end_date:string ,visibility:Boolean,age_range:string) => {
    if (!title || !description || !start_date|| !end_date|| !visibility)  {
      //setSubmitted(true);
      // handlePopUp();
    } else {
      // setSubmitted(false);
      //setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: base_url + "/camp/addCamp",
        params: {title:  title,
        start_date: start_date,
        end_date:  end_date,
        description:description,
        age_range:age_range,
          visibility: visibility},
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
  const editCamp = async (title :string , description: string , start_date:string ,end_date:string ,visibility:Boolean,age_range:string) => {
    if (!title || !description || !start_date|| !end_date|| !visibility) {
      //setSubmitted(true);
      // handlePopUp();
    } else {
      // setSubmitted(false);
      //setLoading(true);

      //console.log(login());

      const options = {
        method: "POST",
        url: base_url + "/camp/editCamp",
        params: {title:  title,
          start_date: start_date,
          end_date:  end_date,
          description:description,
          age_range:age_range,
            visibility: visibility},
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
        url: base_url + "/camp/deleteCamp/"+ id,
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
    const viewCamps = async ( ) => {
    

      const options = {
        method: 'GET',
        url: base_url + "/camp/viewCamps",
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
    const viewRegisteredCampers = async ( id:number) => {
    

      const options = {
        method: 'GET',
        url: base_url + "/camp/viewRegisteredCampers/"+ id,
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
    
    const getEmailOfCampers = async (id:number ) => { //camp id number
    

      const options = {
        method: 'GET',
        url: base_url + "/camp/getEmailOFCampers/"+id,
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
    const editCampVisibility = async (id:number) => {
      //it will update it, opposite of previous visibility
        const options = {
          method: "POST",
          url: base_url + "/camp/editCampVisibility/"+id,
          params: {},
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
      
    };
    const getUpcomingCamps = async () => {
      //it will update it, opposite of previous visibility
        const options = {
          method: "GET",
          url: base_url + "/camp/viewUpcommingCamps",
          params: {},
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
      
    }; 
    const getPrevCampTitles = async () => {
      //it will update it, opposite of previous visibility
        const options = {
          method: "GET",
          url: base_url + "/camp/prevCamp",
          params: {},
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
      
    }; 
    const setCampTimings = async (id:number ,start_date:string ,end_date:string) => {
      
        const options = {
          method: "POST",
          url: base_url + "/camp/setCampTimmings/"+id,
          params: {
            start_date: start_date,
            end_date:  end_date
          },
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
      
    }; 
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
