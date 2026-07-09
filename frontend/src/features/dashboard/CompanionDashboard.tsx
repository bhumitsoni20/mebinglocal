import { useRouter } from 'next/navigation';

import { TrendingUp, Star, Calendar, Bell, Plus, Edit, MessageCircle, ArrowRight } from "lucide-react";
import { LOCAL_FRIENDS, REVIEWS } from "@/constants";

const BOOKINGS = [
  { id: 1, traveler: "Jessica M.", avatar: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=80&h=80&fit=crop", date: "Jun 20, 2025", time: "10:00 AM", duration: 3, status: "upcoming", amount: 36, type: "Food Tour" },
  { id: 2, traveler: "Marc B.", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop", date: "Jun 23, 2025", time: "2:00 PM", duration: 2, status: "upcoming", amount: 24, type: "Hidden Gems" },
  { id: 3, traveler: "Aiko T.", avatar: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=80&h=80&fit=crop", date: "Jun 14, 2025", time: "9:00 AM", duration: 4, status: "completed", amount: 48, type: "Cultural Walk" },
  { id: 4, traveler: "Lena W.", avatar: "https://images.unsplash.com/photo-1762331653506-ce47db22df53?w=80&h=80&fit=crop", date: "Jun 10, 2025", time: "11:00 AM", duration: 3, status: "completed", amount: 36, type: "Food Tour" },
];

export function CompanionDashboard() {
  const router = useRouter();
  const me = LOCAL_FRIENDS[0];
  const myReviews = REVIEWS.filter((r) => r.localFriendId === me.id);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-10 py-6"
        style={{ borderBottom: "1px solid var(--border)", background: "#fff" }}
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={me.avatar} alt={me.name} className="rounded-2xl object-cover" style={{ width: 56, height: 56 }} />
            <div className="absolute rounded-full flex items-center justify-center" style={{ width: 18, height: 18, background: "#0FB8B0", bottom: -3, right: -3, border: "2.5px solid #fff" }}>
              <span style={{ fontSize: 9, color: "#fff" }}>✓</span>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#111827", letterSpacing: "-0.01em" }}>
              Hi, {me.name.split(" ")[0]} 👋
            </h1>
            <p style={{ fontSize: 13, color: "#6B7280" }}>Companion · {me.city}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative rounded-full p-2.5" style={{ background: "#F1F5F9" }}>
            <Bell size={18} color="#374151" />
            <span className="absolute rounded-full" style={{ width: 8, height: 8, background: "#FF6B35", top: 6, right: 6, border: "1.5px solid #F1F5F9" }} />
          </button>
          <button className="rounded-xl px-4 py-2.5 flex items-center gap-2" style={{ background: "#F1F5F9", fontSize: 14, fontWeight: 600, color: "#374151" }}>
            <Edit size={15} /> Edit Profile
          </button>
          <button
            onClick={() => router.push("/app/events")}
            className="rounded-xl px-4 py-2.5 flex items-center gap-2"
            style={{ background: "#FF6B35", color: "#fff", fontSize: 14, fontWeight: 700 }}
          >
            <Plus size={15} /> Post Event
          </button>
        </div>
      </div>

      <div className="grid px-10 py-8 gap-8" style={{ gridTemplateColumns: "1fr 380px" }}>

        {/* ── Left column ── */}
        <div className="flex flex-col gap-6">
          {/* Earnings stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "This Month", value: "$890", change: "+24%", color: "#FF6B35", bg: "#FFF3EE" },
              { label: "This Week", value: "$144", change: "+12%", color: "#0FB8B0", bg: "#ECFDF5" },
              { label: "Pending Payout", value: "$216", change: "Fri Jun 21", color: "#8B5CF6", bg: "#F5F3FF" },
              { label: "Avg Rating", value: me.rating.toString(), change: `${me.reviewCount} reviews`, color: "#F59E0B", bg: "#FFFBEB" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.color}20` }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: s.color, marginTop: 8 }}>{s.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp size={12} color={s.color} />
                  <span style={{ fontSize: 12, color: "#6B7280" }}>{s.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Earnings chart */}
          <div className="rounded-3xl p-6" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-5">
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Weekly Earnings</h2>
              <div className="flex items-center gap-1.5" style={{ color: "#0FB8B0", fontSize: 13, fontWeight: 700 }}>
                <TrendingUp size={15} /> +24% this month
              </div>
            </div>
            <div className="flex items-end gap-3" style={{ height: 100 }}>
              {[
                { v: 45, day: "Mon" }, { v: 68, day: "Tue" }, { v: 52, day: "Wed" },
                { v: 89, day: "Thu" }, { v: 76, day: "Fri" }, { v: 110, day: "Sat" }, { v: 95, day: "Sun" },
              ].map(({ v, day }, i) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-1">
                  <span style={{ fontSize: 11, fontWeight: 600, color: i === 5 ? "#FF6B35" : "#9CA3AF" }}>${v}</span>
                  <div
                    className="w-full rounded-t-xl transition-all"
                    style={{ height: `${(v / 110) * 80}px`, background: i === 5 ? "#FF6B35" : i === 6 ? "#FFF3EE" : "#F1F5F9", border: i === 5 ? "none" : "1px solid #E5E7EB" }}
                  />
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bookings */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Bookings</h2>
              <div className="flex gap-2">
                <span className="rounded-full px-3 py-1" style={{ fontSize: 12, fontWeight: 700, background: "#FFF3EE", color: "#FF6B35" }}>
                  {BOOKINGS.filter((b) => b.status === "upcoming").length} Upcoming
                </span>
                <span className="rounded-full px-3 py-1" style={{ fontSize: 12, fontWeight: 700, background: "#ECFDF5", color: "#059669" }}>
                  {BOOKINGS.filter((b) => b.status === "completed").length} Completed
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              {/* Table header */}
              <div className="grid px-5 py-3" style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr", background: "#FAFAF8", fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <span>Traveler</span>
                <span>Date & Time</span>
                <span>Type</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              {BOOKINGS.map((b, i) => (
                <div
                  key={b.id}
                  className="grid items-center px-5 py-4"
                  style={{
                    gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr",
                    borderTop: i === 0 ? "none" : "1px solid #F1F5F9",
                    background: "#fff",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img src={b.avatar} alt={b.traveler} className="rounded-xl object-cover" style={{ width: 38, height: 38 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{b.traveler}</div>
                      <div style={{ fontSize: 11, color: "#9CA3AF" }}>{b.duration}h session</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{b.date}</div>
                    <div style={{ fontSize: 12, color: "#9CA3AF" }}>{b.time}</div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{b.type}</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>${b.amount}</span>
                  <span
                    className="inline-block rounded-full px-3 py-1 self-start"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      background: b.status === "upcoming" ? "#FFF3EE" : "#ECFDF5",
                      color: b.status === "upcoming" ? "#FF6B35" : "#059669",
                    }}
                  >
                    {b.status === "upcoming" ? "Upcoming" : "Done"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6">
          {/* Profile card */}
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <img src={me.coverPhoto} alt={me.city} className="w-full object-cover" style={{ height: 120 }} />
            <div className="p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} color="#FF6B35" fill={i < Math.floor(me.rating) ? "#FF6B35" : "none"} />)}
                <span style={{ fontSize: 13, fontWeight: 800, color: "#111827", marginLeft: 4 }}>{me.rating}</span>
              </div>
              <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 12 }}>
                {me.reviewCount} reviews · {me.completedTours} tours completed
              </div>
              <div className="flex flex-col gap-1.5">
                {me.interests.slice(0, 3).map((i) => (
                  <span key={i} className="inline-flex items-center gap-2" style={{ fontSize: 13, color: "#374151" }}>
                    <span className="rounded-full" style={{ width: 6, height: 6, background: "#FF6B35", display: "inline-block" }} />
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>Recent Reviews</h3>
              <button onClick={() => router.push(`/app/reviews/${me.id}`)} className="flex items-center gap-1" style={{ fontSize: 13, fontWeight: 600, color: "#FF6B35" }}>
                See all <ArrowRight size={13} />
              </button>
            </div>
            {myReviews.map((r) => (
              <div key={r.id} className="rounded-2xl p-4 mb-3" style={{ background: "#FAFAF8", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <img src={r.avatar} alt={r.author} className="rounded-full object-cover" style={{ width: 32, height: 32 }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{r.author}</span>
                  <div className="flex ml-auto">
                    {[...Array(r.rating)].map((_, i) => <span key={i} style={{ color: "#FF6B35", fontSize: 12 }}>★</span>)}
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>"{r.comment.slice(0, 100)}…"</p>
              </div>
            ))}
          </div>

          {/* Messages */}
          <div className="rounded-2xl p-5" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#111827" }}>Messages</h3>
              <span className="rounded-full px-2 py-0.5" style={{ fontSize: 11, fontWeight: 700, background: "#FFF3EE", color: "#FF6B35" }}>2 new</span>
            </div>
            {[
              { name: "Jessica M.", msg: "Looking forward to our food tour!", time: "2h ago" },
              { name: "Marc B.", msg: "Is Sunday also available?", time: "5h ago" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid #F1F5F9" }}>
                <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 38, height: 38, background: "#FFF3EE", fontWeight: 700, color: "#FF6B35", fontSize: 14 }}>
                  {m.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{m.name}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.msg}</div>
                </div>
                <span style={{ fontSize: 11, color: "#9CA3AF", flexShrink: 0 }}>{m.time}</span>
              </div>
            ))}
            <button className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl py-2.5" style={{ background: "#F1F5F9", fontSize: 13, fontWeight: 600, color: "#374151" }}>
              <MessageCircle size={15} /> Open Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
