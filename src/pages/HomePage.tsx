import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="PREMIUM AUTOMOTIVE CARE"
      title="Unrivaled Perfection for Your Vehicle."
      description="At Miracle Auto Detailing, we combine advanced ceramic technology with obsessive craftsmanship to restore your car's true luster. Experience a showroom shine that lasts."
      primaryButton={{
        text: "Book Your Detail",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Portfolio",
        href: "#portfolio",
      }}
      imageSrc="https://images.pexels.com/photos/6577973/pexels-photo-6577973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="OUR MISSION"
      quote="Our mission is simple: to treat every vehicle as if it were a masterpiece in a gallery. Precision, passion, and perfection are in every detail."
      author="Mark Sterling"
      role="Founder, Master Detailer"
      imageSrc="https://images.pexels.com/photos/35149474/pexels-photo-35149474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCards
      tag="SERVICES"
      title="Comprehensive Protection & Polish"
      description="Tailored packages designed to preserve and enhance your vehicle's value inside and out."
      items={[
        {
          title: "Ceramic Coating",
          description: "High-durability nano-coating for permanent exterior shine.",
          imageSrc: "https://images.pexels.com/photos/1483156/pexels-photo-1483156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Interior Deep Detail",
          description: "Meticulous deep-cleaning of upholstery and surfaces.",
          imageSrc: "https://images.pexels.com/photos/37809562/pexels-photo-37809562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Precision Exterior Wash",
          description: "Multi-stage wash process for swirl-free paint safety.",
          imageSrc: "https://images.pexels.com/photos/15469368/pexels-photo-15469368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="SHOWCASE"
      title="Reflecting Excellence"
      description="See the transformation of vehicles we’ve meticulously restored."
      items={[
        {
          title: "Paint Correction",
          description: "Restoring deep gloss levels.",
          imageSrc: "https://images.pexels.com/photos/32474952/pexels-photo-32474952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Interior Restoration",
          description: "Like-new interior feel.",
          imageSrc: "https://images.pexels.com/photos/16018981/pexels-photo-16018981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Wheel Cleaning",
          description: "Brake dust removal perfection.",
          imageSrc: "https://images.pexels.com/photos/29504457/pexels-photo-29504457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Ceramic Finish",
          description: "Long-lasting protection.",
          imageSrc: "https://images.pexels.com/photos/6872602/pexels-photo-6872602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Headlight Restoration",
          description: "Crystal clarity recovered.",
          imageSrc: "https://images.pexels.com/photos/16495991/pexels-photo-16495991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Engine Bay Detail",
          description: "Deep cleans and dressings.",
          imageSrc: "https://images.pexels.com/photos/6873073/pexels-photo-6873073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Chrome Polishing",
          description: "Mirror finish on chrome.",
          imageSrc: "https://images.pexels.com/photos/9667828/pexels-photo-9667828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="CLIENT FEEDBACK"
      title="Words From Our Clients"
      description="Trusted by car enthusiasts throughout the city."
      testimonials={[
        {
          name: "James L.",
          role: "Collector",
          quote: "The best detailing service in the city. My Porsche has never looked better.",
          imageSrc: "https://images.pexels.com/photos/7144201/pexels-photo-7144201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena M.",
          role: "Luxury Owner",
          quote: "Exceeded my expectations. The interior feels like the day I bought it.",
          imageSrc: "https://images.pexels.com/photos/30004483/pexels-photo-30004483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David W.",
          role: "Daily Driver",
          quote: "Professional, punctual, and impeccable results every single time.",
          imageSrc: "https://images.pexels.com/photos/30496625/pexels-photo-30496625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Sarah P.",
          role: "Sports Car Enthusiast",
          quote: "The paint correction work is simply mind-blowing. Professional.",
          imageSrc: "https://images.pexels.com/photos/5334146/pexels-photo-5334146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Kevin B.",
          role: "Executive",
          quote: "Top-tier results from a team that actually cares about quality.",
          imageSrc: "https://images.pexels.com/photos/4895414/pexels-photo-4895414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="BY THE NUMBERS"
      title="Proven Quality"
      description="Our commitment to excellence speaks for itself."
      metrics={[
        {
          value: "1,200+",
          description: "Vehicles Detailed",
        },
        {
          value: "500+",
          description: "Ceramic Coatings Applied",
        },
        {
          value: "99.9%",
          description: "Client Satisfaction",
        },
        {
          value: "15+",
          description: "Years of Experience",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="FAQ"
      title="Your Detailing Questions"
      description="Common questions regarding our process and services."
      items={[
        {
          question: "How long does ceramic coating last?",
          answer: "Depending on the package, our ceramic coatings provide protection for 2 to 5 years.",
        },
        {
          question: "Do you offer mobile detailing?",
          answer: "Yes, we have a mobile unit that provides premium detailing at your location.",
        },
        {
          question: "Can I leave my car overnight?",
          answer: "Absolutely, we have a secure, climate-controlled facility for overnight services.",
        },
        {
          question: "What is the turnaround time?",
          answer: "Typical detailing takes 4-8 hours depending on the chosen service level.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="GET STARTED"
      text="Ready to experience the miracle your car deserves? Schedule your appointment today."
      primaryButton={{
        text: "Book Detail",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Call Us Now",
        href: "tel:5550123",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
