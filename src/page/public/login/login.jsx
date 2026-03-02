import { Container, Stack, Paper, Typography } from "@mui/material";
import Form from "../../../components/form/form";

export default function Login() {
  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"} sx={{ minHeight: '70vh' }}>
        <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 420 }}>
          <Stack spacing={2}>
            <Typography variant="h4" align="center">Login</Typography>
            <Form page={"login"} />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
