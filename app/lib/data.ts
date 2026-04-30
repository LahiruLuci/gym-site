export const IMAGES = [
  "/assets/home-page-hero-slider-1.webp",
  "/assets/home-page-hero-slider-2.webp",
  "/assets/home-page-hero-slider-3.webp",
  "/assets/home-page-hero-slider-4.webp",
];

export const AUDIENCES = [
  { id: "01", title: "Beginners",      hook: "New to fitness?",       desc: "Struggling to get started? We guide you step-by-step to build confidence and strength from day one.", cta: "Start Your Journey", img: "/assets/beginner.webp" },
  { id: "02", title: "Fat Loss",       hook: "Tired of slow results?", desc: "Burn fat effectively with structured, high-intensity programs designed for maximum metabolic impact.",   cta: "Get Started",        img: "/assets/edgar-chaparro-sHfo3WOgGTU-unsplash.webp" },
  { id: "03", title: "Muscle Builders",hook: "Want real size?",        desc: "Hypertrophy-focused training using proven scientific methods to build raw size and functional strength.",   cta: "Join the Forge",     img: "/assets/muscles-builder.webp" },
  { id: "04", title: "Professionals",  hook: "No time to waste?",      desc: "Efficient 45-minute high-impact workouts that fit into your busy schedule without sacrificing results.",   cta: "Optimize Time",      img: "/assets/professional.webp" },
  { id: "05", title: "Athletes",       hook: "Peak performance?",      desc: "Elite-level coaching and performance metrics for athletes looking to dominate their sport and stay injury-free.", cta: "Reach Peak", img: "/assets/athletes.webp" },
];

export const PROGRAMS = [
  { title: "Fat Loss Program",    hook: "Burn fat with high-intensity plans.",          benefits: ["HIIT workouts", "Nutrition guidance", "Fast results"],                level: "All Levels",  popular: true,  img: "/assets/daniel-apodaca-WdoQio6HPVA-unsplash.webp" },
  { title: "Strength Training",   hook: "Build serious muscle and raw power.",          benefits: ["Structured workouts", "Progressive overload", "Expert guidance"],     level: "Intermediate",popular: false, img: "/assets/muscles-builder.webp" },
  { title: "Personal Training",   hook: "One-on-one coaching for faster results.",      benefits: ["Custom programming", "Form correction", "Accountability"],            level: "All Levels",  popular: false, img: "/assets/professional.webp" },
  { title: "Group Training",      hook: "Train with energy and community.",             benefits: ["High motivation", "Team environment", "Daily workouts"],               level: "Beginner",    popular: false, img: "/assets/group-energy.webp" },
  { title: "Functional Training", hook: "Improve mobility and real-world fitness.",     benefits: ["Core stability", "Injury prevention", "Agility focus"],               level: "Intermediate",popular: false, img: "/assets/pexels-tubarones-9545914.webp" },
  { title: "Athlete Performance", hook: "Train like a professional athlete.",           benefits: ["Sport-specific", "Explosive power", "Advanced metrics"],              level: "Advanced",    popular: false, img: "/assets/elite-coaching.webp" },
];

export const STEPS = [
  { num: "01", title: "Join The Gym",   desc: "Sign up and become part of a results-driven fitness environment.", micro: "Instant Access"  },
  { num: "02", title: "Get Your Plan",  desc: "Our trainers create a personalized program based on your goals.",  micro: "Expert Guidance" },
  { num: "03", title: "Start Training", desc: "Follow your plan, stay consistent, and see real transformation.",  micro: "Real Results"    },
];

export const TRAINERS = [
  { name: "JOHN SILVA", role: "Head Coach",        specialty: "Strength & Power",    exp: "10+ Years", trust: "500+ Transformations", img: IMAGES[2] },
  { name: "SARAH JEN",  role: "Elite Trainer",     specialty: "Fat Loss Specialist", exp: "7+ Years",  trust: "National Athlete",      img: IMAGES[1] },
  { name: "MIKE TY",    role: "Performance Coach", specialty: "Functional Mobility", exp: "5+ Years",  trust: "Rehab Expert",          img: IMAGES[3] },
];

