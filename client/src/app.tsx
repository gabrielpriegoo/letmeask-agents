import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { RoomDetails } from "./pages/room";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index />
        <Route element={<RoomDetails />} path="/room" />
      </Routes>
    </BrowserRouter>
  );
};
