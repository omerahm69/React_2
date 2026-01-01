import { FooterSection as Footer } from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.form.success"), description: t("contact.form.successDesc") });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: t("contact.address"), value: "Massawa Old Town, Eritrea" },
    { icon: Mail, label: t("contact.email"), value: "info@urbanheritage.org" },
    { icon: Phone, label: t("contact.phone"), value: "+291 1 123 456" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("contact.label")}</span>
            <h3 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("Mailing List Sign up")} <span className="gradient-text">{t("Welcome to join us")}</span>
            </h3>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            {t("The initiative is open to ideas and further initiatives to spread out the goals of the initiative, to the whole Eritrean diaspora. Therefore, we encourage all Eritreans to get on board with us to achieve our goals. The first step is to be with us on our mailing list.Get news about the initiative sent to your own box and leave your message by suggestions you have for improvement")}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif font-bold text-3xl text-foreground mb-8">
                  {t("contact.connect")} <span className="gradient-text">{t("contact.connect2")}</span>
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">{item.label}</span>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact Form */}
              <div className="card-hover bg-card p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("Nsame")}</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={t("")}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("Email")}</label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder={t("")}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("Subject")}</label>
                    <Input 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder={t("")}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("Message")}</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t("")}
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="btn-premium w-full text-primary-foreground py-6 text-base font-semibold rounded-full"
                  >
                    <span className="relative z-10">{t("contact.form.send")}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
