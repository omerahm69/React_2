/*import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import FooterSection from "../components/FooterSection";


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
        {/* Hero *
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("contact.label")}</span>
            <h3 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("Welcome to join us")} </h3>
              
              <span className="gradient-text">{t("Have questions about our work or want to get involved? We'd love to hear from youss")}</span>
            
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            {t("The initiative is open to ideas and further initiatives to spread out the goals of the initiative, to the whole Eritrean diaspora. Therefore, we encourage all Eritreans to get on board with us to achieve our goals. The first step is to be with us on our mailing list.Get news about the initiative sent to your own box and leave your message by suggestions you have for improvement")}
            </p>
          </div>
        </section>

        {/* Contact Section *}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info *
              <div>
                <h2 className="font-serif font-bold text-3xl text-foreground mb-8">
                  {t("")} <span className="gradient-text">{t("")}</span>
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
              {/* Contact Form *}
              <div className="card-hover bg-card p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("Name")}</label>
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
                    <span className="relative z-10">{t("Send")}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection/>
    </div>
  );
};

export default Contact;*/


import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FooterSection from "../components/FooterSection";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.success.messageSent"), description: "" });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: t("contact.infoSection.addressLabel"), value: "Massawa Old Town, Eritrea" },
    { icon: Mail, label: t("contact.infoSection.emailLabel"), value: "info@urbanheritage.org" },
    { icon: Phone, label: t("contact.infoSection.phoneLabel"), value: "+291 1 123 456" },
    { icon: Clock, label: t("contact.infoSection.hoursLabel"), value: t("contact.infoSection.hoursValue") },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24s ">
        {/* Hero Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center lg:text-left">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("contact.title")}</span>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6 leading-tight">{t("contact.title")}</h1>

            <p className="text-xl sm:text-2xl font-semibold gradient-text mb-6">{t("contact.subtitle")}</p>

            <p className="max-w-3xl mx-auto lg:mx-0 text-muted-foreground text-base sm:text-lg leading-relaxed">{t("mail.desc1")}</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Contact Info */}
              <div>
                <h2 className="font-serif font-bold text-3xl text-foreground mb-8">{t("contact.infoSection.title")}</h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="text-muted-foreground text-sm">{item.label}</span>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("contact.form.nameLabel")}</label>
                      <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder={t("contact.form.messagePlaceholder")} required className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{t("contact.form.emailLabel")}</label>
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder={t("contact.form.messagePlaceholder")} required className="bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("contact.form.subjectLabel")}</label>
                    <Input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder={t("contact.form.messagePlaceholder")} required className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("contact.form.messageLabel")}</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder={t("contact.form.messagePlaceholder")} rows={5} required className="bg-background resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="btn-premium w-full text-primary-foreground py-6 text-base font-semibold rounded-full hover:bg-primary/90 transition-colors duration-200">
                    <span className="relative z-10">{t("contact.form.submitButton")}</span>
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <FooterSection/>
    </div>
  );
};

export default Contact;




