import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import CreateShop from "./pages/ShopWizard";
import Shop from "./pages/Shop";
import Education from "./pages/Education";
import Feed from "./pages/Feed";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import AuthSlider from "./pages/AuthSlider";
import ForgotPassword from './pages/ForgotPassword';

// Education Module Pages
import InstituteDetail from "./pages/education/InstituteDetail";
import CreateInstitute from "./pages/education/CreateInstitute";
import StudentDashboard from "./pages/education/StudentDashboard";

// Feed Module Pages
import PostDetail from "./pages/feed/PostDetail";
import UserProfile from "./pages/feed/UserProfile";
import CreatePost from "./pages/feed/CreatePost";
import Friends from "./pages/feed/Friends";
import Notifications from "./pages/feed/Notifications";

// Marketplace Module Pages
import ProductDetail from "./pages/marketplace/ProductDetail";
import CreateProduct from "./pages/marketplace/CreateProduct";
import UserDashboard from "./pages/marketplace/UserDashboard";

// Store Module Pages
import ShopDetail from "./pages/store/ShopDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/create-shop" element={<CreateShop />} />
          <Route path="/shop/:shopId" element={<Shop />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/institute/:id" element={<InstituteDetail />} />
          <Route path="/education/create" element={<CreateInstitute />} />
          <Route path="/education/dashboard" element={<StudentDashboard />} />
          
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/post/:id" element={<PostDetail />} />
          <Route path="/feed/profile/:username" element={<UserProfile />} />
          <Route path="/feed/profile" element={<UserProfile />} />
          <Route path="/feed/create" element={<CreatePost />} />
          <Route path="/feed/friends" element={<Friends />} />
          <Route path="/feed/notifications" element={<Notifications />} />
          
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/product/:productId" element={<ProductDetail />} />
          <Route path="/marketplace/create" element={<CreateProduct />} />
          <Route path="/marketplace/dashboard" element={<UserDashboard />} />
          
          <Route path="/store/shop/:shopId" element={<ShopDetail />} />

          {/* ✅ New sliding auth route */}
          <Route path="/auth" element={<AuthSlider />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
