import { Box, Container, IconButton, Rating, Stack, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from "@emotion/react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CarRentalIcon from '@mui/icons-material/CarRental';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";


const Main = () => {
    const [alignment, setAlignment] = useState('left');
    const theme = useTheme();

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{
            py: 9
        }}>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={3}
                flexWrap={"wrap"}
            >
                <Box>
                    <Typography variant="h6">
                        Selected cars
                    </Typography>
                    <Typography fontWeight={300} variant="body1">
                        Most Rented Cars in all types
                    </Typography>
                </Box>
                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233, 69, 96, 0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        }
                    }}
                >
                    <ToggleButton
                        className="myButton"
                        value="left"
                        aria-label="left aligned"
                        sx={{ color: theme.palette.text.primary }}
                    >
                        Electric Cars
                    </ToggleButton>
                    <ToggleButton
                        className="myButton"
                        value="center"
                        aria-label="centered"
                        sx={{
                            mx: "16px !important",
                            color: theme.palette.text.primary
                        }}
                    >
                        Hybrid Cars
                    </ToggleButton>
                    <ToggleButton
                        className="myButton"
                        value="right"
                        aria-label="right aligned"
                        sx={{ color: theme.palette.text.primary }}
                    >
                        Gas Cars
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {
                    ["a", "b", "c", "d"].map((item) => {
                        return (
                            <Card
                                key={item}
                                sx={{
                                    maxWidth: 333,
                                    mt: 6,
                                    ":hover .MuiCardMedia-root ": {
                                        scale: "1.1",
                                        transition: "0.35s",
                                    }
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        height: 277
                                    }}
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="public/imgs/car1.jpg"
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
                                            Toyota
                                        </Typography>

                                        <Typography variant="subtitle1" component="p">
                                            $20.00
                                        </Typography>
                                    </Stack>

                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Car Describtion
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Button onClick={handleClickOpen} size="large">
                                        <CarRentalIcon sx={{ mr: 1 }} fontSize="small" /> Rent
                                    </Button>
                                    <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Stack>

            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton
                    sx={{
                        ":hover": {
                            rotate: "320deg",
                            transition: "0.3s",
                            color: "red"
                        },
                        position: "absolute",
                        top: 0,
                        right: 10,
                    }}
                    onClick={handleClose}>
                    <Close />
                </IconButton>
                <ProductDetails />
            </Dialog>

        </Container >
    );
};

export default Main;