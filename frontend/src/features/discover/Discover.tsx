import { useState } from "react";
import { useRouter } from 'next/navigation';

import { Search, Star, SlidersHorizontal, MapPin } from "lucide-react";
import { LOCAL_FRIENDS } from "@/constants";

const LANGUAGES = ["All", "English", "Spanish", "Japanese", "Hindi", "French", "Arabic"];
const INTERESTS = ["All", "Food Tours", "Cultural Walks", "Photography", "Hidden Gems", "Shopping", "History"];
const SORT_OPTIONS = ["Top Rated", "Price: Low to High", "Price: High to Low", "Most Reviews"];

export function Discover() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [womenOnly, setWomenOnly] = useState(false);
  const [maxRate, setMaxRate] = useState(50);
  const [minRating, setMinRating] = useState(0);
  const [selectedLang, setSelectedLang] = useState("All");
  const [selectedInterest, setSelectedInterest] = useState("All");
  const [sort, setSort] = useState("Top Rated");

  const filtered = LOCAL_FRIENDS.filter((lf) => {
    if (womenOnly && !lf.womenOnly) return false;
    if (lf.hourlyRate > maxRate) return false;
    if (lf.rating < minRating) return false;
    if (selectedLang !== "All" && !lf.languages.includes(selectedLang)) return false;
    if (selectedInterest !== "All" && !lf.interests.some((i) => i.includes(selectedInterest))) return false;
    if (search && !lf.name.toLowerCase().includes(search.toLowerCase()) && !lf.city.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex h-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Filter Sidebar ── */}
      <aside
        className="flex-shrink-0 flex flex-col overflow-y-auto"
        style={{ width: 280, borderRight: "1px solid var(--border)", background: "#fff", scrollbarWidth: "none" }}
      >
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal size={18} color="#374151" />
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Filters</h2>
          </div>

          {/* Women-only toggle */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>Women-Only 💜</div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Female companions only</div>
              </div>
              <button
                onClick={() => setWomenOnly(!womenOnly)}
                className="rounded-full transition-colors"
                style={{ width: 44, height: 24, background: womenOnly ? "#EC4899" : "#D1D5DB", position: "relative" }}
              >
                <span
                  className="absolute rounded-full"
                  style={{ width: 18, height: 18, background: "#fff", top: 3, left: womenOnly ? 23 : 3, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
                />
              </button>
            </div>
          </div>

          {/* Price range */}
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>Max Price / hr</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#FF6B35" }}>${maxRate}</span>
            </div>
            <input type="range" min={5} max={60} value={maxRate} onChange={(e) => setMaxRate(Number(e.target.value))} className="w-full" style={{ accentColor: "#FF6B35" }} />
            <div className="flex justify-between mt-1">
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>$5</span>
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>$60</span>
            </div>
          </div>

          {/* Min rating */}
          <div className="mb-6">
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10 }}>Minimum Rating</span>
            <div className="flex gap-2">
              {[0, 4.5, 4.8, 4.9].map((r) => (
                <button
                  key={r}
                  onClick={() => setMinRating(r)}
                  className="flex-1 rounded-xl py-2 flex items-center justify-center gap-1"
                  style={{
                    fontSize: 12, fontWeight: 600,
                    background: minRating === r ? "#FFF3EE" : "#F1F5F9",
                    color: minRating === r ? "#FF6B35" : "#6B7280",
                    border: minRating === r ? "1.5px solid #FF6B35" : "1.5px solid transparent",
                  }}
                >
                  {r === 0 ? "Any" : <><Star size={10} fill="#FF6B35" color="#FF6B35" /> {r}</>}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="mb-6">
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10 }}>Language</span>
            <div className="flex flex-col gap-1.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => setSelectedLang(l)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-left"
                  style={{
                    fontSize: 13,
                    background: selectedLang === l ? "#FFF3EE" : "transparent",
                    color: selectedLang === l ? "#FF6B35" : "#374151",
                    fontWeight: selectedLang === l ? 700 : 400,
                  }}
                >
                  <span
                    className="rounded-full flex-shrink-0"
                    style={{ width: 16, height: 16, border: `2px solid ${selectedLang === l ? "#FF6B35" : "#D1D5DB"}`, background: selectedLang === l ? "#FF6B35" : "transparent" }}
                  />
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10 }}>Interests</span>
            <div className="flex gap-2 flex-wrap">
              {INTERESTS.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedInterest(i)}
                  className="rounded-full px-3 py-1.5"
                  style={{
                    fontSize: 12, fontWeight: 600,
                    background: selectedInterest === i ? "#0FB8B0" : "#F1F5F9",
                    color: selectedInterest === i ? "#fff" : "#374151",
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ── Results area ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-4 px-8 py-5" style={{ borderBottom: "1px solid var(--border)", background: "#fff" }}>
          <div className="flex-1 flex items-center gap-3 rounded-2xl px-5 py-3" style={{ background: "#F1F5F9" }}>
            <Search size={18} color="#6B7280" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city or name…"
              className="bg-transparent outline-none flex-1"
              style={{ fontSize: 14, color: "#111827", border: "none" }}
            />
          </div>

          <div className="flex items-center gap-2">
            <span style={{ fontSize: 13, color: "#6B7280" }}>Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl px-3 py-2 outline-none"
              style={{ fontSize: 13, fontWeight: 600, background: "#F1F5F9", border: "none", color: "#374151", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div
            className="rounded-full px-4 py-1.5"
            style={{ fontSize: 13, fontWeight: 700, background: "#FFF3EE", color: "#FF6B35" }}
          >
            {filtered.length} found
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto px-8 py-6" style={{ scrollbarWidth: "none" }}>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {filtered.map((lf) => (
              <button
                key={lf.id}
                onClick={() => router.push(`/app/profile/${lf.id}`)}
                className="rounded-3xl overflow-hidden text-left w-full transition-all hover:-translate-y-1 hover:shadow-xl group"
                style={{ background: "#fff", border: "1px solid #F1F5F9", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
              >
                <div className="relative">
                  <img src={lf.coverPhoto} alt={lf.city} className="w-full object-cover" style={{ height: 160 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {lf.womenOnly && (
                      <span className="rounded-full px-2.5 py-1" style={{ fontSize: 10, fontWeight: 700, background: "#8B5CF6", color: "#fff" }}>
                        Women-Only
                      </span>
                    )}
                    {lf.verified && (
                      <span className="rounded-full px-2.5 py-1" style={{ fontSize: 10, fontWeight: 700, background: "#0FB8B0", color: "#fff" }}>
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <img
                    src={lf.avatar}
                    alt={lf.name}
                    className="absolute rounded-2xl object-cover"
                    style={{ width: 50, height: 50, bottom: -18, left: 18, border: "3px solid #fff" }}
                  />
                </div>

                <div className="px-5 pt-7 pb-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>{lf.name}, {lf.age}</div>
                      <div className="flex items-center gap-1" style={{ fontSize: 12, color: "#6B7280" }}>
                        <MapPin size={11} /> {lf.city}, {lf.country}
                      </div>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#111827" }}>
                      ${lf.hourlyRate}<span style={{ fontSize: 11, fontWeight: 400, color: "#9CA3AF" }}>/hr</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1">
                    <Star size={13} color="#FF6B35" fill="#FF6B35" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{lf.rating}</span>
                    <span style={{ fontSize: 12, color: "#9CA3AF" }}>({lf.reviewCount} reviews)</span>
                    <span style={{ fontSize: 12, color: "#9CA3AF", marginLeft: "auto" }}>⏱ {lf.responseTime}</span>
                  </div>

                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginTop: 8 }}>
                    {lf.bio.slice(0, 90)}…
                  </p>

                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {lf.interests.slice(0, 3).map((i) => (
                      <span key={i} className="rounded-full px-2.5 py-1" style={{ fontSize: 11, background: "#FFF3EE", color: "#FF6B35", fontWeight: 600 }}>
                        {i}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); router.push(`/app/profile/${lf.id}`); }}
                      className="flex-1 rounded-xl py-2.5"
                      style={{ fontSize: 13, fontWeight: 600, background: "#F1F5F9", color: "#374151" }}
                    >
                      View Profile
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); router.push(`/app/booking/${lf.id}`); }}
                      className="flex-1 rounded-xl py-2.5"
                      style={{ fontSize: 13, fontWeight: 700, background: "#FF6B35", color: "#fff" }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>No Companions found</div>
              <div style={{ fontSize: 14, color: "#6B7280", marginTop: 6 }}>Try adjusting your filters</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
