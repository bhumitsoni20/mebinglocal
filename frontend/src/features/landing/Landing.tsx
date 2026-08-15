import { useRouter } from 'next/navigation';

import { Shield, Star, Users, Zap, Globe, Heart, ArrowRight, CheckCircle, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Shield, title: "Verified Companions", desc: "Every Companion goes through ID & background verification.", color: "#0FB8B0" },
  { icon: Star, title: "Authentic Experiences", desc: "Skip tourist traps. Discover hidden gems only locals know.", color: "#FF6B35" },
  { icon: Users, title: "Women-Only Option", desc: "Female travelers can choose women-only companions for extra comfort.", color: "#8B5CF6" },
  { icon: Zap, title: "AI Recommendations", desc: "Smart suggestions based on your interests, pace, and travel style.", color: "#F59E0B" },
  { icon: Globe, title: "150+ Cities", desc: "From Mumbai to Barcelona, Tokyo to Accra — we've got you covered.", color: "#3B82F6" },
  { icon: Heart, title: "Trust & Safety Center", desc: "Live location sharing, SOS button, and 24/7 traveler support.", color: "#EF4444" },
];

const TESTIMONIALS = [
  {
    name: "Sarah K.", city: "London → Tokyo",
    text: "I was terrified to travel alone. My Companion Yuki made Tokyo feel like home in 3 hours.",
    avatar: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=80&h=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Marco B.", city: "NYC → Mumbai",
    text: "The street food tour with Priya was the best experience of my life. Zero tourist traps.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Amelia T.", city: "Sydney → Barcelona",
    text: "Carlos took us to his grandmother's recipe restaurant. I cried. It was that good.",
    avatar: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=80&h=80&fit=crop&auto=format",
    rating: 5,
  },
];

