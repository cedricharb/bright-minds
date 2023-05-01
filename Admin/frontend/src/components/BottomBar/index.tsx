import { Flex, Text, useMantineTheme } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

const BottomBar = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      bg={theme.colors.dark[7]}
      h={250}
      w="100%"
      style={{ borderRadius: "30px 30px 0px 0px" }}
      align="center"
      justify="space-between"
    >
      <Flex direction="column" pl="lg">
        <Text color={theme.colors.yellow[4]} size="lg">
          Check out our frequently asked questions for more information.
        </Text>
        <Text color={theme.colors.yellow[4]} size="lg">
          Email us at test@gmail.com for any further or more detailed questions.
        </Text>
      </Flex>
      <Flex gap="lg" p="lg">
        <a href="https://www.facebook.com/">
          <IconBrandFacebook color={theme.colors.yellow[4]} size={50} />
        </a>
        <a href="https://www.instagram.com/brightminds_center/">
          <IconBrandInstagram color={theme.colors.yellow[4]} size={50} />
        </a>
        <a href="https://www.youtube.com/">
          <IconBrandYoutube color={theme.colors.yellow[4]} size={50} />
        </a>
        <a href="https://www.linkedin.com/">
          <IconBrandLinkedin color={theme.colors.yellow[4]} size={50} />
        </a>
      </Flex>
    </Flex>
  );
};

export default BottomBar;
