import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Form from "../../../components/form/form";
import Header from "../../../layout/header/header";

export default function Login() {
  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack>
          <Typography variant="h3">Login</Typography>

          <Form page={"login"} />
        </Stack>
      </Stack>
    </Container>
  );
}
