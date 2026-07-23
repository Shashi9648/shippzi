import { motion } from "motion/react";
import { useState } from "react";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const brands = ["more RETAIL", "DMart", "Apollo", "Swiggy", "Zepto", "bigbasket"];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Demo request sent!", {
        description: "Our team will reach out to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft md:p-10"
          >
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Contact / Book Demo
            </div>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Let's Transform
              <br />
              <span className="text-gradient">Your Logistics</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Book a free demo and see how Shippzi can scale your delivery operations.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { l: "Work Email", p: "Enter your work email", type: "email" },
                  { l: "Phone Number", p: "Enter your phone number", type: "tel" },
                ].map((f) => (
                  <div key={f.l}>
                    <label className="text-xs font-semibold text-foreground">{f.l}</label>
                    <input
                      required
                      type={f.type}
                      placeholder={f.p}
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground">Company Name</label>
                <input
                  required
                  placeholder="Enter your company name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground">
                  What are you looking for?
                </label>
                <select
                  required
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Last Mile Delivery</option>
                  <option>Hyperlocal Delivery</option>
                  <option>Fleet Management</option>
                  <option>Enterprise Logistics</option>
                  <option>API Integration</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-70"
              >
                {loading ? "Sending..." : "Book Free Demo"}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Call Us
                  </div>
                  <div className="text-xs font-medium text-foreground">+91 1800 1020 134</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="text-xs font-medium text-foreground">Chat with us</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Email Us
                  </div>
                  <div className="text-xs font-medium text-foreground">hello@shippzi.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-border/60 shadow-soft">
              <div className="relative h-full min-h-[380px] w-full">
                <iframe
                  title="Shippzi HQ — Hitech City, Hyderabad"
                  src="https://maps.google.com/maps?q=17.4460,78.3880&t=k&hl=en&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 [filter:contrast(1.05)_saturate(1.15)]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
                <motion.a
                  href="https://www.openstreetmap.org/?mlat=17.4460&mlon=78.3880#map=16/17.4460/78.3880"
                  target="_blank"
                  rel="noreferrer"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/40" />
                    <div className="absolute -inset-2 animate-pulse-ring rounded-full bg-primary/20" style={{ animationDelay: "0.6s" }} />
                    {/* <MapPin className="relative h-11 w-11 text-primary drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]" fill="currentColor" /> */}
                  </div>
                </motion.a>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 p-4 shadow-elegant backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Shippzi Technologies Pvt. Ltd.
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        4th Floor, Plot No. 76, Hitech City,
                        <br />
                        Madhapur, Hyderabad — 500081, Telangana, India.
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=17.4460,78.3880"
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground shadow-elegant transition hover:brightness-110"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-dark p-6 text-primary-foreground shadow-elegant">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Trusted by 300+ Businesses
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {brands.map((b) => (
                  <div
                    key={b}
                    className="text-center text-sm font-bold text-primary-foreground/80 transition hover:text-primary-foreground"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
