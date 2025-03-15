import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
    Box,
    Container,
    IconButton,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import {
    DarkModeOutlined,
    ExpandMore,
    LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopHeader = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box
            sx={{
                bgcolor: "#2B3445",
                py: "4px",
                borderBottomRightRadius: 65,
                borderBottomLeftRadius: 65,
            }}
        >
            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography
                        sx={{
                            mr: 2,
                            p: "4px 10px",
                            bgcolor: "#D23F57",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        Wheelz
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        Spinning Different Wheels
                    </Typography>

                    <Box flexGrow={1} />

                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined sx={{ fontSize: "16px" }} />
                            </IconButton>
                        )}
                    </div>

                    <TwitterIcon
                        sx={{
                            fontSize: "16px",
                            color: "#fff",
                        }}
                    />
                    <FacebookIcon
                        sx={{
                            fontSize: "16px",
                            mx: 1,
                            color: "#fff",
                        }}
                    />
                    <InstagramIcon
                        sx={{
                            fontSize: "16px",
                            color: "#fff",
                        }}
                    />
                </Stack>
            </Container>
        </Box>
    );
};

export default TopHeader;