import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TentangKami from "./pages/TentangKami";
import LayananKonsultasi from "./pages/LayananKonsultasi";
import SelfAssessment from "./pages/SelfAssessment";
import LearningHub from "./pages/LearningHub";
import Marketplace from "./pages/Marketplace";
import FinancingHub from "./pages/FinancingHub";
import ExportHub from "./pages/ExportHub";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Component untuk tracking analytics
const AnalyticsTracker = () => {
  useAnalytics();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/layanan-konsultasi" element={<LayananKonsultasi />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/financing-hub" element={<FinancingHub />} />
          <Route path="/export-hub" element={<ExportHub />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
