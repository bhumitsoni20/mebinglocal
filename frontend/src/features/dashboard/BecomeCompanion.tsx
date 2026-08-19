import { useState } from "react";
import { useRouter } from 'next/navigation';

import { ArrowLeft, ArrowRight, Camera, Shield, DollarSign, Check } from "lucide-react";

const STEPS = ["Your Profile", "ID Verification", "Skills & Languages", "Availability & Pricing", "Earnings Preview"];
const INTERESTS_LIST = ["Food Tours", "Cultural Walks", "Hidden Gems", "Photography", "Shopping", "History", "Architecture", "Music & Art", "Sports", "Nightlife"];
const LANGUAGES_LIST = ["English", "Spanish", "French", "Hindi", "Arabic", "Japanese", "Portuguese", "Mandarin", "German", "Turkish"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function BecomeCompanion() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [rate, setRate] = useState(15);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [womenOnly, setWomenOnly] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggle = <T,>(arr: T[], item: T, setter: (v: T[]) => void) =>
    setter(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);

  const earnings = rate * 4 * (selectedDays.length || 5);

  const STEP_CONTENT = [
    /* Step 0: Profile */
    <div key="profile" className="grid gap-5" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: "#2C4F3E", display: "block", marginBottom: 6 }}>Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your real name" className="w-full rounded-2xl px-4 py-3.5 outline-none" style={{ fontSize: 15, background: "#F4E9D8", border: "1.5px solid #8B9E94", color: "#1A3B2B" }} />
      </div>
      <div>
        <label style={{ fontSize: 13, fontWeight: 700, color: "#2C4F3E", display: "block", marginBottom: 6 }}>Your City</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Where do you live?" className="w-full rounded-2xl px-4 py-3.5 outline-none" style={{ fontSize: 15, background: "#F4E9D8", border: "1.5px solid #8B9E94", color: "#1A3B2B" }} />
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <label style={{ fontSize: 13, fontWeight: 700, color: "#2C4F3E", display: "block", marginBottom: 6 }}>About You</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell travelers what makes your city special and what you love showing off…" rows={4} className="w-full rounded-2xl px-4 py-3.5 outline-none resize-none" style={{ fontSize: 15, background: "#F4E9D8", border: "1.5px solid #8B9E94", color: "#1A3B2B" }} />
      </div>
      <div className="flex items-center justify-between rounded-2xl p-4 col-span-2" style={{ background: "#FDF2F8", border: "1px solid #FBCFE8" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#2C4F3E" }}>Women-Only Companion 💜</div>
          <div style={{ fontSize: 12, color: "#8B9E94" }}>Only accept bookings from women travelers</div>
        </div>
        <button onClick={() => setWomenOnly(!womenOnly)} className="rounded-full" style={{ width: 50, height: 28, background: womenOnly ? "#EC4899" : "#8B9E94", position: "relative", transition: "background 0.2s" }}>
          <span className="absolute rounded-full" style={{ width: 22, height: 22, background: "#FCFAF5", top: 3, left: womenOnly ? 25 : 3, transition: "left 0.2s" }} />
        </button>
      </div>
      <div className="col-span-2 rounded-2xl p-6 flex items-center gap-6 cursor-pointer" style={{ background: "#F8F9FE", border: "2px dashed #8B9E94" }}>
        <div className="rounded-2xl flex items-center justify-center flex-shrink-0" style={{ width: 72, height: 72, background: "#EFF6FF" }}>
          <Camera size={30} color="#3B82F6" />
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#2C4F3E" }}>Upload Profile Photo</div>
          <div style={{ fontSize: 13, color: "#8B9E94" }}>A high-quality photo builds trust with travelers</div>
        </div>
        <button className="ml-auto rounded-xl px-5 py-2.5" style={{ background: "#3B82F6", color: "#FCFAF5", fontSize: 14, fontWeight: 600 }}>Choose Photo</button>
      </div>
    </div>,

    /* Step 1: ID */
    <div key="id" className="grid gap-5" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="col-span-2 rounded-2xl p-6 text-center" style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}>
        <Shield size={48} color="#C96F52" style={{ margin: "0 auto 12px" }} />
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#065F46" }}>ID Verification</h3>
        <p style={{ fontSize: 14, color: "#047857", lineHeight: 1.7, marginTop: 6, maxWidth: 500, margin: "8px auto 0" }}>We verify every Companion's identity. This builds trust with travelers and keeps our community safe.</p>
      </div>
      {[
        { label: "Government ID", sub: "Passport or National ID", emoji: "🪪", required: true },
        { label: "Selfie with ID", sub: "Clear photo holding your ID", emoji: "🤳", required: true },
        { label: "Address Proof", sub: "Utility bill or bank statement", emoji: "📋", required: false },
        { label: "Criminal Background Check", sub: "Processed within 48 hours", emoji: "🔍", required: true },
      ].map((item) => (
        <div key={item.label} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "#FCFAF5", border: "1px solid var(--border)" }}>
          <div className="text-3xl flex-shrink-0">{item.emoji}</div>
          <div className="flex-1">
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1A3B2B" }}>{item.label}</div>
            <div style={{ fontSize: 13, color: "#8B9E94" }}>{item.sub}</div>
            <span style={{ fontSize: 11, fontWeight: 600, color: item.required ? "#EF4444" : "#C96F52" }}>{item.required ? "Required" : "Optional"}</span>
          </div>
          <button className="rounded-xl px-4 py-2 flex-shrink-0" style={{ background: "#F4E9D8", color: "#2C4F3E", fontSize: 13, fontWeight: 600 }}>Upload</button>
        </div>
      ))}
      <div className="col-span-2 rounded-2xl p-4" style={{ background: "#FCFAF53EE", border: "1px solid #FFD6C2" }}>
        <p style={{ fontSize: 13, color: "#78350F", lineHeight: 1.6 }}>
          🔒 Your documents are encrypted and stored securely. We never share your ID with travelers — only your verification badge status is visible.
        </p>
      </div>
    </div>,

    /* Step 2: Skills */
    <div key="skills" className="flex flex-col gap-6">
      <div>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1A3B2B", marginBottom: 12 }}>What do you love showing? <span style={{ color: "#8B9E94", fontWeight: 400 }}>(select all that apply)</span></h3>
        <div className="flex gap-2.5 flex-wrap">
          {INTERESTS_LIST.map((i) => (
            <button key={i} onClick={() => toggle(selectedInterests, i, setSelectedInterests)} className="rounded-full px-5 py-2.5 transition-all" style={{ fontSize: 14, fontWeight: 600, background: selectedInterests.includes(i) ? "#C96F52" : "#F4E9D8", color: selectedInterests.includes(i) ? "#FCFAF5" : "#2C4F3E" }}>
              {selectedInterests.includes(i) && <Check size={13} className="inline mr-1.5" />}{i}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1A3B2B", marginBottom: 12 }}>Languages you speak</h3>
        <div className="flex gap-2.5 flex-wrap">
          {LANGUAGES_LIST.map((l) => (
            <button key={l} onClick={() => toggle(selectedLangs, l, setSelectedLangs)} className="rounded-full px-5 py-2.5 transition-all" style={{ fontSize: 14, fontWeight: 600, background: selectedLangs.includes(l) ? "#3B82F6" : "#F4E9D8", color: selectedLangs.includes(l) ? "#FCFAF5" : "#2C4F3E" }}>
              {selectedLangs.includes(l) && <Check size={13} className="inline mr-1.5" />}{l}
            </button>
          ))}
        </div>
      </div>
    </div>,

    /* Step 3: Availability */
    <div key="avail" className="grid gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1A3B2B", marginBottom: 14 }}>Available Days</h3>
        <div className="grid grid-cols-4 gap-3">
          {DAYS.map((d) => (
            <button key={d} onClick={() => toggle(selectedDays, d, setSelectedDays)} className="rounded-2xl py-4 flex flex-col items-center" style={{ fontSize: 14, fontWeight: 700, background: selectedDays.includes(d) ? "#1A3B2B" : "#F4E9D8", color: selectedDays.includes(d) ? "#FCFAF5" : "#2C4F3E" }}>
              {d}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <h3 style={{ fontSize: 15, fontWeight: 800, color: "#1A3B2B" }}>Hourly Rate</h3>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#C96F52" }}>${rate}/hr</span>
        </div>
        <input type="range" min={5} max={60} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full mb-2" style={{ accentColor: "#C96F52" }} />
        <div className="flex justify-between">
          <span style={{ fontSize: 12, color: "#8B9E94" }}>$5/hr · Beginner</span>
          <span style={{ fontSize: 12, color: "#8B9E94" }}>$60/hr · Expert</span>
        </div>
        <div className="mt-4 rounded-2xl p-4" style={{ background: "#FCFAF53EE" }}>
          <div style={{ fontSize: 13, color: "#78350F" }}>💡 Most Companions in your city charge <strong>${rate - 2}–${rate + 4}/hr</strong>. Your rate looks competitive!</div>
        </div>
      </div>
    </div>,

    /* Step 4: Earnings */
    <div key="earnings" className="grid gap-5" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="rounded-3xl p-8 col-span-2" style={{ background: "linear-gradient(135deg, #C96F52, #D97A5E)" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Your Estimated Monthly Earnings</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#FCFAF5", marginTop: 4 }}>${earnings.toLocaleString()}</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
          Based on ${rate}/hr · 4 hrs/day · {selectedDays.length || 5} days/week
        </div>
      </div>
      {[
        { label: "Top 10% of Companions earn", value: "$3,200+/mo", color: "#C96F52" },
        { label: "Average Companion earns", value: "$890/mo", color: "#C96F52" },
        { label: "Platform fee", value: "15%", color: "#8B9E94" },
        { label: "You keep from every booking", value: "85%", color: "#059669" },
      ].map((r) => (
        <div key={r.label} className="rounded-2xl p-5" style={{ background: "#FCFAF5", border: "1px solid var(--border)" }}>
          <div style={{ fontSize: 13, color: "#8B9E94" }}>{r.label}</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: r.color, marginTop: 6 }}>{r.value}</div>
        </div>
      ))}
      <div className="col-span-2 rounded-2xl p-4 flex items-center gap-3" style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}>
        <DollarSign size={20} color="#059669" />
        <span style={{ fontSize: 14, fontWeight: 700, color: "#065F46" }}>Paid weekly via bank transfer · Instant payouts coming soon</span>
      </div>
    </div>,
  ];

  if (submitted) {
    return (
      <div className="flex items-center justify-center h-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div className="flex flex-col items-center text-center" style={{ maxWidth: 480 }}>
          <div className="text-7xl mb-6">🎉</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1A3B2B", marginBottom: 12 }}>Application Submitted!</h2>
          <p style={{ fontSize: 16, color: "#8B9E94", lineHeight: 1.7, marginBottom: 28 }}>
            We review every application within 48 hours. You'll receive an email once your account is verified and ready to go live.
          </p>
          <button onClick={() => router.push("/app")} className="rounded-2xl px-10 py-4" style={{ background: "#C96F52", color: "#FCFAF5", fontSize: 16, fontWeight: 700 }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Step sidebar */}
      <div className="flex-shrink-0 flex flex-col px-6 py-8" style={{ width: 240, borderRight: "1px solid var(--border)", background: "#F4E9D8" }}>
        <div className="mb-6">
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1A3B2B" }}>Become a<br />Companion</h2>
          <p style={{ fontSize: 12, color: "#8B9E94", marginTop: 4 }}>Complete all steps to go live</p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {STEPS.map((s, i) => (
            <button
              key={s}
              onClick={() => i < step && setStep(i)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left"
              style={{
                background: i === step ? "#FCFAF53EE" : "transparent",
                cursor: i <= step ? "pointer" : "default",
              }}
            >
              <div
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: 28,
                  height: 28,
                  background: i < step ? "#C96F52" : i === step ? "#C96F52" : "#8B9E94",
                  color: i <= step ? "#FCFAF5" : "#8B9E94",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span style={{ fontSize: 13, fontWeight: i === step ? 700 : 500, color: i === step ? "#C96F52" : i < step ? "#2C4F3E" : "#8B9E94" }}>
                {s}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-10 py-8" style={{ scrollbarWidth: "none" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1A3B2B", marginBottom: 6 }}>{STEPS[step]}</h2>
          <p style={{ fontSize: 14, color: "#8B9E94", marginBottom: 24 }}>Step {step + 1} of {STEPS.length}</p>
          {STEP_CONTENT[step]}
        </div>

        <div className="px-10 py-5 flex items-center gap-4" style={{ borderTop: "1px solid var(--border)", background: "#FCFAF5" }}>
          {step > 0 && (
            <button onClick={() => setStep((s) => s - 1)} className="rounded-2xl px-6 py-3.5 flex items-center gap-2" style={{ background: "#F4E9D8", color: "#2C4F3E", fontSize: 15, fontWeight: 600 }}>
              <ArrowLeft size={16} /> Back
            </button>
          )}
          <button
            onClick={() => step === STEPS.length - 1 ? setSubmitted(true) : setStep((s) => s + 1)}
            className="rounded-2xl px-8 py-3.5 flex items-center gap-2 ml-auto"
            style={{ background: "#C96F52", color: "#FCFAF5", fontSize: 15, fontWeight: 700 }}
          >
            {step === STEPS.length - 1 ? "Submit Application" : "Continue"} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
