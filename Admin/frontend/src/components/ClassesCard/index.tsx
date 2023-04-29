import { Card, Text, useMantineTheme } from "@mantine/core";

type Props = {
  name: string;
  description: string;
};

const ClassesCard = ({ name, description }: Props) => {
  const theme = useMantineTheme();
  return (
    <Card
      style={{
        borderRadius: "30px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      bg={theme.colors.dark[7]}
      p="xl"
      w={350}
    >
      <Text
        weight={500}
        size="lg"
        style={{ marginBottom: "10px" }}
        color={theme.colors.yellow[4]}
      >
        {name}
      </Text>
      <Text color={theme.colors.yellow[4]}>{description}</Text>
      <Text
        weight={500}
        size="md"
        style={{ marginTop: "10px" }}
        color={theme.colors.yellow[4]}
      >
        Sample Exercice:
      </Text>
    </Card>
  );
};

export default ClassesCard;
