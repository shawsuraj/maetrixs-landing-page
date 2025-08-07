import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from 'react-ga4';
import GAListener from "./components/GAListener";

import Index from "./pages/Index";
import Students from "./pages/Students";
import Travelers from "./pages/Travelers";
import Party from "./pages/Party";
import Professionals from "./pages/Professionals";
import Creators from "./pages/Creators";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

// Google analytics
const MEASUREMENT_ID = "G-ZFR0ZM7PB8";
ReactGA.initialize(MEASUREMENT_ID);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop>
      <GAListener />
      <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/students" element={<Students />} />
          <Route path="/travelers" element={<Travelers />} />
          <Route path="/party" element={<Party />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/creators" element={<Creators />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </ScrollToTop>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
