import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Home from "./components/global/Home";
import Error from "./components/single/Error";
import SingleProduct from "./components/single/SingleProduct";
import PrivacyPolicy from "./components/global/Privacy";
import ReturnPolicy from "./components/global/Return";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const App = () => {
  return (
    <Box>
      <Router>
        <Box
          id="container"
          sx={{
            width: "100%",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/pages/products1" element={<PageOne />} />
            <Route path="/pages/products2" element={<PageTwo />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
