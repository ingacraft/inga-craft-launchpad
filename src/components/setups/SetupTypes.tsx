import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Briefcase, Palette, Video } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";
import gamingSetup from "@/assets/gaming-setup-1.jpg";
import homeOffice from "@/assets/setup-homeoffice.jpg";
import criativo from "@/assets/setup-criativo.jpg";
import streamer from "@/assets/setup-streamer.jpg";

const types = [
  {
    icon: Gamepad2,
    title: "Setup Gamer",
    image: gamingSetup,
    borderClass: "rotating-border-green",
    items: [
      "Performance para jogos",
      "Iluminação RGB",
      "Conforto para longas sessões",
    ],
  },
  {
    icon: Briefcase,
    title: "Setup Home Office",
    image: homeOffice,
    borderClass: "rotating-border-blue",
    items: [
      "Foco em ergonomia",
      "Webcam e iluminação",
      "Isolamento acústico",
    ],
  },
  {
    icon: Palette,
    title: "Setup Profissional/Criativo",
    image: criativo,
    borderClass: "rotating-border-green",
    items: [
      "Monitores com alta precisão de cor",
      "Periféricos para design/edição",
      "Mesa digitalizadora",
    ],
  },
  {
    icon: Video,
    title: "Setup Streamer",
    image: streamer,
    borderClass: "rotating-border-blue",
    items: [
      "Microfone profissional",
      "Câmera e iluminação",
      "Controles de áudio",
    ],
  },
];

const SetupTypes = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de{" "}
            <span className="gradient-text-primary">Setup que Montamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada setup é único — escolha o seu estilo
          </p>
        </FadeInUpWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <FadeInUpWrapper key={type.title} delay={index * 0.1}>
                <Card className={`glass-card hover:scale-[1.03] transition-all duration-500 overflow-hidden h-full ${type.borderClass}`}>
                  <div className="h-52 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInUpWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SetupTypes;
