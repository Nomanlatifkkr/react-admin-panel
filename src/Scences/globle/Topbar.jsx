import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';

import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { LightModeOutlined } from '@mui/icons-material';
import { ColorModeContext, tokens } from '../../theme';
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={1}>
            {/* Left Section: Search Bar */}
            <Box
                display="flex"
                alignItems="center"
                bgcolor={colors.primary[400]}
                borderRadius={2}
                p={1}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: colors.grey[200] }}
                    placeholder="Search"
                />
                <IconButton type="button" size='8px'>
                    <SearchIcon sx={{ color: colors.grey[300] }} />
                </IconButton>
            </Box>

            {/* Right Section: Icons */}
            <Box display="flex" alignItems="center" marginTop={-3}>
                {/* Light/Dark Mode Toggle */}
                <IconButton onClick={colorMode.toggleColorMode} sx={{ color: colors.grey[100] }}>
                    {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {/* Notifications Icon */}
                <IconButton sx={{ color: colors.grey[100] }}>
                    <NotificationsIcon />
                </IconButton>

                {/* Settings Icon */}
                <IconButton sx={{ color: colors.grey[100] }}>
                    <SettingsIcon />
                </IconButton>

                {/* User Account Icon */}
                <IconButton sx={{ color: colors.grey[100] }}>
                    <AccountCircleIcon />
                </IconButton>


            </Box>
        </Box >
    );
};

export default Topbar;
