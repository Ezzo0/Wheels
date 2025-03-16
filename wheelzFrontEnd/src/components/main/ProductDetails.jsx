import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProductDetails = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box sx={{ display: "flex" }}>
                <img
                    width={360}
                    src="public/imgs/car1.jpg"
                    alt=""
                />
            </Box>
            <Box
                sx={{
                    py: 2,
                    textAlign: {
                        xs: "center",
                        sm: "left"
                    }
                }}>
                <Typography variant="h5">
                    Toyota
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    $price
                </Typography>
                <Typography variant="body1">
                    Attributes
                </Typography>

                <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}
                >
                    {
                        ["public/imgs/car1.jpg", "public/imgs/car2.jpg"].map((item) => {
                            return (
                                <img
                                    style={{ borderRadius: 3 }}
                                    width={100}
                                    key={item}
                                    src={item}
                                    alt=""
                                />
                            );
                        })
                    }
                </Stack>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                        flexWrap: "wrap",
                    }}
                    gap={20}
                >
                    <Button
                        sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                        variant="contained"
                    >
                        <CarRentalIcon sx={{ mr: 1 }} fontSize="small" />
                        Rent Now
                    </Button>
                    <Button
                        sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                        variant="contained"
                    >
                        <LocationOnIcon sx={{ mr: 1 }} fontSize="small" />
                        Location
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;