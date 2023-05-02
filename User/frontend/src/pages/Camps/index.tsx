import { Divider, Flex, Text, useMantineTheme } from "@mantine/core";
import CampCard from "../../components/CampCard";
import { camps } from "../../data/backendFodder";
import { useState } from "react";
import BottomBar from "../../components/BottomBar";

const Camps = () => {
  const theme = useMantineTheme();
  const [upcomingCamps, setupcomingCamps] = useState(
    camps.filter((camp) => camp.isUpcoming === true)
  );
  const [previousCamps, setPreviousCamps] = useState(
    camps.filter((camp) => !camp.isUpcoming === true)
  );

  const hasUpcomingCamps = upcomingCamps.length > 0;

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
        <Flex gap="md" wrap="wrap">
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
