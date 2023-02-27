# React.Suspense-with-react-error-boundary
This repository should be about some new techniques I learned. However, after gaining SOLID knowledge, I refactored the code to be more clean and scalable.
### before learning SOLID
```javascript
import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

//components
import { ErrorComponent, LoadingComponent } from "../components";
import Todos from "./features/todos/Todos";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => {
              if (!res.ok) throw new Error("Fetch failed");
              return res.json();
            }),
        }}
      >
        <ErrorBoundary fallback={<ErrorComponent />}>
          <Suspense fallback={<LoadingComponent />}>
            <Todos />
          </Suspense>
        </ErrorBoundary>
      </SWRConfig>
    </main>
  );
}

export default App;

```
It is obvious that the **App** component is very messy and violates **SOLID**, if any changes are required in the future, either on the SWR configuration or by adding a reset function to ErrorBoundery, We will modify the **App** component. 
### after learning solid
```javascript
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

```
Every component's code is now separated from the app component, and it's more cleaner.
## Resources to learn SOLID
- SOLID Principles بالعربى https://youtube.com/playlist?list=PLnqAlQ9hFYdflFSS4NigVB7aSoYPNwHTL
- SOLID Design Principles https://youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9
-  SOLID Principles in react https://youtu.be/MSq_DCRxOxw
