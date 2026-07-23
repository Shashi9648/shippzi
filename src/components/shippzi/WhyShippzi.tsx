import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
import {
  MapPin,
  Sparkles,
  Route,
  CheckCircle2,
  BarChart3,
  UserCheck,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const features = [
  { icon: MapPin, title: "Live Tracking", desc: "Real-time tracking for orders and riders." },
  { icon: Sparkles, title: "AI Dispatch", desc: "Smart order assignment to the best-fit rider." },
  { icon: Route, title: "Route Optimization", desc: "AI routes for faster deliveries and lower cost." },
  { icon: CheckCircle2, title: "Proof of Delivery", desc: "Digital POD with image, signature and OTP." },
  { icon: BarChart3, title: "Smart Analytics", desc: "Actionable insights and performance dashboards." },
  { icon: UserCheck, title: "Auto Assignment", desc: "Automatically assign orders based on rules." },
  { icon: MessageCircle, title: "WhatsApp Alerts", desc: "Instant updates to customers via WhatsApp." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Multiple payment options and COD management." },
];

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    decimals ? v.toFixed(decimals) + suffix : Math.round(v).toString() + suffix,
  );
  useEffect(() => {
    const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [to, mv]);
  return <motion.span>{rounded}</motion.span>;
}

const kpis = [
  { value: 99.2, suffix: "%", decimals: 1, label: "On-Time Delivery" },
  { value: 50, suffix: "%", label: "Faster Dispatch" },
  { value: 30, suffix: "%", label: "Lower Delivery Cost" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export function WhyShippzi() {
  return (
    <section id="why-shippzi" className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Why Shippzi
          </div>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Why Businesses Love Shippzi
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technology that delivers performance, reliability and growth.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform group-hover:scale-x-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-base font-semibold text-foreground">{f.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-dark p-8 text-primary-foreground shadow-elegant"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="text-center">
                <div className="text-4xl font-extrabold tracking-tight">
                  <Counter to={k.value} suffix={k.suffix} decimals={k.decimals ?? 0} />
                </div>
                <div className="mt-1 text-sm text-primary-foreground/70">{k.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
