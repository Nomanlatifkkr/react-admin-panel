import { Box } from "@mui/material";
import Header from "../component/Header";
import LineChart from "../component/LineChart";


const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
