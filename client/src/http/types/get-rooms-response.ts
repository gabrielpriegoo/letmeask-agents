export type GetRoomsResponse = Array<{
  id: number;
  name: string;
  questionsCount: number;
  createdAt: string;
  isGeneratedAnswer?: boolean;
}>;
