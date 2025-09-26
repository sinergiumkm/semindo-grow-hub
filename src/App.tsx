import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangKami from "./pages/TentangKami";
import LayananKonsultasi from "./pages/LayananKonsultasi";
import SelfAssessment from "./pages/SelfAssessment";
import LearningHub from "./pages/LearningHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/layanan-konsultasi" element={<LayananKonsultasi />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
