import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam";
import PersonalDetails from "./components/PersonalDetails";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<OurTeam />} />{" "}
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
