"use client";

import { useState, useRef, MouseEvent } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    num: "01",
    name: "Starter",
    tag: "Begin Here",
    monthly: 5000,
    yearly: 4000,
    highlight: false,
    badge: null,
    features: [
      "Full gym access",
      "Basic training plan",
      "Group classes (2/week)",
      "Locker & shower",
    ],
    missing: ["Personalized coaching", "Custom diet plan", "24/7 access"],
    cta: "Get Started",
  },
  {
    num: "02",
    name: "Pro",
    tag: "Most Popular",
    monthly: 8000,
    yearly: 6500,
    highlight: true,
    badge: "★  Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "Personalized coaching",
      "Progress tracking",
      "Nutrition guidance",
      "Monthly assessments",
    ],
    missing: ["Custom diet plan", "24/7 access"],
    cta: "Join Pro",
  },
  {
    num: "03",
    name: "Elite",
    tag: "Full Package",
    monthly: 12000,
    yearly: 9800,
    highlight: false,
    badge: "◆  Best Value",
    features: [
      "Everything in Pro",
      "1-on-1 personal trainer",
      "Custom diet plan",
      "24/7 gym access",
      "Recovery & mobility",
      "Priority trainer access",
    ],
    missing: [],
    cta: "Go Elite",
  },
];

// ─── Individual Card with 3D tilt ─────────────────────────────────────────────

