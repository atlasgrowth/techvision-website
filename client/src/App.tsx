import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { Navbar } from "./components/layout/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

// Use base path from environment variable
const base = import.meta.env.VITE_BASE_URL || "";

function Router() {
  return (
    <Switch>
      <Route path={`${base}/`} component={Home} />
      <Route path={`${base}/about`} component={About} />
      <Route path={`${base}/contact`} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={base}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <Router />
        </div>
        <Toaster />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;