import { Divider, Flex, Text, useMantineTheme } from "@mantine/core";
import ClassesCard from "../../components/ClassesCard";
import { classes } from "../../data/backendFodder";

const ClassesPage = () => {
  const theme = useMantineTheme();

  return (
    <Flex bg={theme.colors.gray[4]} p="lg" direction="column" gap="md" h="100%">
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
  );
};

export default ClassesPage;