function PlanCard({ plan, isYearly }: { plan: typeof PLANS[0]; isYearly: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const price = isYearly ? plan.yearly : plan.monthly;

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -14;
    const ry = ((x / rect.width) - 0.5) * 14;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${plan.highlight ? 20 : 12}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
      className={`relative flex flex-col overflow-hidden cursor-pointer select-none
        ${plan.highlight
          ? "border border-primary/60 shadow-[0_0_80px_-10px_rgba(255,45,45,0.5),inset_0_0_40px_-20px_rgba(255,45,45,0.1)]"
          : "border border-white/10 hover:border-white/25 shadow-[0_0_40px_-20px_rgba(0,0,0,0.8)]"
        }`}
    >
      {/* Card background */}
      <div className={`absolute inset-0 ${
        plan.highlight
          ? "bg-gradient-to-b from-red-950/30 via-zinc-950 to-black"
          : "bg-gradient-to-b from-zinc-900/80 to-zinc-950"
      }`} />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top glow line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${
        plan.highlight
          ? "bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_16px_rgba(255,45,45,0.8)]"
          : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
      }`} />

      {/* HUD corner brackets (Pro only) */}
      {plan.highlight && (
        <>
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/70 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/70 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-primary/70 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/70 pointer-events-none" />
        </>
      )}

      {/* Ghost plan number */}
      <div className={`absolute -top-6 -right-4 font-heading text-[130px] leading-none tracking-tighter select-none pointer-events-none transition-all duration-500 ${
        plan.highlight ? "text-primary/8" : "text-white/4"
      }`}>
        {plan.num}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 p-8 flex flex-col flex-grow">

        {/* Badge */}
        {plan.badge && (
          <div className={`self-start mb-6 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] ${
            plan.highlight
              ? "bg-primary text-white shadow-[0_0_20px_rgba(255,45,45,0.4)]"
              : "bg-white/6 text-white/50 border border-white/12"
          }`}>
            {plan.badge}
          </div>
        )}

        {/* Plan name + tag */}
        <div className="mb-8">
          <p className="font-accent text-white/30 text-[10px] uppercase tracking-[0.35em] mb-2">{plan.tag}</p>
          <h3 className={`font-heading text-5xl uppercase tracking-widest leading-none ${
            plan.highlight ? "text-white" : "text-white/80"
          }`}>
            {plan.name}
          </h3>
        </div>

        {/* Price */}
        <div className="mb-8 pb-8 border-b border-white/8">
          <div className="flex items-start gap-1.5">
            <span className={`font-body text-xs font-bold mt-2 ${plan.highlight ? "text-white/50" : "text-white/25"}`}>LKR</span>
            <div>
              <span className={`font-heading text-6xl leading-none ${plan.highlight ? "text-primary" : "text-white"}`}>
                {price.toLocaleString()}
              </span>
              <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 ${plan.highlight ? "text-white/40" : "text-white/20"}`}>
                / {isYearly ? "mo · billed yearly" : "month"}
              </p>
              {isYearly && (
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">
                  Save LKR {((plan.monthly - plan.yearly) * 12).toLocaleString()} /yr
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Feature list */}
        <ul className="space-y-3 flex-grow mb-8">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                plan.highlight ? "bg-primary/20 border border-primary/40" : "bg-white/6 border border-white/12"
              }`}>
                <svg className={`w-2.5 h-2.5 ${plan.highlight ? "text-primary" : "text-white/50"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={`text-sm font-body ${plan.highlight ? "text-white/85" : "text-white/55"}`}>{f}</span>
            </li>
          ))}
          {plan.missing.map((f, i) => (
            <li key={`x-${i}`} className="flex items-center gap-3 opacity-30">
              <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-sm font-body text-white/20 line-through">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className={`w-full py-4 font-body font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group ${
          plan.highlight
            ? "bg-primary text-white hover:bg-white hover:text-primary shadow-[0_0_30px_rgba(255,45,45,0.3)] hover:shadow-[0_0_50px_rgba(255,45,45,0.5)]"
            : "border border-white/15 text-white/70 hover:border-primary hover:text-white hover:bg-primary/10"
        }`}>
          {plan.cta}
          <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <p className={`text-center text-[9px] uppercase tracking-widest mt-3 ${plan.highlight ? "text-white/30" : "text-white/15"}`}>
          Free intro session included
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">

      {/* ── Ambient background ─────────────────────────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Ghost bg text ───────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.018]">
        <span className="font-heading text-[18vw] whitespace-nowrap tracking-tighter text-white">MEMBERSHIP</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-6">
          <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">Membership Plans</span>
          <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.88] tracking-tighter mb-5">
            Invest In{" "}
            <span className="text-gradient">Your Best Self</span>
          </h2>
          <p className="font-body text-muted text-lg max-w-lg mx-auto">
            Flexible plans built for every goal. No hidden fees, no long-term lock-ins — just results.
          </p>
        </div>

        {/* ── Billing Toggle ──────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`font-body text-xs font-bold uppercase tracking-widest transition-colors ${!isYearly ? "text-white" : "text-white/30"}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 rounded-full bg-white/5 border border-white/15 hover:border-primary/50 transition-colors"
          >
            <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(255,45,45,0.7)] ${isYearly ? "left-[calc(100%-19px)]" : "left-[3px]"}`} />
          </button>
          <span className={`font-body text-xs font-bold uppercase tracking-widest transition-colors ${isYearly ? "text-white" : "text-white/30"}`}>Yearly</span>
          <div className={`px-2.5 py-1 bg-primary/10 border border-primary/25 text-primary text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${isYearly ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            Save 20%
          </div>
        </div>

        {/* ── Cards Grid ──────────────────────────────────── */}
        {/* Pro card gets visual elevation on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          <div className="md:mt-8">
            <PlanCard plan={PLANS[0]} isYearly={isYearly} />
          </div>
          <div className="md:-mt-2 md:mb-2">
            {/* Pro is taller by having less margin-top */}
            <PlanCard plan={PLANS[1]} isYearly={isYearly} />
          </div>
          <div className="md:mt-8">
            <PlanCard plan={PLANS[2]} isYearly={isYearly} />
          </div>
        </div>

        {/* ── Trust strip ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mt-14">
          {[
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "No hidden fees" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Cancel anytime" },
            { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Free intro session" },
            { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Expert coaches" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <svg className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={b.icon} />
              </svg>
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-white/25 group-hover:text-white/50 transition-colors duration-300">{b.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
