import TopHeader from "./components/header/TopHeader";
import SecondHeader from "./components/header/SecondHeader";
import ThirdHeader from "./components/header/ThirdHeader";
import Hero from "./components/hero/Hero";


import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopHeader />
        <SecondHeader />
        <ThirdHeader />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
        </Box>

      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
