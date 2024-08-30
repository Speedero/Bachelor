import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import InputWebsite from "./components/InputWebsite";
import ManageWebsite from "./components/ManageWebsite";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputWebsite />} />
        <Route path="/manage" element={<ManageWebsite />} />
      </Routes>
    </BrowserRouter>

    <Outlet/>
    </>
  );
}
