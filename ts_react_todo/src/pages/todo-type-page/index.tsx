import { useState } from "react";

type TodoType = {
  title: string;
  is_done: boolean;
};

export default function TodoTypePage() {
  const [todos, setTodos] = useState<TodoType[]>();

  return (
    <>
      <div>burası todo page</div>
    </>
  );
}
