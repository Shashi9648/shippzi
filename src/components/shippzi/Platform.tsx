import type React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  Bike,
  Store,
  Shield,
  MapPin,
  Package,
  Clock,
  Wallet,
  Navigation,
  Battery,
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const modules = [
  { icon: Smartphone, title: "Customer App", desc: "Easy booking, live tracking and real-time updates" },
  { icon: Bike, title: "Rider App", desc: "Smart navigation, earnings and availability control" },
  { icon: Store, title: "Vendor Portal", desc: "Order management, reports and analytics" },
  { icon: Shield, title: "Admin Console", desc: "Complete control, live tracking and fleet monitoring" },
];

export function Platform() {
  const [active, setActive] = useState(0);
  const current = modules[active];
  const Icon = current.icon;

  return (
    <section id="products" className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Platform Overview
          </div>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            One Platform. Complete Control.
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end visibility and intelligent automation for your entire delivery ecosystem.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {modules.map((m, i) => (
              <motion.button
                key={m.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                  active === i
                    ? "border-primary/40 bg-card shadow-elegant"
                    : "border-border/60 bg-card/60 hover:bg-card"
                }`}
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all ${
                    active === i ? "bg-gradient-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  <m.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-foreground">{m.title}</div>
                  <div className="text-sm text-muted-foreground">{m.desc}</div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-elegant"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-foreground">{current.title}</div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                <div className="h-2 w-2 rounded-full bg-amber-400" />
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {active === 0 && <CustomerPreview />}
                {active === 1 && <RiderPreview />}
                {active === 2 && <VendorPreview />}
                {active === 3 && <AdminPreview />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LiveMap({
  variant,
  className = "",
}: {
  variant: "customer" | "admin";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 400 240" className={`h-full w-full ${className}`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAF3E4" />
          <stop offset="100%" stopColor="#D9E8D2" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BEE1F0" />
          <stop offset="100%" stopColor="#9CCFE3" />
        </linearGradient>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.15 143)" />
          <stop offset="100%" stopColor="oklch(0.68 0.17 143)" />
        </linearGradient>
        <pattern id="park" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#CFE3B8" />
          <circle cx="3" cy="3" r="1" fill="#A9CB88" />
          <circle cx="7" cy="7" r="1" fill="#A9CB88" />
        </pattern>
      </defs>

      <rect width="400" height="240" fill="url(#mapBg)" />

      <path
        d="M0 180 Q 60 160 120 175 T 260 170 T 400 185 L 400 240 L 0 240 Z"
        fill="url(#water)"
      />
      <g opacity="0.35" stroke="#7FBFDA" fill="none" strokeWidth="0.7">
        <motion.path
          d="M20 200 Q 60 195 100 200 T 180 200"
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M180 215 Q 220 210 260 215 T 340 215"
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      <rect x="240" y="30" width="90" height="60" rx="6" fill="url(#park)" opacity="0.9" />

      <g fill="#F5F5EE" stroke="#DDE2D3" strokeWidth="0.6">
        <rect x="10" y="20" width="70" height="50" rx="3" />
        <rect x="90" y="10" width="60" height="70" rx="3" />
        <rect x="160" y="30" width="70" height="50" rx="3" />
        <rect x="10" y="90" width="60" height="60" rx="3" />
        <rect x="80" y="90" width="80" height="45" rx="3" />
        <rect x="170" y="95" width="55" height="55" rx="3" />
        <rect x="340" y="20" width="55" height="60" rx="3" />
        <rect x="340" y="95" width="55" height="55" rx="3" />
        <rect x="235" y="105" width="95" height="45" rx="3" />
      </g>

      <g fill="#E1E7D6" opacity="0.9">
        <rect x="20" y="30" width="14" height="16" />
        <rect x="40" y="26" width="16" height="20" />
        <rect x="60" y="34" width="14" height="12" />
        <rect x="100" y="20" width="20" height="26" />
        <rect x="125" y="30" width="14" height="18" />
        <rect x="180" y="40" width="18" height="18" />
        <rect x="205" y="36" width="16" height="22" />
        <rect x="345" y="30" width="14" height="20" />
        <rect x="365" y="36" width="14" height="14" />
      </g>

      <g>
        <g stroke="#C9CFC0" strokeWidth="12" strokeLinecap="round" fill="none">
          <path d="M0 85 H 400" />
          <path d="M0 160 H 400" />
          <path d="M85 0 V 240" />
          <path d="M230 0 V 240" />
          <path d="M330 0 V 240" />
          <path d="M0 40 Q 100 40 160 85 T 400 130" />
        </g>
        <g stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none">
          <path d="M0 85 H 400" />
          <path d="M0 160 H 400" />
          <path d="M85 0 V 240" />
          <path d="M230 0 V 240" />
          <path d="M330 0 V 240" />
          <path d="M0 40 Q 100 40 160 85 T 400 130" />
        </g>
        <path d="M0 85 H 400" stroke="#E9ECDF" strokeWidth="1.2" strokeDasharray="6 8" fill="none" />
        <path d="M0 160 H 400" stroke="#E9ECDF" strokeWidth="1.2" strokeDasharray="6 8" fill="none" />
      </g>

      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`t1-${i}`}
            r="1.6"
            fill="#94A187"
            initial={{ cx: -10, cy: 85 }}
            animate={{ cx: 410 }}
            transition={{ duration: 8, delay: i * 1.4, repeat: Infinity, ease: "linear" }}
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`t2-${i}`}
            r="1.6"
            fill="#94A187"
            initial={{ cx: 410, cy: 160 }}
            animate={{ cx: -10 }}
            transition={{ duration: 9, delay: i * 1.8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </g>

      {variant === "customer" && <CustomerMapLayer />}
      {variant === "admin" && <AdminMapLayer />}
    </svg>
  );
}

function CustomerMapLayer() {
  const path = "M40 200 C 90 170, 100 120, 160 110 S 260 90, 300 60 L 360 40";
  return (
    <g>
      <path d={path} stroke="#0F1E38" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.15" />
      <path d={path} stroke="url(#routeGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path
        d={path}
        stroke="#FFFFFF"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="4 8"
        className="animate-route"
      />

      <g transform="translate(40 200)">
        <circle r="10" fill="oklch(0.55 0.15 143 / 0.25)" className="animate-pulse-ring" style={{ transformOrigin: "0 0" }} />
        <circle r="5" fill="oklch(0.55 0.15 143)" stroke="#fff" strokeWidth="2" />
      </g>

      <g transform="translate(360 40)">
        <circle r="10" fill="#0F1E38" opacity="0.15" />
        <circle r="6" fill="#0F1E38" stroke="#fff" strokeWidth="2" />
        <rect x="6" y="-14" width="10" height="7" fill="#0F1E38" />
        <line x1="6" y1="-14" x2="6" y2="0" stroke="#0F1E38" strokeWidth="1.5" />
      </g>

      <motion.g
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        style={{ offsetPath: `path("${path}")`, offsetRotate: "auto" } as unknown as React.CSSProperties}
      >
        <circle r="12" fill="oklch(0.55 0.15 143 / 0.25)" className="animate-pulse-ring" />
        <circle r="9" fill="#fff" stroke="oklch(0.55 0.15 143)" strokeWidth="2.5" />
        <g transform="translate(-5 -5) scale(0.55)">
          <path
            d="M4 15a3 3 0 106 0 3 3 0 00-6 0zm10 0a3 3 0 106 0 3 3 0 00-6 0zM6 12l3-6h4l3 4h2"
            fill="none"
            stroke="oklch(0.55 0.15 143)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </motion.g>

      {[
        [120, 55],
        [270, 130],
        [200, 200],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <motion.circle
            r="7"
            fill="oklch(0.55 0.15 143 / 0.2)"
            animate={{ r: [5, 10, 5], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
          />
          <circle r="3" fill="#fff" stroke="oklch(0.55 0.15 143)" strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
}

function AdminMapLayer() {
  const riders: Array<{ id: string; path: string; delay: number }> = [
    { id: "R-12", path: "M20 60 C 90 40, 160 80, 230 55 S 360 40, 390 30", delay: 0 },
    { id: "R-08", path: "M30 200 C 100 180, 170 150, 240 170 S 340 200, 380 180", delay: 1.2 },
    { id: "R-21", path: "M60 20 C 80 80, 140 110, 180 130 S 260 200, 300 220", delay: 0.6 },
    { id: "R-15", path: "M380 60 C 320 90, 260 100, 210 140 S 120 200, 60 220", delay: 1.8 },
  ];
  return (
    <g>
      {riders.map((r) => (
        <path
          key={`p-${r.id}`}
          d={r.path}
          stroke="oklch(0.55 0.15 143)"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeDasharray="3 5"
          fill="none"
        />
      ))}

      {[
        [70, 55, "R-33"],
        [155, 175, "R-44"],
        [305, 90, "R-57"],
        [355, 195, "R-61"],
      ].map(([x, y, id], i) => (
        <g key={id as string} transform={`translate(${x} ${y})`}>
          <motion.circle
            r="10"
            fill="oklch(0.55 0.15 143 / 0.22)"
            animate={{ r: [6, 14, 6], opacity: [0.5, 0.1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
          />
          <circle r="4.5" fill="#fff" stroke="oklch(0.55 0.15 143)" strokeWidth="2" />
          <text y="-12" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0F1E38">
            {id as string}
          </text>
        </g>
      ))}

      {riders.map((r) => (
        <motion.g
          key={r.id}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 9, delay: r.delay, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: `path("${r.path}")`, offsetRotate: "auto" } as unknown as React.CSSProperties}
        >
          <circle r="10" fill="oklch(0.55 0.15 143 / 0.25)" className="animate-pulse-ring" />
          <circle r="5" fill="oklch(0.55 0.15 143)" stroke="#fff" strokeWidth="2" />
          <text y="-10" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#0F1E38">
            {r.id}
          </text>
        </motion.g>
      ))}

      <g opacity="0.55">
        <motion.circle
          cx="260"
          cy="140"
          r="30"
          fill="oklch(0.76 0.15 70)"
          animate={{ opacity: [0.15, 0.4, 0.15], r: [26, 34, 26] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.circle
          cx="110"
          cy="115"
          r="26"
          fill="oklch(0.55 0.15 143)"
          animate={{ opacity: [0.1, 0.3, 0.1], r: [22, 30, 22] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
        />
      </g>
    </g>
  );
}

function CustomerPreview() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Track your order</div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
            On the way
          </span>
        </div>

        <div className="relative mt-3 h-44 overflow-hidden rounded-lg border border-border/60 bg-card">
          <LiveMap variant="customer" />

          <motion.div
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 shadow-elegant backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] font-bold text-foreground">Arriving in 12 min</span>
          </motion.div>

          <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-card/95 p-2.5 shadow-elegant backdrop-blur">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, -8, 0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"
              >
                <Navigation className="h-4 w-4" />
              </motion.div>
              <div>
                <div className="text-[10px] font-semibold text-foreground">In 250 m, turn right onto Gachibowli Rd</div>
                <div className="text-[9px] text-muted-foreground">Then arrive at destination · 2.4 km</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            { l: "ETA", v: "12 min", i: Clock },
            { l: "Rider", v: "Rahul", i: Bike },
            { l: "Distance", v: "2.4 km", i: MapPin },
          ].map((k) => (
            <div key={k.l} className="rounded-lg bg-card p-2">
              <k.i className="mx-auto h-3 w-3 text-primary" />
              <div className="mt-1 text-[10px] font-bold text-foreground">{k.v}</div>
              <div className="text-[9px] text-muted-foreground">{k.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { l: "Recent Order", v: "#SHP-2841", d: "Delivered" },
          { l: "Rating", v: "4.9 ★", d: "Great service" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl bg-surface-soft p-3">
            <div className="text-[10px] font-medium text-muted-foreground">{k.l}</div>
            <div className="mt-1 text-sm font-bold text-foreground">{k.v}</div>
            <div className="text-[10px] text-emerald-600">{k.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiderPreview() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-gradient-to-br from-primary/15 to-primary-glow/10 p-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Active Delivery</div>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Online
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
            <Navigation className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-foreground">Turn right in 200m</div>
            <div className="text-[10px] text-muted-foreground">Onto MG Road, then arrive</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Today", v: "₹1,240", i: Wallet },
          { l: "Trips", v: "18", i: Package },
          { l: "Battery", v: "82%", i: Battery },
        ].map((k) => (
          <div key={k.l} className="rounded-xl bg-surface-soft p-3">
            <k.i className="h-3.5 w-3.5 text-primary" />
            <div className="mt-1 text-sm font-bold text-foreground">{k.v}</div>
            <div className="text-[10px] text-muted-foreground">{k.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="text-[10px] font-semibold text-muted-foreground">Weekly earnings</div>
        <div className="mt-2 flex h-16 items-end gap-1.5">
          {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.06 }}
              className="flex-1 rounded-t bg-gradient-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VendorPreview() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "New Orders", v: "24", d: "+6", i: ShoppingBag },
          { l: "Revenue", v: "₹18.4k", d: "+12%", i: DollarSign },
          { l: "Avg. Prep", v: "8 min", d: "-1m", i: Clock },
        ].map((k) => (
          <div key={k.l} className="rounded-xl bg-surface-soft p-3">
            <k.i className="h-3.5 w-3.5 text-primary" />
            <div className="mt-1 text-sm font-bold text-foreground">{k.v}</div>
            <div className="text-[9px] font-semibold text-emerald-600">{k.d}</div>
            <div className="text-[10px] text-muted-foreground">{k.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Live Order Queue</div>
          <span className="text-[10px] text-muted-foreground">Auto-refresh</span>
        </div>
        <div className="space-y-1.5">
          {[
            { id: "#2841", item: "2× Butter Chicken", s: "Preparing", c: "bg-amber-100 text-amber-700" },
            { id: "#2842", item: "1× Pizza Combo", s: "Ready", c: "bg-emerald-100 text-emerald-700" },
            { id: "#2843", item: "3× Biryani", s: "New", c: "bg-primary/10 text-primary" },
          ].map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between rounded-lg bg-card px-2.5 py-2"
            >
              <div>
                <div className="text-[11px] font-bold text-foreground">{o.id}</div>
                <div className="text-[10px] text-muted-foreground">{o.item}</div>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${o.c}`}>{o.s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminPreview() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: "Orders", v: "26,038", i: Package },
          { l: "On-Time", v: "99.2%", i: CheckCircle2 },
          { l: "Riders", v: "300", i: Users },
          { l: "Revenue", v: "₹2.4L", i: TrendingUp },
        ].map((k) => (
          <div key={k.l} className="rounded-xl bg-surface-soft p-2.5">
            <k.i className="h-3 w-3 text-primary" />
            <div className="mt-1 text-xs font-bold text-foreground">{k.v}</div>
            <div className="text-[9px] text-muted-foreground">{k.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Fleet Live Map</div>
          <span className="flex items-center gap-1 text-[9px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Live · 300 riders
          </span>
        </div>
        <div className="relative h-44 overflow-hidden rounded-lg border border-border/60 bg-card">
          <LiveMap variant="admin" />
          <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-card/95 px-2.5 py-1 text-[9px] font-semibold text-foreground shadow-elegant backdrop-blur">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Active
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Surge
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-surface-soft p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <AlertTriangle className="h-3 w-3 text-amber-500" />
          <div className="text-[11px] font-semibold text-foreground">2 alerts require action</div>
        </div>
        <div className="text-[10px] text-muted-foreground">Rider #R-208 offline · Zone-C surge detected</div>
      </div>
    </div>
  );
}
