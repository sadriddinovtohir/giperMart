import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/ui/theme.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { clinet } from "./config/data/queriy-clinet.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./config/store/reduser/store.js";
import Loading from "./components/loading/Loading";

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={clinet}>
            <CssBaseline />
            {loading ? <Loading /> : <App />}
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
