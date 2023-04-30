import { Flex, Group, Text, useMantineTheme } from "@mantine/core";

type Props = {
  title: string;
  description: string;
  isUpcoming?: boolean;
  startDate?: Date;
  endDate: Date;
};

const CampCard = ({
  title,
  description,
  isUpcoming,
  startDate,
  endDate,
}: Props) => {
  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      gap="md"
      style={{ borderRadius: "30px" }}
      bg="white"
      h={250}
      w={250}
      p="md"
      justify="space-between"
    >
      <Text weight="bold" color={theme.colors.dark[7]} w="100%" align="center">
        {title}
      </Text>
      <Text color={theme.colors.dark[7]} w="100%" align="center">
        {description}
      </Text>
      {(isUpcoming && (
        <Flex justify="space-between" w="100%">
          <Flex direction="column">
            <Text>Start date:</Text>
            <Text>{`${startDate?.getDay()}/${startDate?.getMonth()}/${startDate?.getFullYear()}`}</Text>
          </Flex>
          <Flex direction="column">
            <Text>End date:</Text>
            <Text>{`${endDate.getDay()}/${endDate.getMonth()}/${endDate.getFullYear()}`}</Text>
          </Flex>
        </Flex>
      )) ||
        (!isUpcoming && (
          <Group>
            <Text>End date:</Text>
            <Text>{`${endDate.getDay()}/${endDate.getMonth()}/${endDate.getFullYear()}`}</Text>
          </Group>
        ))}
    </Flex>
  );
};

export default CampCard;
