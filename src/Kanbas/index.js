import { Routes,Route,Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
   return (
     <div className="d-flex">
       <KanbasNavigation />
       <div>
         <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Courses" element={<Courses/>}/>
            <Route path="Courses/:courseId/*" element={<Courses/>}/>
         </Routes>
       </div>
     </div>
   );
 }
 export default Kanbas;