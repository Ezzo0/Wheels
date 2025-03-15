import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Close, ExpandMore } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';

import Links from './Links';

const ThirdHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const theme = useTheme();

    return (
        <Container sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "space-between",
            mt: 5
        }} >
            <Box>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        wirdth: 222,
                        bgcolor: theme.palette.myColor.main,
                        color: theme.palette.text.secondary
                    }}
                >
                    <WindowIcon />
                    <Typography sx={{
                        padding: "0",
                        textTransform: "capitalize",
                        mx: 1
                    }}
                    >
                        Categories
                    </Typography>
                    <Box flexGrow={1} />

                    <KeyboardArrowRightOutlinedIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        ".MuiPaper-root": {
                            width: 220,
                            bgcolor: theme.palette.myColor.main
                        }
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ElectricCarIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Electric Vehicles</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LocalTaxiIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Hybrid Vehicles</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <GasMeterIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Gas Vehicles</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>

            {
                useMediaQuery('(min-width:1200px)') && (
                    <Stack gap={15} direction={"row"} alignContent={"center"} >
                        <Links title={"Home"} />
                        <Links title={"Rent"} />
                        <Links title={"Make It Rentable"} />
                        <Links title={"Account"} />
                    </Stack>)
            }

            {
                useMediaQuery('(max-width:1200px)') && (
                    < IconButton onClick={toggleDrawer("top", true)}>
                        <MenuIcon />
                    </IconButton>)
            }


            <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                sx={{
                    ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
                        height: "100%"
                    }
                }}
            >
                <Box sx={{
                    width: 444,
                    mx: "auto",
                    mt: 6,
                    position: "relative"
                }}>
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
                        onClick={toggleDrawer("top", false)}>
                        <Close />
                    </IconButton>
                    {
                        [
                            { mainLink: "Home", subLink: ["Link1", "Link2"] },
                            { mainLink: "Rent", subLink: ["Link1", "Link2"] },
                            { mainLink: "Make It Rentable", subLink: ["Link1", "Link2"] },
                            { mainLink: "Account", subLink: ["Link1", "Link2"] }
                        ].map((item) => {
                            return (
                                <Accordion key={item.mainLink} elevation={0} sx={{
                                    bgcolor: "initial",
                                    top: 50
                                }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">{item.mainLink}</Typography>
                                    </AccordionSummary>
                                    <List sx={{
                                        py: 0,
                                        my: 0
                                    }}>
                                        {
                                            item.subLink.map((sublink) => {
                                                return (
                                                    <ListItem key={sublink} sx={{
                                                        py: 0,
                                                        my: 0
                                                    }}>
                                                        <ListItemButton>
                                                            <ListItemText primary={sublink} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            }
                                            )
                                        }
                                    </List>
                                </Accordion>
                            )
                        }
                        )
                    }
                </Box>
            </Drawer>
        </Container >
    );
};

export default ThirdHeader;