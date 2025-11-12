import { Trash2, BarChart3, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Trash2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">TrashTracker</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </button>
          <Button 
            size="sm" 
            onClick={() => scrollToSection("dashboard")}
            className="gap-2"
          >
            <BarChart3 className="h-4 w-4" />
            Ver Status
          </Button>
        </nav>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => scrollToSection("dashboard")}
        >
          <BarChart3 className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
