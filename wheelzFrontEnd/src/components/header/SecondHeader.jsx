import { Container, IconButton, InputBase, ListItem, Stack, Typography } from "@mui/material";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import * as React from 'react';
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Search = styled('div')(({ theme }) => ({
    flexGrow: 0.6,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    '&:hover': {
        border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "300px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const options = [
    'Make',
    'Model',
    'Year',
    'Color',
    'Mileage',
    "Type"
];



const SecondHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();

    return (
        <Container sx={{
            my: 3,
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Stack alignItems={"center"}>
                <TimeToLeaveIcon />
                <Typography variant="body2">
                    Easily Renting
                </Typography>
            </Stack>
            <Search sx={{
                borderRadius: "22px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{
                            bgcolor: theme.palette.myColor.main,
                            borderBottomRightRadius: 22,
                            borderTopRightRadius: 22,
                            p: "0px"
                        }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                // className="border"
                                sx={{
                                    width: 93, textAlign: 'center', "&:hover": { cursor: "pointer" }
                                }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: "16px" }} />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                sx={{ fontSize: "15px" }}
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>
            <Stack direction={"row"} alignItems={"center"}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <RequestQuoteIcon />
                    </StyledBadge>
                </IconButton>
                <IconButton>
                    <PersonIcon />
                </IconButton>
            </Stack>
        </Container>
    );
};

export default SecondHeader;