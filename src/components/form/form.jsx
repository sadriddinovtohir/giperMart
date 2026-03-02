import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
  Paper,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { Search } from "../../config/ui/style";
import Search_icons from "../../assets/icon/search_icons";
import nutfications from "../../assets/notfication/nutfications.mp3";
import { toast } from "react-toastify";
import { playSound } from "../notfication/not";

export default function Form({ page }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const size_Search = useMediaQuery("(min-width:1229px )");
  const size_Searchres = useMediaQuery("(min-width:813px )");
  const nav = useNavigate();
  const submit = (data) => {
    if (page == "login") {
      saveState("user", data);
      nav("/");
      toast.success("✅ siz login dan muofaqiyatliy o'tdingiz");
      playSound(nutfications);
    }

    // if(page == "header"){
    //    if("header".length <= 2 )
    //     nav("/SearchData")
    // }else{
    //   nav("/home")
    // }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      {page == "login" && (
        <Paper elevation={2} sx={{ p: 3, minWidth: 320 }}>
          <Stack spacing={2}>
            <Typography variant="h5">Login</Typography>
            <TextField
              label="Name"
              fullWidth
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email or Phone"
              fullWidth
              {...register("contact", { required: "Contact is required" })}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
            <Button
              sx={{ alignSelf: "flex-end" }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      )}

      {page == "header" && (
        <>
          {size_Search ? (
            <TextField
              style={{ width: "610px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search_icons />
                  </InputAdornment>
                ),
              }}
              {...register("search")}
              placeholder="search"
            />
          ) : (
            <>
              {size_Searchres ? (
                <TextField
                  style={{ width: "410px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search_icons />
                      </InputAdornment>
                    ),
                  }}
                  {...register("search")}
                  placeholder="search"
                />
              ) : (
                <TextField
                  style={{ width: "280px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search_icons />
                      </InputAdornment>
                    ),
                  }}
                  {...register("search")}
                  placeholder="search"
                />
              )}
            </>
          )}
        </>
      )}
    </form>
  );
}
