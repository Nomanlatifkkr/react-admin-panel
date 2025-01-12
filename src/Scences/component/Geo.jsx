import React from 'react'
import GeographyChart from './GeographyChart'
import { Box, Typography } from '@mui/material'

const Geo = () => {
    return (
        <div>
            <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
                Geography Based Traffic
            </Typography>
            <Box height="100vh">
                <GeographyChart />
            </Box>
        </div>
    )
}

export default Geo