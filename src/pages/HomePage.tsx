import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import LocationContactSection from '@/components/sections/contact/LocationContactSection';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroSplit
            tag="★ 5.0 RATED ON GOOGLE (12 REVIEWS) • BUKIT MERTAJAM, PENANG"
            title="Spotless Detailing That Makes Your Ride Look Brand New."
            description="Bukit Mertajam's premier auto detailing studio at Lot 861, Permatang Pasir. Exceptional workmanship, meticulous interior deep cleaning, and long-lasting ceramic protection for car owners who demand perfection."
            primaryButton={{
              text: "WhatsApp Us (012-493 6447)",
              href: "https://wa.me/60124936447",
            }}
            secondaryButton={{
              text: "View Location & Hours",
              href: "#contact",
            }}
            imageSrc="https://images.pexels.com/photos/6577973/pexels-photo-6577973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="OUR WORKMANSHIP PROMISE"
            quote="Got my car detailed here and it looks brand new again. Everything’s spotless inside and out, smells great too. Totally worth it!"
            author="5.0-Star Rated Google Reviewer"
            role="Miracle Auto Detailing • Bukit Mertajam"
            imageSrc="https://images.pexels.com/photos/35149474/pexels-photo-35149474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="services" data-section="services">
        <SectionErrorBoundary name="services">
          <FeaturesMediaCards
            tag="OUR SERVICES"
            title="Master Workmanship & Spotless Cleaning"
            description="Comprehensive detailing solutions designed to restore showroom gloss, eliminate tough stains, and protect your vehicle."
            items={[
              {
                title: "Full Exterior Detailing & Paint Polish",
                description: "Multi-stage gloss correction that removes swirl marks, oxidation, and scratches for a mirror finish.",
                imageSrc: "https://images.pexels.com/photos/1483156/pexels-photo-1483156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Spotless Interior Deep Clean & Sanitization",
                description: "Thorough steam cleaning, upholstery stain extraction, leather treatment, and odour elimination.",
                imageSrc: "https://images.pexels.com/photos/37809562/pexels-photo-37809562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Ceramic Coating Paint Protection",
                description: "Ultra-durable nano ceramic coating that shields paint from UV rays, acid rain, and road grime.",
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
            tag="WORKMANSHIP SHOWCASE"
            title="Real Results That Look Brand New"
            description="Excellence in every detail. Check out the spotless finish on cars brought to our Bukit Mertajam workshop."
            items={[
              {
                title: "Paint Correction & Gloss Boost",
                description: "Restoring deep reflection and gloss.",
                imageSrc: "https://images.pexels.com/photos/32474952/pexels-photo-32474952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Spotless Interior Cleanliness",
                description: "Like-new interior feel and fresh scent.",
                imageSrc: "https://images.pexels.com/photos/16018981/pexels-photo-16018981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Deep Wheel & Rim Restoration",
                description: "Complete brake dust & grease removal.",
                imageSrc: "https://images.pexels.com/photos/29504457/pexels-photo-29504457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Ceramic Coating Reflection",
                description: "Hydrophobic shield with high-gloss depth.",
                imageSrc: "https://images.pexels.com/photos/6872602/pexels-photo-6872602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Headlight Clarity Renewal",
                description: "Crystal-clear glass & headlight restoration.",
                imageSrc: "https://images.pexels.com/photos/16495991/pexels-photo-16495991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Engine Bay Bay Detail",
                description: "Meticulous deep degreasing and dressing.",
                imageSrc: "https://images.pexels.com/photos/6873073/pexels-photo-6873073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                title: "Chrome & Trim Polish",
                description: "Mirror-finish shine across all trim.",
                imageSrc: "https://images.pexels.com/photos/9667828/pexels-photo-9667828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
            ]}
            textAnimation="fade"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
            tag="5.0 ★ GOOGLE REVIEWS (12 REVIEWS)"
            title="Trusted By Car Owners In Bukit Mertajam"
            description="Our customers consistently highlight our high-quality workmanship, spotless cleanliness, and brand-new results."
            primaryButton={{
              text: "Book Your Slot via WhatsApp",
              href: "https://wa.me/60124936447",
            }}
            secondaryButton={{
              text: "Call 012-493 6447",
              href: "tel:0124936447",
            }}
            testimonials={[
              {
                name: "Lagosta Gamingz",
                role: "Google Reviewer • 5.0 Stars",
                quote: "super satisfied!!!! got my car detailed here last week and it looks brand new again. everything’s spotless inside and out, smells great too. totally worth it!! highly recommended!🫶🏻",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/7144201/pexels-photo-7144201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                name: "Najmi Naim",
                role: "Local Guide • 12 reviews",
                quote: "Recommended for all user cars to come here. Excellent car detailing workmanship!",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/30496625/pexels-photo-30496625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                name: "Jason K.",
                role: "Bukit Mertajam Car Owner",
                quote: "Meticulous workmanship! Brought my SUV for interior deep clean and exterior polish. They made it look brand new. Truly impressive cleanliness.",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/4895414/pexels-photo-4895414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
              {
                name: "Siti Sarah",
                role: "Penang Driver",
                quote: "Top quality car wash & detailing studio in Permatang Pasir. Friendly staff, great price, and spotless interior finish. 10/10 recommended!",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/5334146/pexels-photo-5334146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
            tag="EXCELLENCE IN NUMBERS"
            title="Bukit Mertajam's 5-Star Detailing Studio"
            description="Uncompromising attention to detail with proven feedback from car owners."
            metrics={[
              {
                value: "5.0 ★",
                description: "Google Rating (12 Reviews)",
              },
              {
                value: "4 / 4",
                description: "Top Workmanship Mentions",
              },
              {
                value: "100%",
                description: "Spotless Cleanliness Feedback",
              },
              {
                value: "10am - 10pm",
                description: "Open Daily in Bukit Mertajam",
              },
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSimple
            tag="FREQUENTLY ASKED QUESTIONS"
            title="Everything You Need To Know"
            description="Got questions about our car detailing services in Bukit Mertajam? Here are quick answers."
            items={[
              {
                question: "Where is Miracle Auto Detailing located?",
                answer: "We are located at Lot 861, Permatang Pasir, Kampung Kota, 14000 Bukit Mertajam, Penang. (Google Plus Code: CCGQ+6M Bukit Mertajam, Penang).",
              },
              {
                question: "What are your operating hours?",
                answer: "We are open daily from 10:00 AM to 10:00 PM. You can visit us or book an appointment via WhatsApp at 012-493 6447.",
              },
              {
                question: "Why do customers say their cars look brand new after your service?",
                answer: "Our team takes immense pride in high-level workmanship and spotless cleanliness. We clean every interior corner, restore exterior paint shine, and leave your vehicle smelling fresh and looking immaculate.",
              },
              {
                question: "How long does a full detailing take?",
                answer: "Depending on the package selected, express washing and interior cleaning takes around 1–2 hours, while complete paint correction and ceramic coating take 4–8 hours for thorough perfection.",
              },
              {
                question: "How can I schedule an appointment?",
                answer: "Simply WhatsApp or call us at 012-493 6447 or send us a message through our online booking section on this page!",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <LocationContactSection
            tag="LOCATION & BOOKING"
            title="Visit Miracle Auto Detailing"
            description="Located at Lot 861, Permatang Pasir, Bukit Mertajam. Open daily from 10:00 AM to 10:00 PM. Call or WhatsApp 012-493 6447 to reserve your spot!"
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
