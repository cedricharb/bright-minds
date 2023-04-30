import {
  Button,
  Card,
  Flex,
  Input,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

type Props = {
  name: string;
  description: string;
};

const ClassesCard = ({ name, description }: Props) => {
  const theme = useMantineTheme();
  const [isDemoModalOpen, demoModal] = useDisclosure(false);
  const [isEditModalOpen, editModal] = useDisclosure(false);
  const [nameInput, setNameInput] = useState<string>(name);
  const [descInput, setDescInput] = useState<string>(description);

  return (
    <>
      <Modal
        opened={isDemoModalOpen}
        onClose={demoModal.close}
        radius="30px"
        size="md"
        centered
      >
        <Card w="100%" h="100%">
          <Text>This is an example demo</Text>
        </Card>
      </Modal>
      <Modal
        opened={isEditModalOpen}
        onClose={editModal.close}
        radius="30px"
        size="md"
        centered
      >
        <Card w="100%" h="100%">
          <Input
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          />
          <Input
            value={descInput}
            onChange={(event) => setDescInput(event.target.value)}
          />
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
          <Button color="yellow" onClick={demoModal.open}>
            Click here to try an exercice!
          </Button>
          <Button color="yellow" onClick={editModal.open}>
            Click here to edit this class.
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default ClassesCard;
