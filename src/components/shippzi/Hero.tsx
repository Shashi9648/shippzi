import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Play, ArrowRight, ClipboardList, Truck, PackageCheck, Package } from "lucide-react";
import heroImg from "@/assets/hero-delivery.jpg";

const brands = [
  "more RETAIL",
  "DMart",
  "Apollo",
  "Swiggy",
  "Zepto",
  "bigbasket",
  "KPN Fresh",
  "Vijetha",
  "Heritage",
];

function useLiveCounter(start: number, minStep: number, maxStep: number, intervalMs: number) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep);
    }, intervalMs);
    return () => clearInterval(id);
  }, [minStep, maxStep, intervalMs]);
  return value;
}

function useLiveFluctuate(base: number, variance: number, intervalMs: number) {
  const [value, setValue] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setValue(base + Math.floor(Math.random() * (variance * 2 + 1)) - variance);
    }, intervalMs);
    return () => clearInterval(id);
  }, [base, variance, intervalMs]);
  return value;
}

export function Hero() {
  const assignedToday = useLiveCounter(1284, 1, 3, 20000);
  const liveToday = useLiveFluctuate(342, 12, 20000);
  const overallDelivered = useLiveCounter(2603842, 1, 4, 20000);
  const liveStats = [
    {
      icon: ClipboardList,
      value: assignedToday.toLocaleString(),
      label: "Orders Assigned Today",
      dot: true,
    },
    { icon: Truck, value: liveToday.toLocaleString(), label: "Orders Live Now", dot: true },
    { icon: PackageCheck, value: overallDelivered.toLocaleString(), label: "Overall Delivered", dot: true },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary-glow/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Deliver Anything.
            <br />
            <span className="text-gradient">Anywhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            AI-powered last-mile delivery platform for Enterprises, Retail, Grocery, Pharmacy,
            Restaurants and Hyperlocal Businesses.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-background"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch Video
            </motion.button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {liveStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-border/70 bg-card/80 p-3 shadow-soft backdrop-blur"
              >
                <span className="absolute right-3 top-3 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <motion.div
                      key={s.value}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-base font-bold text-foreground tabular-nums"
                    >
                      {s.value}
                    </motion.div>
                    <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant"
          >
            <img
              src={heroImg}
              alt="Shippzi delivery ecosystem"
              width={1400}
              height={1100}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 top-8 hidden rounded-2xl border border-border/60 bg-card/95 p-3 shadow-elegant backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <span className="absolute inset-0 animate-pulse-ring rounded-xl bg-primary/40" />
                <Package className="relative h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Order #A-8241</div>
                <div className="text-[10px] text-muted-foreground">Out for delivery · 4 min</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 bottom-10 hidden rounded-2xl border border-border/60 bg-card/95 p-3 shadow-elegant backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-primary" />
              <div>
                <div className="text-xs font-semibold text-foreground">Rider assigned</div>
                <div className="text-[10px] text-muted-foreground">Ravi K · 2.1 km away</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-4 md:px-6">
        <div className="text-center text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
          Trusted By
        </div>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="whitespace-nowrap text-xl font-bold text-muted-foreground/70 grayscale transition hover:text-foreground hover:grayscale-0"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