export function Landing() {
  const router = useRouter();

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#fff", overflowX: "hidden" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-5 sticky top-0 z-50"
        style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid #F1F5F9" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="rounded-xl flex items-center justify-center"
            style={{ width: 36, height: 36, background: "linear-gradient(135deg, #FF6B35, #FF8C42)" }}
          >
            <MapPin size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
            Mebing<span style={{ color: "#FF6B35" }}>Local</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/app")}
            style={{ fontSize: 14, fontWeight: 500, color: "#6B7280" }}
          >
            Sign In
          </button>
          <button
            onClick={() => router.push("/app")}
            className="rounded-xl px-5 py-2.5"
            style={{ fontSize: 14, fontWeight: 600, background: "#FF6B35", color: "#fff" }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FFF3EE 0%, #EFF6FF 50%, #ECFDF5 100%)",
          }}
        />
        <div
          className="absolute top-20 right-0 rounded-full opacity-20"
          style={{ width: 600, height: 600, background: "#FF6B35", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full opacity-15"
          style={{ width: 400, height: 400, background: "#0FB8B0", filter: "blur(100px)" }}
        />

        <div className="relative max-w-6xl mx-auto px-8 py-20 grid gap-16" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: "#FFF3EE", border: "1px solid #FFD6C2" }}
            >
              <span style={{ fontSize: 12, color: "#FF6B35", fontWeight: 600 }}>🌍 Now in 150+ Cities Worldwide</span>
            </div>

            <h1
              style={{
                fontSize: 60,
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111827",
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Travel Like a{" "}
              <span style={{ color: "#FF6B35", fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>
                Local,
              </span>
              <br />
              Not a Tourist.
            </h1>

            <p style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
              Connect with verified local companions who show you the real city — the hidden cafés, secret viewpoints, and authentic experiences no guidebook covers.
            </p>

            <div className="flex gap-3 mb-12">
              <button
                onClick={() => router.push("/app")}
                className="flex items-center gap-2 rounded-2xl px-7 py-4 transition-all hover:shadow-lg"
                style={{ background: "#FF6B35", color: "#fff", fontSize: 16, fontWeight: 700 }}
              >
                Find a Companion
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => router.push("/app/become-local")}
                className="flex items-center gap-2 rounded-2xl px-7 py-4"
                style={{
                  background: "#fff",
                  color: "#111827",
                  fontSize: 16,
                  fontWeight: 600,
                  border: "2px solid #E5E7EB",
                }}
              >
                Become a Companion
              </button>
            </div>

            <div className="flex items-center gap-8">
              {[
                { value: "50K+", label: "Companions" },
                { value: "4.95", label: "Avg Rating" },
                { value: "200K+", label: "Happy Travelers" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "#6B7280" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero images */}
          <div className="relative" style={{ height: 560 }}>
            <img
              src="https://images.unsplash.com/photo-1752650143336-75cf018b48f4?w=500&h=500&fit=crop&auto=format"
              alt="Two friends exploring a city with a map"
              className="rounded-3xl object-cover absolute"
              style={{ width: 340, height: 420, right: 0, top: 0, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=280&h=320&fit=crop&auto=format"
              alt="Solo traveler exploring a city"
              className="rounded-3xl object-cover absolute"
              style={{ width: 200, height: 260, left: 0, bottom: 0, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", border: "4px solid #fff" }}
            />
            {/* Floating card */}
            <div
              className="absolute rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "#fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                bottom: 120,
                right: -20,
                minWidth: 200,
              }}
            >
              <div className="rounded-full" style={{ width: 40, height: 40, background: "#FFF3EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Shield size={18} color="#FF6B35" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Verified & Safe</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>ID + background check</div>
              </div>
            </div>
            <div
              className="absolute rounded-2xl px-4 py-3"
              style={{
                background: "#FF6B35",
                boxShadow: "0 8px 32px rgba(255,107,53,0.3)",
                top: 30,
                left: -10,
                color: "#fff",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.9 }}>Next available</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Priya · Mumbai</div>
              <div style={{ fontSize: 11, opacity: 0.9 }}>⏱ Ready in &lt; 1 hr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8" style={{ background: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Why <span style={{ color: "#FF6B35" }}>Companion?</span>
            </h2>
            <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 520, margin: "0 auto" }}>
              We're not a tour company. We're a platform for genuine human connection while you travel.
            </p>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl p-6 transition-all hover:-translate-y-1"
                style={{ background: "#fff", border: "1px solid #F1F5F9", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="rounded-2xl flex items-center justify-center mb-4"
                  style={{ width: 52, height: 52, background: f.color + "20" }}
                >
                  <f.icon size={24} color={f.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 16 }}>
              Real Stories, Real Connections
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl p-7"
                style={{ background: "#FAFAF8", border: "1px solid #F1F5F9" }}
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} style={{ color: "#FF6B35", fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="rounded-full object-cover" style={{ width: 44, height: 44 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#6B7280" }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 px-8" style={{ background: "linear-gradient(135deg, #FFF3EE, #EFF6FF)" }}>
        <div className="max-w-5xl mx-auto grid gap-16" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: "#FFF3EE", border: "1px solid #FFD6C2" }}
            >
              <Shield size={14} color="#FF6B35" />
              <span style={{ fontSize: 12, color: "#FF6B35", fontWeight: 600 }}>Safety First, Always</span>
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: 20 }}>
              Your Safety Is Our Priority
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 28 }}>
              Every Companion undergoes rigorous identity verification. Our platform includes real-time safety tools so you're never truly alone.
            </p>
            {[
              "Government ID & background verification",
              "Live location sharing with trusted contacts",
              "One-tap SOS emergency button",
              "24/7 traveler support team",
              "Women-only companion option",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <CheckCircle size={18} color="#0FB8B0" />
                <span style={{ fontSize: 15, color: "#374151" }}>{item}</span>
              </div>
            ))}
            <button
              onClick={() => router.push("/app/safety")}
              className="mt-6 flex items-center gap-2 rounded-2xl px-6 py-3"
              style={{ background: "#111827", color: "#fff", fontSize: 15, fontWeight: 600 }}
            >
              Explore Safety Center <ArrowRight size={16} />
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1752650143586-c093d519aeb7?w=500&h=580&fit=crop&auto=format"
            alt="Friends exploring a city together"
            className="rounded-3xl object-cover"
            style={{ width: "100%", height: 480, boxShadow: "0 24px 80px rgba(0,0,0,0.12)" }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center" style={{ background: "#111827" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 52, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.15 }}>
            Your Next Adventure Starts{" "}
            <span style={{ color: "#FF6B35", fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>Here</span>
          </h2>
          <p style={{ fontSize: 18, color: "#9CA3AF", marginBottom: 36 }}>
            Join 200,000+ travelers who've discovered cities through the eyes of a local.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/app")}
              className="flex items-center gap-2 rounded-2xl px-8 py-4"
              style={{ background: "#FF6B35", color: "#fff", fontSize: 16, fontWeight: 700 }}
            >
              Find a Companion <ArrowRight size={18} />
            </button>
            <button
              onClick={() => router.push("/app/become-local")}
              className="flex items-center gap-2 rounded-2xl px-8 py-4"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 16, fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Become a Companion
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8" style={{ background: "#0D0D1A", color: "#6B7280" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-xl flex items-center justify-center" style={{ width: 32, height: 32, background: "#FF6B35" }}>
              <MapPin size={16} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>
              Mebing<span style={{ color: "#FF6B35" }}>Local</span>
            </span>
          </div>
          <div className="flex gap-8" style={{ fontSize: 14 }}>
            {["About", "Safety", "Careers", "Blog", "Help"].map((l) => (
              <a key={l} href="#" style={{ color: "#6B7280" }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 13 }}>© 2025 Companion. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
