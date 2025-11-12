import { useState, useEffect } from "react";
import { Trash2, MapPin, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface TrashBin {
  id: number;
  location: string;
  level: number;
  lastUpdate: string;
}

const Dashboard = () => {
  const [bins, setBins] = useState<TrashBin[]>([
    { id: 1, location: "Centro - Rua das Flores", level: 75, lastUpdate: "Agora" },
    { id: 2, location: "Parque Municipal", level: 45, lastUpdate: "5 min atrás" },
    { id: 3, location: "Avenida Principal", level: 90, lastUpdate: "2 min atrás" },
    { id: 4, location: "Praça da Matriz", level: 30, lastUpdate: "10 min atrás" },
    { id: 5, location: "Terminal Rodoviário", level: 85, lastUpdate: "1 min atrás" },
    { id: 6, location: "Escola Municipal", level: 20, lastUpdate: "15 min atrás" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBins(prevBins =>
        prevBins.map(bin => ({
          ...bin,
          level: Math.min(100, Math.max(0, bin.level + (Math.random() - 0.5) * 10)),
          lastUpdate: "Agora"
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (level: number) => {
    if (level >= 80) return "destructive";
    if (level >= 50) return "warning";
    return "success";
  };

  const getStatusText = (level: number) => {
    if (level >= 80) return "Cheio";
    if (level >= 50) return "Meio cheio";
    return "Vazio";
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Dashboard de Monitoramento
          </h2>
          <p className="text-lg text-muted-foreground">
            Acompanhe o status das lixeiras em tempo real
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm">
            <div className="h-3 w-3 rounded-full bg-success"></div>
            <span className="text-sm text-muted-foreground">Vazio (0-49%)</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm">
            <div className="h-3 w-3 rounded-full bg-warning"></div>
            <span className="text-sm text-muted-foreground">Meio cheio (50-79%)</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 shadow-sm">
            <div className="h-3 w-3 rounded-full bg-destructive"></div>
            <span className="text-sm text-muted-foreground">Cheio (80-100%)</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bins.map(bin => (
            <Card key={bin.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Trash2 className="h-6 w-6" />
                  </div>
                  <Badge variant={getStatusColor(bin.level)}>
                    {getStatusText(bin.level)}
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{bin.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {Math.round(bin.level)}%
                  </div>
                </div>

                <Progress 
                  value={bin.level} 
                  className="mb-4 h-2"
                />

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Atualizado: {bin.lastUpdate}</span>
                  {bin.level >= 80 && (
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
