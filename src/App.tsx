import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageSwitcher } from "./components/LanguageSwitcher";


import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Activities from "@/pages/Our_Activities";
import Heritage from "@/pages/Urban_Heritage";

const queryClient = new QueryClient();


const App = () => {

  const { t, i18n } = useTranslation();

  return (
  <div>
    <nav>
      <LanguageSwitcher />
    </nav>
    <main>
    <QueryClientProvider client={queryClient}>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Our_Activities" element={<Activities />} />
            <Route path="/Urban_Heritage" element={<Heritage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
    </main>
    </div>
  );
};
export default App;
