import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Album from "./pages/Album";
import AlbumDetail from "./pages/AlbumDetail";
import Single from "./pages/Single";
import Merch from "./pages/Merch";
import Collab from "./pages/Collab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ===== PAGE TRANSITION WRAPPER ===== */

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
          <Route path="/single" element={<Single />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

/* ===== MAIN APP ===== */

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
