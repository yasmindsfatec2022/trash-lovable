import { Trash2, TrendingDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-white/10 p-6 backdrop-blur-sm">
              <Trash2 className="h-16 w-16" />
            </div>
          </div>
          
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            TrashTracker
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Monitoramento inteligente de lixeiras
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <TrendingDown className="h-4 w-4" />
              <span>Redução de custos</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Trash2 className="h-4 w-4" />
              <span>Coleta otimizada</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}></div>
    </section>
  );
};

export default Hero;
