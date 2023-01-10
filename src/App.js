import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";

function App() {
  return (
    <div className="dark:bg-slate-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
