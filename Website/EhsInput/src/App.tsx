import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import InputWebsite from "./components/Input/InputWebsite";
import ManageWebsite from "./components/Manage/ManageWebsite";
import LoginScreen from "./components/Login/loginScreen";
import AddWerk from "./components/Werk/AddWerk/AddWerk";
import EditWerk from "./components/Werk/EditWerk/EditWerk";
import AddEmployee from "./components/Employee/AddEmployee/AddEmployee";
import EditEmployee from "./components/Employee/EditEmployee/EditEmployee";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<InputWebsite/>} />
          <Route path="/manage" element={<ManageWebsite/>} />
          <Route path="/addwerk" element={<AddWerk/>}/>
          <Route path="/editwerk" element={<EditWerk/>}/>
          <Route path="/addemployee" element={<AddEmployee/>}/>
          <Route path="/editemployee" element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}
