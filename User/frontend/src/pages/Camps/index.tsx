import { Divider, Flex, Text, useMantineTheme } from "@mantine/core";
import CampCard from "../../components/CampCard";
import { camps } from "../../data/backendFodder";
import { useState } from "react";

const Camps = () => {
  const theme = useMantineTheme();
  const [upcomingCamps, setupcomingCamps] = useState(
    camps.filter((camp) => camp.isUpcoming === true)
  );
  const [previousCamps, setPreviousCamps] = useState(
    camps.filter((camp) => !camp.isUpcoming === true)
  );

  console.log(upcomingCamps);

  return (
    <Flex direction="column" gap="lg" h="100%" bg={theme.colors.gray[4]} p="md">
      <Flex direction="column">
        <Text weight="bolder" size={40} align="center" p="md">
          Take a look at our camps!
        </Text>
      </Flex>
      {upcomingCamps.length > 0 && (
        <>
          <Flex direction="column">
            <Text weight="bold" size="xl" p="md">
              Ongoing Camps
            </Text>
            <Divider my="md" color={theme.colors.dark[7]} />
          </Flex>
          <Flex gap="md" wrap="wrap">
            {upcomingCamps.map((camp) => (
              <CampCard
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
            title={camp.title}
            description={camp.description}
            endDate={camp.endDate}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Camps;
