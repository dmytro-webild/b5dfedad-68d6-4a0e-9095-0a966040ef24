import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Portfolio",
    "href": "#portfolio"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="MIRACLE AUTO DETAILING"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
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
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Miracle Auto Detailing. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Facebook",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
