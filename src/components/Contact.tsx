import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background" id="contato">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Vamos Criar Algo <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Incrível</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Entre em contato conosco e descubra como podemos transformar suas ideias em soluções digitais excepcionais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="glass-card p-6 hover:scale-105 transition-smooth">
              <CardContent className="flex items-center space-x-4 p-0">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-muted-foreground">contato@ingacraft.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-smooth">
              <CardContent className="flex items-center space-x-4 p-0">
                <div className="gradient-secondary w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-muted-foreground">(11) 9999-9999</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:scale-105 transition-smooth">
              <CardContent className="flex items-center space-x-4 p-0">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Localização</h3>
                  <p className="text-muted-foreground">São Paulo, SP</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="glass-card p-8">
              <CardContent className="space-y-6 p-0">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Como podemos ajudar você?" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;