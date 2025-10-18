import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import FadeInUpWrapper from "@/components/FadeInUpWrapper";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-background" id="contato">
      <div className="max-w-7xl mx-auto">
        <FadeInUpWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Criar Algo <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Incrível</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar suas ideias em soluções digitais excepcionais
          </p>
        </FadeInUpWrapper>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <FadeInUpWrapper delay={0.2} className="lg:col-span-1 space-y-6">
            <Card className="glass-card p-6 hover:scale-105 transition-smooth">
              <CardContent className="flex items-center space-x-4 p-0">
                <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-muted-foreground">ingacraftadm@gmail.com</p>
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
                  <p className="text-muted-foreground">Maringá - PR</p>
                </div>
              </CardContent>
            </Card>
          </FadeInUpWrapper>

          {/* Contact Form */}
          <FadeInUpWrapper delay={0.4} className="lg:col-span-2">
            <Card className="glass-card p-8">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:ingacraftadm@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <CardContent className="space-y-6 p-0">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome</label>
                      <Input name="name" placeholder="Seu nome completo" className="bg-background/50" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <Input name="email" type="email" placeholder="seu@email.com" className="bg-background/50" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto</label>
                    <Input name="subject" placeholder="Como podemos ajudar você?" className="bg-background/50" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <Textarea 
                      name="message"
                      placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                      rows={5}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </form>
            </Card>
          </FadeInUpWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;