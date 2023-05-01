import {
  Button,
  Card,
  Flex,
  Input,
  Modal,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  title?: string;
  description?: string;
};

const AboutUsComp = ({ title, description }: Props) => {
  const [titleS, setTitleS] = useState(title);
  const [descriptionS, setDescriptionS] = useState(description);
  const [isEmpty, setIsEmpty] = useState(!(title && description));

  const [isEditModalOpen, editModal] = useDisclosure(false);

  const theme = useMantineTheme();

  const submit = () => {
    //do the api call here to add/edit
  };

  return (
    <>
      <Modal
        opened={isEditModalOpen}
        onClose={editModal.close}
        radius="30px"
        size="md"
        centered
      >
        <Card w="100%" h="100%">
          <Flex direction="column" justify="center" gap="lg">
            <Input
              value={titleS}
              onChange={(event) => setTitleS(event.target.value)}
              placeholder="Title"
            />
            <Input
              value={descriptionS}
              onChange={(event) => setDescriptionS(event.target.value)}
              placeholder="Description"
            />
            <Button onClick={submit} color="yellow">
              Submit
            </Button>
          </Flex>
        </Card>
      </Modal>
      {isEmpty && (
        <UnstyledButton onClick={editModal.open}>
          <Flex
            direction="column"
            gap="md"
            bg={
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
            }
            style={{
              borderRadius: "30px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            p="md"
            w="75vw"
            align="center"
          >
            <IconPlus size={50} />
          </Flex>
        </UnstyledButton>
      )}
      {!isEmpty && (
        <Flex
          direction="column"
          gap="md"
          bg={
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }
          style={{
            borderRadius: "30px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          p="md"
          w="90%"
        >
          <Text weight="bold" size="xl">
            {titleS}
          </Text>
          <Text>{descriptionS}</Text>
        </Flex>
      )}
    </>
  );
};

export default AboutUsComp;
