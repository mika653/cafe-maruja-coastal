"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuTabs = [
  { id: "brunch", label: "All-Day Brunch", emoji: "🍳" },
  { id: "drinks", label: "Drinks", emoji: "🍹" },
  { id: "desserts", label: "Cakes & Sweets", emoji: "🍰" },
];

const menuData: Record<string, MenuCategory[]> = {
  brunch: [
    {
      id: "toasts",
      label: "Toasts & Eggs",
      items: [
        {
          name: "Avocado Rose Toast",
          description:
            "Sourdough, smashed avocado, avocado rose, poached egg, cherry tomatoes, radish, seeds",
          price: "₱380",
          image: "/images/food-1.jpg",
          tag: "Bestseller",
        },
        {
          name: "Eggs Benedict Classic",
          description:
            "English muffin, ham, poached eggs, hollandaise sauce, side salad",
          price: "₱350",
        },
        {
          name: "Shakshuka",
          description:
            "Baked eggs in spiced tomato sauce, feta cheese, sourdough toast",
          price: "₱340",
        },
        {
          name: "French Toast",
          description:
            "Brioche, mixed berries, maple syrup, whipped cream, powdered sugar",
          price: "₱320",
        },
      ],
    },
    {
      id: "bowls",
      label: "Buddha Bowls",
      items: [
        {
          name: "Island Buddha Bowl",
          description:
            "Quinoa, roasted sweet potato, chickpeas, avocado, tahini dressing",
          price: "₱360",
          tag: "Vegan",
        },
        {
          name: "Salmon Poke Bowl",
          description:
            "Sushi rice, fresh salmon, mango, edamame, sesame soy dressing",
          price: "₱420",
        },
        {
          name: "Chicken Teriyaki Bowl",
          description:
            "Jasmine rice, grilled chicken, pickled vegetables, teriyaki glaze",
          price: "₱370",
        },
      ],
    },
    {
      id: "mains",
      label: "Nourishing Plates",
      items: [
        {
          name: "Lava Stone Grilled Burger",
          description:
            "Wagyu patty, cheddar, caramelized onion, truffle aioli, brioche bun, fries",
          price: "₱450",
          tag: "Popular",
        },
        {
          name: "Vegan Burger",
          description:
            "Black bean & beet patty, avocado, vegan cheese, sweet potato fries",
          price: "₱380",
          tag: "Vegan",
        },
        {
          name: "Artisan Pizza Margherita",
          description:
            "San Marzano tomatoes, fresh mozzarella, basil, wood-fired crust",
          price: "₱390",
        },
        {
          name: "Grilled Fish Tacos",
          description:
            "Fresh catch, mango salsa, pickled cabbage, chipotle crema, flour tortillas",
          price: "₱380",
        },
      ],
    },
    {
      id: "sandwiches",
      label: "Sandwiches",
      items: [
        {
          name: "Club Sandwich",
          description:
            "Triple-decker, grilled chicken, bacon, egg, lettuce, tomato, fries",
          price: "₱340",
        },
        {
          name: "Grilled Cheese & Tomato Soup",
          description:
            "Sourdough, three-cheese blend, roasted tomato bisque",
          price: "₱300",
        },
      ],
    },
    {
      id: "sides",
      label: "Snacks & Sides",
      items: [
        {
          name: "Truffle Fries",
          description: "Hand-cut fries, truffle oil, parmesan, fresh herbs",
          price: "₱220",
        },
        {
          name: "Nachos Grande",
          description:
            "Tortilla chips, guacamole, salsa, sour cream, jalapeños, melted cheese",
          price: "₱280",
        },
        {
          name: "Caprese Salad",
          description:
            "Heirloom tomatoes, buffalo mozzarella, basil, balsamic reduction",
          price: "₱260",
        },
        {
          name: "Crispy Calamari",
          description: "Lightly battered squid rings, lemon aioli, chili flakes",
          price: "₱250",
        },
      ],
    },
  ],
  drinks: [
    {
      id: "coffee",
      label: "Coffee & Espresso",
      items: [
        {
          name: "Spanish Latte",
          description:
            "Double espresso, condensed milk, fresh milk, hot or iced",
          price: "₱180",
          tag: "Bestseller",
        },
        {
          name: "Coconut Cold Brew",
          description:
            "12-hour cold brew, coconut cream, served in a coconut shell",
          price: "₱200",
        },
        {
          name: "Matcha Latte",
          description: "Ceremonial grade matcha, oat milk, honey",
          price: "₱190",
        },
        {
          name: "Classic Americano",
          description: "Double shot espresso, filtered water",
          price: "₱140",
        },
        {
          name: "Cafe Latte",
          description: "Espresso, steamed milk, light foam",
          price: "₱160",
        },
        {
          name: "Cappuccino",
          description: "Espresso, steamed milk, thick foam, cocoa dusting",
          price: "₱160",
        },
      ],
    },
    {
      id: "alt-latte",
      label: "Coffee Alternative Lattes",
      items: [
        {
          name: "Ube Latte",
          description: "Purple yam latte, oat milk, honey",
          price: "₱190",
          tag: "Local Fave",
        },
        {
          name: "Charcoal Latte",
          description: "Activated charcoal, oat milk, vanilla",
          price: "₱180",
        },
        {
          name: "Turmeric Golden Latte",
          description: "Turmeric, ginger, cinnamon, oat milk, honey",
          price: "₱180",
        },
      ],
    },
    {
      id: "cocktails",
      label: "Tropical Cocktails",
      items: [
        {
          name: "Maruja Sunset",
          description:
            "Rum, mango purée, passion fruit, lime — served in a gold pineapple cup",
          price: "₱280",
          image: "/images/drinks-1.jpg",
          tag: "Signature",
        },
        {
          name: "Coconut Mojito",
          description:
            "White rum, coconut cream, lime, mint, soda — in a coconut shell",
          price: "₱260",
        },
        {
          name: "Blue Lagoon Margarita",
          description: "Tequila, blue curaçao, lime juice, salted rim",
          price: "₱270",
        },
        {
          name: "Espresso Martini",
          description: "Vodka, coffee liqueur, fresh espresso, vanilla syrup",
          price: "₱290",
        },
      ],
    },
    {
      id: "smoothies",
      label: "Smoothies & Fresh Juice",
      items: [
        {
          name: "Dragon Fruit Smoothie Bowl",
          description:
            "Dragon fruit, banana, coconut milk, granola, fresh fruits",
          price: "₱240",
          tag: "Healthy",
        },
        {
          name: "Mango Paradise Shake",
          description: "Fresh Philippine mango, coconut milk, vanilla, ice",
          price: "₱200",
        },
        {
          name: "Green Detox Juice",
          description: "Cucumber, celery, green apple, ginger, lemon",
          price: "₱180",
        },
        {
          name: "Açai Bowl",
          description:
            "Açai, mixed berries, banana, granola, coconut flakes, honey",
          price: "₱260",
        },
      ],
    },
    {
      id: "mocktails",
      label: "Mocktails",
      items: [
        {
          name: "Virgin Piña Colada",
          description: "Pineapple, coconut cream, lime, served frozen",
          price: "₱180",
        },
        {
          name: "Tropical Sunrise",
          description: "Orange juice, grenadine, mango, soda water",
          price: "₱170",
        },
        {
          name: "Cucumber Mint Cooler",
          description: "Fresh cucumber, mint, lime, soda, agave",
          price: "₱160",
        },
      ],
    },
    {
      id: "hot-choc",
      label: "Hot Chocolates",
      items: [
        {
          name: "Classic Hot Chocolate",
          description: "Rich Tablea cacao, steamed milk, marshmallows",
          price: "₱170",
        },
        {
          name: "White Chocolate Mocha",
          description: "White chocolate, espresso, steamed milk, whipped cream",
          price: "₱190",
        },
      ],
    },
  ],
  desserts: [
    {
      id: "pancakes",
      label: "Soufflé Pancakes & Crêpes",
      items: [
        {
          name: "Soufflé Pancakes",
          description:
            "Fluffy Japanese-style pancakes, mixed berries, maple syrup, whipped cream",
          price: "₱320",
          tag: "Must Try",
        },
        {
          name: "Nutella Banana Crêpe",
          description:
            "Thin French crêpe, Nutella, caramelized banana, vanilla ice cream",
          price: "₱280",
        },
        {
          name: "Mango Sticky Rice Crêpe",
          description:
            "Crêpe filled with coconut sticky rice, fresh mango, coconut cream",
          price: "₱300",
          tag: "Island Twist",
        },
      ],
    },
    {
      id: "cakes",
      label: "Cakes & Pastries",
      items: [
        {
          name: "Ube Burnt Basque Cheesecake",
          description:
            "Creamy purple yam cheesecake with a caramelized top",
          price: "₱220/slice",
          tag: "Local Fave",
        },
        {
          name: "Chocolate Lava Cake",
          description:
            "Warm molten chocolate cake, vanilla bean ice cream",
          price: "₱260",
        },
        {
          name: "Coconut Panna Cotta",
          description:
            "Coconut cream panna cotta, passion fruit coulis, toasted coconut",
          price: "₱200",
        },
        {
          name: "Carrot Cake",
          description:
            "Spiced carrot cake, cream cheese frosting, walnut crumble",
          price: "₱210/slice",
        },
      ],
    },
  ],
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("brunch");
  const contentRef = useRef<HTMLDivElement>(null);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Cinematic Header */}
      <div className="relative bg-teal-deep text-ivory pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 sm:px-10 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(184, 153, 104, 0.25) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="brass-rule" />
            <p className="eyebrow-luxe">The Menu</p>
            <span className="brass-rule" />
          </div>
          <h1 className="display-cinema text-5xl sm:text-7xl lg:text-8xl">
            Made by hand,
            <br />
            <span className="italic text-brass-light">
              meant to be remembered.
            </span>
          </h1>
          <p className="text-ivory/70 mt-8 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Everything we serve, organized by hour of day. Prices are in
            Philippine Pesos. The menu changes with what is fresh on the
            island.
          </p>
        </motion.div>
      </div>

      {/* Sticky tabs - elegant */}
      <div className="sticky top-[68px] sm:top-[80px] z-30 bg-ivory/95 backdrop-blur-xl border-b border-sand shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-5 flex justify-center gap-1 sm:gap-2">
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`px-5 sm:px-7 py-3 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-teal text-ivory"
                  : "text-slate-soft hover:text-teal-deep"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu content - elegant */}
      <div
        ref={contentRef}
        className="max-w-[1100px] mx-auto px-6 sm:px-10 py-20 sm:py-28"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="space-y-20 sm:space-y-28"
          >
            {menuData[activeTab]?.map((category) => (
              <section key={category.id}>
                {/* Category header */}
                <div className="text-center mb-14">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="brass-rule" />
                    <p className="eyebrow-luxe">{category.items.length} items</p>
                    <span className="brass-rule" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-teal-deep font-light italic tracking-tight">
                    {category.label}
                  </h2>
                </div>

                {/* Items */}
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                  {category.items.map((item) => (
                    <article key={item.name} className="group">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          {item.image && (
                            <div className="flex-shrink-0 w-16 h-16 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl text-teal-deep font-light tracking-tight">
                                {item.name}
                              </h3>
                              {item.tag && (
                                <span className="text-[9px] tracking-[0.22em] uppercase text-brass font-semibold">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-soft text-sm leading-relaxed mt-2 font-light">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span className="font-[family-name:var(--font-heading)] italic text-xl text-brass whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <div className="mt-4 h-px bg-sand" />
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="mt-24 pt-12 border-t border-sand text-center">
          <p className="font-[family-name:var(--font-heading)] italic text-base text-slate-soft">
            The menu changes with what is fresh on the island. Please inform
            our staff of any dietary requirements or allergies.
          </p>
        </div>
      </div>
    </div>
  );
}
