import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css"
import IconSection from "./IconSection";


const mySlider = [
    {
        headerText: "Welcome to Wheelz",
        first: "Book now and drive into",
        second: "Unforgettable",
        third: "Experiences",
        fourth: "Enjoy our booking process and a diverse fleet.",
        path: "public/imgs/banner1.jpg"
    },
    {
        headerText: "Electrify your journey",
        first: "Save up to 15%",
        second: "By booking ",
        third: "Electric Vehicles",
        fourth: "",
        path: "public/imgs/banner2.jpg"
    }
]


const Hero = () => {
    const theme = useTheme();
    return (
        <Container>
            <Box
                sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
            >
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {mySlider.map((item) => {
                        return (
                            <SwiperSlide key={item.headerText} className="parent-slider">
                                <img src={item.path} alt="" />
                                <Box
                                    sx={{
                                        [theme.breakpoints.up("sm")]: {
                                            position: "absolute",
                                            left: "10%",
                                            textAlign: "left",
                                        },

                                        [theme.breakpoints.down("sm")]: {
                                            pt: 4,
                                            pb: 6,
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#222",
                                        }}
                                        variant="h3"
                                    >
                                        {item.headerText}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#222",
                                            fontWeight: 500,
                                            my: 1,
                                        }}
                                        variant="h3"
                                    >
                                        {item.first}
                                    </Typography>

                                    <Stack
                                        sx={{
                                            justifyContent: { xs: "center", sm: "left" },
                                        }}
                                        direction={"row"}
                                        alignItems={"center"}
                                    >
                                        <Typography color={"#333"} mr={1} variant="h4">
                                            {item.second}
                                        </Typography>
                                        <Typography color={"#D23F57"} variant="h4">
                                            {item.third}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        sx={{
                                            color: "#000",
                                            fontWeight: 300,
                                            my: 1,
                                        }}
                                        variant="body1"
                                    >
                                        {item.fourth}
                                    </Typography>

                                    <Button
                                        sx={{
                                            px: 5,
                                            py: 1,
                                            mt: 2,
                                            backgroundColor: "#222",
                                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            color: "#fff",
                                            borderRadius: "1px",
                                            "&:hover": {
                                                bgcolor: "#151515",
                                                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            },
                                        }}
                                        variant="contained"
                                    >
                                        Rent now
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>
            <IconSection />
        </Container>
    );
};

export default Hero;