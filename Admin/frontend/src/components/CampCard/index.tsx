import {
  ActionIcon,
  Button,
  Card,
  Flex,
  Input,
  Modal,
  NumberInput,
  Text,
  TextInput,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  isUpcoming?: boolean;
  startDate?: string;
  endDate: string;
  onSubmitDelete: (id: number) => void;
  onSubmitEdit: (
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    visibility: Boolean,
    age_range: string
  ) => void;
};

const CampCard = ({
  id,
  title,
  description,
  isUpcoming,
  startDate,
  endDate,
  onSubmitDelete,
  onSubmitEdit,
}: Props) => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [titleV, setTitleV] = useState(title);
  const [descriptionV, setDescriptionV] = useState(description);
  const [startDateV, setStartDateV] = useState(startDate);
  const [endDateV, setEndDateV] = useState(endDate);
  const [ageRange, setAgeRange] = useState("5-10");

  const openModal = () => {
    if (isUpcoming) {
      open();
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} radius="30px" size="md" centered>
        <Card
          w="100%"
          h="100%"
          padding="md"
          bg={theme.colorScheme === "dark" ? theme.colors.dark[7] : "white"}
        >
          <Flex direction="column" gap="lg" align="center">
            <Text w="100%" align="center">
              Edit the camp
            </Text>
            <Input
              w="100%"
              placeholder="Title"
              value={titleV}
              onChange={(event) => setTitleV(event.target.value)}
            />
            <Input
              w="100%"
              placeholder="Description"
              value={descriptionV}
              onChange={(event) => setDescriptionV(event.target.value)}
            />
            <Input
              w="100%"
              placeholder="Start Date"
              value={startDateV}
              onChange={(event) => setStartDateV(event.target.value)}
            />
            <Input
              w="100%"
              placeholder="Start Date"
              value={endDateV}
              onChange={(event) => setEndDateV(event.target.value)}
            />
            <Input
              placeholder="Age range (example 5-10)"
              w="100%"
              value={ageRange}
              onChange={(event) => setAgeRange(event.target.value)}
            />
            <Button color="dark" w="200px">
              Submit
            </Button>
          </Flex>
        </Card>
      </Modal>
      <UnstyledButton onClick={openModal}>
        <Flex>
          <Flex
            direction="column"
            gap="md"
            style={{
              borderRadius: "30px",
              position: "relative",
            }}
            bg="white"
            h={350}
            w={250}
            p="md"
            justify="space-between"
          >
            <ActionIcon
              style={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                onSubmitDelete(id);
              }}
            >
              <IconX color="red" size={20} />
            </ActionIcon>
            <Text
              weight="bold"
              color={theme.colors.dark[7]}
              w="100%"
              align="center"
            >
              {title}
            </Text>
            <Text color={theme.colors.dark[7]} w="100%" align="center">
              {description}
            </Text>
            {(isUpcoming && (
              <Flex justify="space-between" w="100%">
                <Flex
                  direction="column"
                  bg={theme.colors.yellow[4]}
                  style={{ borderRadius: "30px" }}
                  p="sm"
                >
                  <Text>Start date:</Text>
                  <Text>{startDate}</Text>
                </Flex>
                <Flex
                  direction="column"
                  bg={theme.colors.yellow[4]}
                  style={{ borderRadius: "30px" }}
                  p="sm"
                >
                  <Text>End date:</Text>
                  <Text>{endDate}</Text>
                </Flex>
              </Flex>
            )) ||
              (!isUpcoming && (
                <Flex
                  bg={theme.colors.dark[7]}
                  style={{ borderRadius: "30px" }}
                  p="sm"
                  gap="sm"
                  justify="center"
                >
                  <Text color={theme.colors.red[6]}>Ended in:</Text>
                  <Text color={theme.colors.red[6]}>{endDate}</Text>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </UnstyledButton>
    </>
  );
};

export default CampCard;
