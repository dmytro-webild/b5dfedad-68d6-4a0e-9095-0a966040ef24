import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#portfolio" },
    { name: "Google Reviews", href: "#testimonials" },
    { name: "Highlights", href: "#metrics" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
          logo="MIRACLE AUTO DETAILING"
          ctaButton={{
            text: "WhatsApp 012-493 6447",
            href: "https://wa.me/60124936447",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
          brand="MIRACLE AUTO DETAILING"
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Showcase Portfolio", href: "#portfolio" },
                { label: "Google Reviews (5.0 ★)", href: "#testimonials" },
                { label: "Contact & Location", href: "#contact" },
              ],
            },
            {
              title: "Bukit Mertajam Studio",
              items: [
                { label: "Lot 861, Permatang Pasir, Kampung Kota, 14000 Bukit Mertajam, Penang", href: "https://maps.google.com/?q=Lot+861,+Permatang+Pasir,+Kampung+Kota,+14000+Bukit+Mertajam,+Penang" },
                { label: "Phone: 012-493 6447", href: "tel:0124936447" },
                { label: "Hours: 10:00 AM – 10:00 PM Daily", href: "#contact" },
                { label: "Plus Code: CCGQ+6M Bukit Mertajam", href: "#contact" },
              ],
            },
          ]}
          copyright="© 2026 Miracle Auto Detailing. All rights reserved. Lot 861, Permatang Pasir, 14000 Bukit Mertajam, Penang."
          links={[
            { label: "WhatsApp: 012-493 6447", href: "https://wa.me/60124936447" },
            { label: "Google Maps Location", href: "https://maps.google.com/?q=Lot+861,+Permatang+Pasir,+Kampung+Kota,+14000+Bukit+Mertajam,+Penang" },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
