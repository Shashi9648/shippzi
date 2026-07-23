import { motion } from "motion/react";
import { Package, Bike, Truck, Building2, Route, Box, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Package,
    title: "Last Mile Delivery",
    desc: "Reliable last-mile delivery solution for businesses of all sizes.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Bike,
    title: "Hyperlocal Delivery",
    desc: "Lightning-fast deliveries for hyperlocal and on-demand businesses.",
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    desc: "Manage your fleet, riders and operations from a single platform.",
    color: "text-sky-600",
    bg: "bg-sky-500/10",
  },
  {
    icon: Building2,
    title: "Enterprise Logistics",
    desc: "Custom workflows and SLA-driven logistics for large enterprises.",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: Route,
    title: "Route Optimization",
    desc: "AI-powered routing for faster deliveries and lower costs.",
    color: "text-rose-600",
    bg: "bg-rose-500/10",
  },
  {
    icon: Box,
    title: "Parcel Deliveries",
    desc: "Reliable parcel and package delivery across cities with live tracking.",
    color: "text-amber-600",
    bg: "bg-amber-500/10",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Solutions
          </div>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Smart Logistics Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Powering every delivery experience with technology, visibility and reliability.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className={`grid h-14 w-14 place-items-center rounded-2xl ${it.bg} ${it.color}`}
              >
                <it.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
