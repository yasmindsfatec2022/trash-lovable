import { Trash2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">TrashTracker</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 TrashTracker. Monitoramento inteligente de resíduos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
