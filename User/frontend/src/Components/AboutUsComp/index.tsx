import { Flex, Text, useMantineTheme } from "@mantine/core";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
};

const AboutUsComp = ({ title, description }: Props) => {
  const [titleS, setTitleV] = useState(title);
  const [descriptionS, setDescriptionV] = useState(description);

  const theme = useMantineTheme();

  return (
    <Flex
      direction="column"
      gap="md"
      bg={
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2]
      }
      style={{ borderRadius: "30px" }}
      p="md"
      w="90%"
    >
      <Text weight="bold" size="lg">
        {titleS}
      </Text>
      <Text>{descriptionS}</Text>
    </Flex>
  );
};

export default AboutUsComp;
