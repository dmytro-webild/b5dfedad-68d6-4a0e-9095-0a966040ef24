import { useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation, MessageSquare, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

type LocationContactSectionProps = {
  tag: string;
  title: string;
  description: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

export default function LocationContactSection({
  tag,
  title,
  description,
  textAnimation,
}: LocationContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    service: "Full Car Detailing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Miracle Auto Detailing! My name is ${formData.name}. I drive a ${formData.carModel || "car"} and I am interested in ${formData.service}. ${formData.message ? `Note: ${formData.message}` : ""}`;
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/60124936447?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const address = "Lot 861, Permatang Pasir, Kampung Kota, 14000 Bukit Mertajam, Penang";
  const mapUrl = "https://maps.google.com/?q=Lot+861,+Permatang+Pasir,+Kampung+Kota,+14000+Bukit+Mertajam,+Penang";

  return (
    <section id="contact" aria-label="Location and Contact section" className="py-20">
      <div className="w-content-width mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance"
          />
        </div>

        <ScrollReveal variant="fade">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Key Business Details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Google Rating Badge */}
              <div className="p-6 rounded card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full primary-button flex items-center justify-center shrink-0">
                    <Star className="size-6 text-primary-cta-text fill-primary-cta-text" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-2xl font-bold">5.0</span>
                      <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 font-medium">12 Verified Google Reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded card text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="size-4" /> 100% Satisfaction Rated
                </div>
              </div>

              {/* Business Location & Info Card */}
              <div className="p-6 md:p-8 rounded card flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded card text-primary-cta shrink-0 mt-1">
                    <MapPin className="size-6 text-primary-cta" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Our Studio Address</h3>
                    <p className="text-base text-foreground/80 leading-relaxed">{address}</p>
                    <p className="text-xs text-foreground/60 mt-1">Google Plus Code: <span className="font-mono text-foreground/90">CCGQ+6M Bukit Mertajam, Penang</span></p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-5 flex items-start gap-4">
                  <div className="p-3 rounded card shrink-0 mt-1">
                    <Phone className="size-6 text-primary-cta" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Phone & WhatsApp</h3>
                    <a href="tel:0124936447" className="text-lg font-bold text-primary-cta hover:underline">
                      012-493 6447
                    </a>
                    <p className="text-xs text-foreground/60">Fastest response via WhatsApp. Call or message us anytime!</p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-5 flex items-start gap-4">
                  <div className="p-3 rounded card shrink-0 mt-1">
                    <Clock className="size-6 text-primary-cta" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">Operating Hours</h3>
                    <p className="text-base text-foreground/80">
                      Open Daily: <span className="font-semibold text-foreground">10:00 AM – 10:00 PM</span>
                    </p>
                    <p className="text-xs text-foreground/60">Walk-ins welcome & appointments available 7 days a week.</p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="border-t border-border/40 pt-6 flex flex-wrap gap-3">
                  <Button
                    text="WhatsApp 012-493 6447"
                    href="https://wa.me/60124936447"
                    variant="primary"
                  />
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium secondary-button border border-border/60 hover:bg-card/80 transition-colors"
                  >
                    <Navigation className="size-4" /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Booking / Inquiry Form */}
            <div className="lg:col-span-6 p-6 md:p-8 rounded card flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Book Your Detailing Slot</h3>
                <p className="text-sm text-foreground/80">
                  Fill in your details below to schedule your appointment or inquire about our services in Bukit Mertajam.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded card border border-emerald-500/30 bg-emerald-950/20 flex flex-col items-center text-center gap-3 py-10">
                  <CheckCircle2 className="size-12 text-emerald-400" />
                  <h4 className="text-xl font-bold">WhatsApp Opening...</h4>
                  <p className="text-sm text-foreground/80 max-w-md">
                    Thank you! Your details have been prepared. We are opening WhatsApp to finalize your booking with our master detailer.
                  </p>
                  <Button
                    text="Message on WhatsApp Now"
                    href="https://wa.me/60124936447"
                    variant="primary"
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Tan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded card bg-transparent border border-border/50 focus:border-primary-cta focus:outline-none text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="012-XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded card bg-transparent border border-border/50 focus:border-primary-cta focus:outline-none text-base"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="carModel" className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                        Car Make & Model
                      </label>
                      <input
                        id="carModel"
                        type="text"
                        placeholder="e.g. Honda Civic / BMW X5"
                        value={formData.carModel}
                        onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                        className="w-full px-4 py-3 rounded card bg-transparent border border-border/50 focus:border-primary-cta focus:outline-none text-base"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded card bg-card border border-border/50 focus:border-primary-cta focus:outline-none text-base text-foreground"
                    >
                      <option value="Full Car Detailing & Polish">Full Car Detailing & Polish</option>
                      <option value="Spotless Interior Deep Detail">Spotless Interior Deep Detail</option>
                      <option value="Ceramic Coating Protection">Ceramic Coating Protection</option>
                      <option value="Precision Wash & Wheel Care">Precision Wash & Wheel Care</option>
                      <option value="General Inquiry / Custom Request">General Inquiry / Custom Request</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      Additional Notes or Preferred Time
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us what you need or when you'd like to bring your car in..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded card bg-transparent border border-border/50 focus:border-primary-cta focus:outline-none text-base resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded primary-button text-primary-cta-text font-semibold text-base flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                  >
                    <MessageSquare className="size-5" /> Book via WhatsApp (012-493 6447)
                  </button>

                  <p className="text-xs text-center text-foreground/60">
                    Prefer direct calling? Reach us at <a href="tel:0124936447" className="underline font-semibold">012-493 6447</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
