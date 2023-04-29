import { Paper, Text, UnstyledButton } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  description: string;
  destination: string;
  title: string;
  image?: string;
};

const CircleComponent = ({ description, destination, title, image }: Props) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [isHovered, setIsHovered] = useState(false);

  const goTo = (destination: string) => {
    navigate(destination);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <UnstyledButton onClick={() => goTo(destination)}>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: isHovered
            ? theme.colors.yellow[3]
            : theme.colors.yellow[4],
          borderRadius: "30px",
          padding: "40px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Paper
          style={{
            width: 240,
            height: 240,
            borderRadius: "50%",
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        />
        <Text weight="bold">{title}</Text>
        <Text pt="sm" align="center">
          {description}
        </Text>
      </div>
    </UnstyledButton>
  );
};

export default CircleComponent;
