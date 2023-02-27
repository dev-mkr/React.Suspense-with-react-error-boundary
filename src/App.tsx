import { SwrConfig, ErrorBoundaryContext, SuspenseContext } from "./context";
//components
import Todos from "./features/todos/Todos";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SwrConfig>
        <ErrorBoundaryContext>
          <SuspenseContext>
            <Todos />
          </SuspenseContext>
        </ErrorBoundaryContext>
      </SwrConfig>
    </main>
  );
}

export default App;
