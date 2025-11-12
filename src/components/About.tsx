import { Lightbulb, MapPin, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Localização em Tempo Real",
      description: "Monitore todas as lixeiras através de um mapa interativo e saiba exatamente onde está cada uma."
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Visualize estatísticas de ocupação e otimize as rotas de coleta baseado em dados reais."
    },
    {
      icon: Lightbulb,
      title: "Sensores Inteligentes",
      description: "Tecnologia IoT para detectar níveis de preenchimento e enviar alertas automáticos."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Sobre o Projeto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            O TrashTracker é uma solução inovadora para gestão inteligente de resíduos urbanos. 
            Utilizando sensores IoT, monitoramos o nível de ocupação das lixeiras em tempo real, 
            permitindo uma coleta mais eficiente e sustentável.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group p-6 transition-all hover:shadow-lg hover:scale-105">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
