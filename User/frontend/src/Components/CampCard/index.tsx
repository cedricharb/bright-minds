import {
  Button,
  Card,
  Flex,
  Group,
  Input,
  Modal,
  NumberInput,
  Text,
  TextInput,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

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
  const [opened, { open, close }] = useDisclosure(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/\D/g, ""); // remove non-numeric characters
    setPhoneNumber(newValue);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} radius="30px" size="md" centered>
        <Card w="100%" h="100%" padding="md">
          <Flex direction="column" gap="lg" align="center">
            <Text w="100%" align="center">
              Enroll in the camp!
            </Text>
            <Input w="100%" placeholder="Name" />
            <Input w="100%" placeholder="Last Name" />
            <TextInput
              w="100%"
              value={phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              maxLength={13}
              inputMode="numeric"
              style={{
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,
              }}
            />

            <Input w="100%" placeholder="Email address" />
            <NumberInput placeholder="Age" w="100%" />
            <Button color="dark" w="200px">
              Submit
            </Button>
          </Flex>
        </Card>
      </Modal>
      <UnstyledButton onClick={open}>
        <Flex
          direction="column"
          gap="md"
          style={{ borderRadius: "30px" }}
          bg="white"
          h={350}
          w={250}
          p="md"
          justify="space-between"
        >
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
      </UnstyledButton>
    </>
  );
};

export default CampCard;
