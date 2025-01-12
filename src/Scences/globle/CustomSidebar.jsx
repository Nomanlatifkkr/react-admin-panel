import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../../theme";


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
            style={{
                color: selected === title ? colors.greenAccent[200] : colors.grey[100],
                backgroundColor: selected === title ? colors.primary[900] : "transparent",
                transition: "all 0.7s ease-in-out",
            }}
            rootStyles={{
                "&:hover": {
                    backgroundColor: colors.primary[900],
                    color: colors.greenAccent[900],
                    transition: "all 0.5s ease-in-out",
                },
            }}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const CustomSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{ height: "100vh" }}>
            <Sidebar
                collapsed={isCollapsed}
                backgroundColor={colors.primary[800]}
                rootStyles={{
                    "& .pro-sidebar-inner": {
                        backgroundColor: colors.primary[800],
                        height: "100%",
                    },
                }}
            >
                <Menu>
                    {/* Logo and Toggle */}
                    <MenuItem className="toplogo"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            transition: "all 0.5s ease",
                            background: colors.primary[800],
                        }
                        }
                    >
                        {!isCollapsed && (
                            <Box className='logo' display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3">ADMINIS</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* Profile Section */}
                    {!isCollapsed && (
                        <Box mb="25px" textAlign="center">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src="/user.png"
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Typography variant="h2" fontWeight="bold" sx={{ mt: "10px" }}>
                                Noman
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[100]}>
                                Latif
                            </Typography>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        {/* Data Section */}
                        <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                            Data
                        </Typography>
                        <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        {/* Pages Section */}
                        <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                            Pages
                        </Typography>
                        <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        {/* Charts Section */}
                        <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                            Charts
                        </Typography>
                        <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default CustomSidebar;
