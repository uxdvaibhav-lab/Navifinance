import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Showcase from "./pages/Showcase";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CustomCursor />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
