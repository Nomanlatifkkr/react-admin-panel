import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMode, ColorModeContext } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import CustomSidebar from "./Scences/globle/CustomSidebar";
import Topbar from "./Scences/globle/Topbar";
import Dashboard from "./Scences/Dashboard/DashBoard";
import Contacts from "./Scences/contacts/Contacts";
import Team from "./Scences/team/Team";
import Invoices from "./Scences/invoices/Invoices";
import FAQ from "./Scences/faq/FAQ";
import Pie from "./Scences/pie/Pie";
import Form from "./Scences/form/Form";
import Line from "./Scences/line/Line";
import Bar from "./Scences/bar/Bar";
import Calendar from "./Scences/calendar/calendar";
import Geo from "./Scences/component/Geo";




const App = () => {
  const [theme, colorMode] = useMode(); // Corrected destructuring

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <div className="sidebar">
              <CustomSidebar />
            </div>
            <main className="content">
              <Topbar />
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="/team" element={<Team />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />

                <Route path="/bar" element={<Bar />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geo />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
