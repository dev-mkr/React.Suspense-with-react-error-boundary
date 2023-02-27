import useSWR from "swr";
import { Todo } from "./types";

const URL = "https://dummyjson.com/todos";

const Todos = () => {
  const { data } = useSWR(URL, { suspense: true });
  return (
    <div className="m-auto flex w-2/4 flex-col items-center gap-y-4 py-10">
      {data.todos.map((todo: Todo) => (
        <div
          key={todo.id}
          className="min-w-full rounded-xl bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
        >
          <span className="flex rounded-lg bg-black p-4 text-white">
            {todo.todo}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Todos;
