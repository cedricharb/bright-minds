import {
  Button,
  Card,
  Flex,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  name: string;
  description: string;
};

const ClassesCard = ({ name, description }: Props) => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} radius="30px" size="md">
        <Card w="100%" h="100%">
          <Text>This is an example demo</Text>
        </Card>
      </Modal>
      <Card
        style={{
          borderRadius: "30px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
        bg={theme.colors.dark[7]}
        p="xl"
        w={350}
      >
        <Flex align="center" direction="column" gap="md">
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
          <Button color="yellow" onClick={open}>
            Click here to try an exercice!
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default ClassesCard;
