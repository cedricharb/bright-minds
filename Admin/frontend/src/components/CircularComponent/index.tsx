import { Paper, Text, UnstyledButton } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
  description: string;
  destination: string;
};

const CircleComponent = ({ description, destination }: Props) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const goTo = (destination: string) => {
    navigate(destination);
  };

  return (
    <UnstyledButton onClick={() => goTo(destination)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          style={{
            width: 240,
            height: 240,
            borderRadius: "50%",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[3],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        />
        <Text>{description}</Text>
      </div>
    </UnstyledButton>
  );
};

export default CircleComponent;
