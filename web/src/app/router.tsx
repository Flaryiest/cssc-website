import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home  from "@pages/home/home";
import Community from "@pages/community/community";
import Sponsors from "@pages/sponsors/sponsors";
import Contact from "@pages/contact/contact";

const router = createBrowserRouter(createRoutesFromElements(<>
    <Route  path="/" element={<Home />} />
    <Route path="/community" element={<Community />} />
    <Route path="/sponsors" element={<Sponsors />} />
    <Route path="/contact" element={<Contact />} />
</>
))

export default router;