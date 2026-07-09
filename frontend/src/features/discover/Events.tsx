import { useState } from "react";
import { useRouter } from 'next/navigation';

import { Search, Users, MapPin, Calendar, Plus } from "lucide-react";
import { EVENTS } from "@/constants";

const TABS = ["All", "Festival", "Market", "Cultural", "Food", "Art & Music"];

export function Events() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = EVENTS.filter((e) => {
    if (activeTab !== "All" && e.category !== activeTab) return false;
    if (search && !e.title.toLowerCase().includes(search.toLowerCase()) && !e.city.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <div className="px-10 py-6" style={{ borderBottom: "1px solid var(--border)", background: "#fff" }}>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
              Local Events Feed 🎉
            </h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginTop: 2 }}>
              Festivals, melas, cultural experiences & hidden local gems
            </p>
          </div>
          <button
            onClick={() => router.push("/app/local-dashboard")}
            className="flex items-center gap-2 rounded-2xl px-5 py-3"
            style={{ background: "#FF6B35", color: "#fff", fontSize: 14, fontWeight: 700 }}
          >
            <Plus size={16} /> Post an Experience
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 flex-1" style={{ background: "#F1F5F9", maxWidth: 400 }}>
            <Search size={16} color="#6B7280" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, cities…"
              className="bg-transparent outline-none flex-1"
              style={{ fontSize: 14, color: "#111827", border: "none" }}
            />
          </div>
          <div className="flex gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="rounded-full px-4 py-2"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  background: activeTab === tab ? "#FF6B35" : "#F1F5F9",
                  color: activeTab === tab ? "#fff" : "#6B7280",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-10 py-8">
        {/* Featured event */}
        <div className="rounded-3xl overflow-hidden mb-8 relative" style={{ height: 280 }}>
          <img src={EVENTS[0].image} alt={EVENTS[0].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 40%, transparent 100%)" }}>
            <div className="flex flex-col justify-center p-10" style={{ maxWidth: 500 }}>
              <span className="inline-block rounded-full px-4 py-1.5 self-start mb-4" style={{ fontSize: 12, fontWeight: 700, background: "#FF6B35", color: "#fff" }}>
                ⭐ Featured Event
              </span>
              <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{EVENTS[0].title}</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 16 }}>{EVENTS[0].description}</p>
              <div className="flex items-center gap-6 mb-6">
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>📍 {EVENTS[0].city}</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>📅 {EVENTS[0].date}</span>
                <div className="flex items-center gap-1.5">
                  <Users size={14} color="rgba(255,255,255,0.8)" />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{EVENTS[0].attendees} going</span>
                </div>
              </div>
              <button className="self-start rounded-2xl px-6 py-3" style={{ background: "#fff", color: "#111827", fontSize: 14, fontWeight: 700 }}>
                I'm Going 🎊
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginBottom: 16 }}>
          {activeTab === "All" ? "All Events" : activeTab} ({filtered.length})
        </h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {filtered.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "#fff", border: "1px solid var(--border)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
            >
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full object-cover" style={{ height: 150 }} />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1"
                  style={{ fontSize: 11, fontWeight: 700, background: "#FF6B35", color: "#fff" }}
                >
                  {event.category}
                </span>
              </div>

              <div className="p-4">
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.3, marginBottom: 8 }}>{event.title}</h3>
                <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 10 }}>
                  {event.description.slice(0, 75)}…
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={11} color="#9CA3AF" />
                    <span style={{ fontSize: 11, color: "#6B7280" }}>{event.city.split(",")[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={11} color="#9CA3AF" />
                    <span style={{ fontSize: 11, color: "#6B7280" }}>{event.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Users size={13} color="#0FB8B0" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#0FB8B0" }}>{event.attendees} going</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-xl px-3 py-1.5" style={{ fontSize: 12, fontWeight: 600, background: "#F1F5F9", color: "#374151" }}>
                      Save
                    </button>
                    <button className="rounded-xl px-3 py-1.5" style={{ fontSize: 12, fontWeight: 700, background: "#FF6B35", color: "#fff" }}>
                      Join
                    </button>
                  </div>
                </div>
                <div className="mt-3 pt-3" style={{ borderTop: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>Posted by <strong style={{ color: "#374151" }}>{event.postedBy}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
