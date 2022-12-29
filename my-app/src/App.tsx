import * as React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/pages/home";
import Charts from "./components/pages/charts";
import Forms from "./components/pages/forms";
import Reports from "./components/pages/reports";
import Tables from "./components/pages/tables";
import Property from "./components/pages/property";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route index element={<Reports />} />
                    <Route path='/charts' element={<Charts/>}/>
                    <Route path='/forms' element={<Forms/>}/>
                    <Route path='/tables' element={<Tables/>}/>
                    <Route path='/property' element={<Property/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