export const TESTIMONIALS = [
  { quote: "I lost 18kg in 4 months. The trainers at Fitness Gym are next level — they pushed me further than I ever pushed myself.", name: "RAYAN K.", tag: "Lost 18kg in 4 months",    stars: 5, img: IMAGES[0] },
  { quote: "Never thought I'd enjoy the gym. The community here changed everything. First real transformation in my life.",        name: "PRIYA S.", tag: "First-time gym member",    stars: 5, img: IMAGES[1] },
  { quote: "Competed in my first bodybuilding show after 8 months with Fitness Gym. The coaching here is elite-level.",                name: "DANTE M.", tag: "Competitive Bodybuilder", stars: 5, img: IMAGES[2] },
];

export const PRICING_PLANS = [
  {
    name: "STARTER", price: "49", period: "/ month", tagline: "Perfect for beginners",
    features: ["Full gym access", "Locker & shower", "Group classes (2/week)", "Fitness assessment"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "ELITE", price: "99", period: "/ month", tagline: "Most popular — best results",
    features: ["Everything in Starter", "Unlimited group classes", "1 personal session / week", "Custom nutrition plan", "Priority trainer access"],
    cta: "Join Elite", highlight: true,
  },
  {
    name: "PRO", price: "179", period: "/ month", tagline: "For serious athletes",
    features: ["Everything in Elite", "3 personal sessions / week", "Performance analytics", "Sport-specific programming", "24/7 gym access"],
    cta: "Go Pro", highlight: false,
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Fat Loss",
  "Muscle Building",
  "Nutrition",
  "Workout Plans",
  "Lifestyle"
];

export const BLOG_POSTS = [
  {
    id: "post-1",
    title: "The Science of Extreme Hypertrophy",
    slug: "science-of-extreme-hypertrophy",
    desc: "Unlock the central nervous system. Discover the mechanical tension protocols used by elite athletes to force physiological adaptation.",
    category: "Muscle Building",
    readTime: "8 min read",
    date: "April 29, 2026",
    featured: true,
    img: IMAGES[3],
    author: { name: "John Silva", role: "Head Coach", img: IMAGES[2] }
  },
  {
    id: "post-2",
    title: "Fat Loss: The Truth About Fasting",
    slug: "fat-loss-truth-about-fasting",
    desc: "Is intermittent fasting the ultimate hack or just another trend? We break down the metabolic science behind meal timing.",
    category: "Fat Loss",
    readTime: "6 min read",
    date: "April 25, 2026",
    featured: true,
    img: IMAGES[1],
    author: { name: "Sarah Jen", role: "Fat Loss Specialist", img: IMAGES[1] }
  },
  {
    id: "post-3",
    title: "Nutrition Guide for Sri Lankan Gym Members",
    slug: "nutrition-guide-sri-lanka",
    desc: "How to hit your macros using local Sri Lankan foods. From rice and curry hacks to protein-rich local sources.",
    category: "Nutrition",
    readTime: "10 min read",
    date: "April 22, 2026",
    featured: false,
    img: IMAGES[0],
    author: { name: "Mike Ty", role: "Nutrition Expert", img: IMAGES[3] }
  },
  {
    id: "post-4",
    title: "5 Common Workout Mistakes to Avoid",
    slug: "common-workout-mistakes",
    desc: "Are you stalling? These 5 common training errors are the most likely reasons your progress has hit a wall.",
    category: "Workout Plans",
    readTime: "5 min read",
    date: "April 20, 2026",
    featured: false,
    img: IMAGES[2],
    author: { name: "John Silva", role: "Head Coach", img: IMAGES[2] }
  },
  {
    id: "post-5",
    title: "Mental Toughness: The Discipline Engine",
    slug: "mental-toughness-discipline-engine",
    desc: "Training is 90% mental. Learn the cognitive strategies used by high performers to stay consistent when motivation fails.",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "April 18, 2026",
    featured: false,
    img: IMAGES[3],
    author: { name: "Sarah Jen", role: "Elite Trainer", img: IMAGES[1] }
  },
  {
    id: "post-6",
    title: "The Ultimate Guide to Pre-Workout",
    slug: "ultimate-guide-pre-workout",
    desc: "What actually works? Caffeine, Creatine, Beta-Alanine, and Nitrates — the evidence-based guide to supplementation.",
    category: "Nutrition",
    readTime: "6 min read",
    date: "April 15, 2026",
    featured: false,
    img: IMAGES[1],
    author: { name: "Mike Ty", role: "Performance Coach", img: IMAGES[3] }
  }
];
