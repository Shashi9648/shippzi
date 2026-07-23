import { Logo } from "./Logo";
import { Linkedin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const cols = [
  {
    title: "Products",
    links: ["Last Mile Delivery", "Fleet Management", "Hyperlocal Delivery", "Delivery APIs"],
  },
  {
    title: "Solutions",
    links: ["Grocery", "Pharmacy", "Restaurants", "E-commerce", "Enterprise"],
  },
  {
    title: "Industries",
    links: ["Courier", "Retail", "Quick Commerce", "More Industries"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Blog", "API Docs", "Help Center", "Whitepapers"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Leadership", "Media Kit", "Contact Us"],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm text-primary-foreground/70">
              AI-Powered Logistics Platform for a Faster World.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-primary-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:flex md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold">Subscribe to our newsletter</div>
            <div className="text-xs text-primary-foreground/70">
              Get the latest updates on features and innovations.
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex w-full max-w-md gap-2 md:mt-0"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <button className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 md:flex-row">
          <div>© 2026 Shippzi Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {[Linkedin, Facebook, Twitter, Youtube, Instagram].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 transition-all hover:scale-110 hover:bg-primary-foreground/10"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
