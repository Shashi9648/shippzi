import { motion } from "motion/react";
import { ShoppingBasket, Pill, UtensilsCrossed, ShoppingCart, Package, Store, ArrowRight } from "lucide-react";
import grocery from "@/assets/ind-grocery.jpg";
import pharmacy from "@/assets/ind-pharmacy.jpg";
import restaurant from "@/assets/ind-restaurant.jpg";
import ecommerce from "@/assets/ind-ecommerce.jpg";
import courier from "@/assets/ind-courier.jpg";
import retail from "@/assets/ind-retail.jpg";

const items = [
  { title: "Grocery", img: grocery, icon: ShoppingBasket },
  { title: "Pharmacy", img: pharmacy, icon: Pill },
  { title: "Restaurants", img: restaurant, icon: UtensilsCrossed },
  { title: "E-commerce", img: ecommerce, icon: ShoppingCart },
  { title: "Courier", img: courier, icon: Package },
  { title: "Retail", img: retail, icon: Store },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Industries
          </div>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Built for Every Industry
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tailored logistics solutions for your unique business needs.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -8 }}
                  className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-background/90 text-primary shadow-soft backdrop-blur"
                >
                  <it.icon className="h-5 w-5" />
                </motion.div>
              </div>
              <div className="flex items-center justify-between bg-card p-4">
                <div className="text-base font-semibold text-foreground">{it.title}</div>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
          >
            Explore All Industries
          </motion.button>
        </div>
      </div>
    </section>
  );
}
