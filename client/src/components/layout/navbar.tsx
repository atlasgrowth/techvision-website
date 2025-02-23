import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const base = import.meta.env.VITE_BASE_URL || "";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={base || "/"} className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              TechVision
            </span>
          </Link>
          <div className="flex gap-6">
            {navigation.map((item) => {
              const fullPath = `${base}${item.href}`;
              const isActive = location === item.href || location === fullPath;
              return (
                <Link
                  key={item.name}
                  href={fullPath}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[280px]">
            <div className="flex flex-col gap-4 py-4">
              {navigation.map((item) => {
                const fullPath = `${base}${item.href}`;
                const isActive = location === item.href || location === fullPath;
                return (
                  <Link
                    key={item.name}
                    href={fullPath}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActive ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <Link href={`${base}#get-started`} className="hidden md:inline-flex">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}