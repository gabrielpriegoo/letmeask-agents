import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { RecordRoomAudio } from "./pages/record-room-audio";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:id" />
          <Route element={<RecordRoomAudio />} path="/room/:id/audio" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
