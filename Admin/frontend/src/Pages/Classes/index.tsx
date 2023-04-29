import { Card, Flex, List, Text, useMantineTheme } from "@mantine/core";
import ClassesCard from "../../components/ClassesCard";

interface Class {
  id: number;
  name: string;
  description: string;
  exercises: string[];
}

const classes: Class[] = [
  {
    id: 1,
    name: "Mathematics",
    description: "Learn the basics of mathematics.",
    exercises: ["Algebra", "Geometry", "Calculus"],
  },
  {
    id: 2,
    name: "English",
    description: "Improve your English skills.",
    exercises: ["Reading", "Writing", "Listening"],
  },
];

const ClassesPage = () => {
  const theme = useMantineTheme();

  return (
    <Flex bg={theme.colors.gray[4]} p="lg" direction="column" gap="md">
      <Text size="xl">Classes</Text>
      <Flex gap="lg" justify="space-around">
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
