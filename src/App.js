import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Endpoint from "./pages/Endpoint";
import CompD from "./components/props/CompD";
import CompA from "./components/context/CompA";
import Controlled from "./components/form/Controlled";
import Uncontrolled from "./components/form/Uncontrolled";
import Todo from "./Todo/Todo";
import { QueryClient, QueryClientProvider } from "react-query";
import Response from "./components/api/Response";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/endpoint" element={<Endpoint />} />
          <Route path="/comp" element={<CompD />} />
          <Route path="/context" element={<CompA />} />
          <Route path="/controlled-form" element={<Controlled />} />
          <Route path="/uncontrolled-form" element={<Uncontrolled />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/api" element={<Response />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
