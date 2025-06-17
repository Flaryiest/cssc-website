import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home  from "@pages/home/home";

import Community from "@pages/community/community";


const router = createBrowserRouter(createRoutesFromElements(<>
    <Route  path="/" element={<Home />} />
    <Route path="/community" element={<Community />} />
</>
))

export default router;