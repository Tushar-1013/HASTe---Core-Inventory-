import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import Receipts from "@/pages/Receipts";
import ReceiptDetail from "@/pages/ReceiptDetail";
import Delivery from "@/pages/Delivery";
import MoveHistory from "@/pages/MoveHistory";
import Stock from "@/pages/Stock";
import Warehouse from "@/pages/Warehouse";
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/operations/receipts" element={<Receipts />}/>
            <Route path="/operations/receipts/:id" element={<ReceiptDetail />}/>
            <Route path="/operations/delivery" element={<Delivery />}/>
            <Route path="/move-history" element={<MoveHistory />}/>
            <Route path="/stock" element={<Stock />}/>
            <Route path="/settings/warehouse" element={<Warehouse />}/>
            <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
