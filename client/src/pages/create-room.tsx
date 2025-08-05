import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: number;
  name: string;
}>;

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <div>{isLoading && <p>Carregando...</p>}</div>
      <div>
        {data?.map((room) => (
          <div key={room.id}>
            <p>{room.name}</p>
          </div>
        ))}
      </div>

      <Link className="underline" to="/room">
        Entrar na sala
      </Link>
    </div>
  );
};
