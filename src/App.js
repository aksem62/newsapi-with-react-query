import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Quotes from "./components/Quotes";

const queryClient = new QueryClient();

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <h2>Count value equals to {count}</h2>
      <button onClick={handleClick}>Increase count</button>
      <QueryClientProvider client={queryClient}>
        <Quotes />
      </QueryClientProvider>
    </>
  );
};

export default App;
