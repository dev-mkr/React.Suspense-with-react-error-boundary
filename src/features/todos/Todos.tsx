import useSWR from "swr";
import { Todo } from "./types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  });
const URL = "https://dummyjson.com/todos";

const Todos = () => {
  const { data } = useSWR(URL, fetcher);
  return (
    <div>
      {data &&
        data.todos.map((todo: Todo) => {
          console.log(todo.todo);
        })}
    </div>
  );
};

export default Todos;
