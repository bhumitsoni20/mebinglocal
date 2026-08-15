import { useRouter, usePathname } from 'next/navigation';

import {
  Compass,
  Calendar,
  Home,
  Shield,
  User,
  MapPin,
  Bell,
  MessageCircle,
  ChevronRight,
  Settings,
  Users,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Home", path: "/app" },
  { icon: Compass, label: "Discover", path: "/app/discover" },
  { icon: Calendar, label: "Events", path: "/app/events" },
  { icon: Shield, label: "Safety", path: "/app/safety" },
];

const BOTTOM_NAV = [
  { icon: User, label: "My Profile", path: "/app/local-dashboard" },
  { icon: Settings, label: "Settings", path: "/app" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) =>
    path === "/app"
      ? pathname === "/app"
      : pathname.startsWith(path);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "var(--background)" }}
    >
      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col h-full flex-shrink-0"
        style={{
          width: 260,
          background: "#fff",
          borderRight: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <div
            className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ width: 40, height: 40, background: "linear-gradient(135deg, #FF6B35, #FF8C42)" }}
          >
            <MapPin size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#111827", letterSpacing: "-0.02em" }}>
            Mebing<span style={{ color: "#FF6B35" }}>Local</span>
          </span>
        </div>

        {/* Search user */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5" style={{ background: "#F1F5F9" }}>
            <div
              className="rounded-full overflow-hidden flex-shrink-0"
              style={{ width: 34, height: 34 }}
            >
              <img
                src="https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=80&h=80&fit=crop&auto=format"
                alt="You"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Jessica M.</div>
              <div style={{ fontSize: 11, color: "#6B7280" }}>Solo Traveler</div>
            </div>
            <div className="relative">
              <Bell size={16} color="#6B7280" />
              <span
                className="absolute rounded-full"
                style={{ width: 7, height: 7, background: "#FF6B35", top: -2, right: -2, border: "1.5px solid #F1F5F9" }}
              />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          <p style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", padding: "8px 12px 4px" }}>
            Menu
          </p>
          {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
            const active = isActive(path);
            return (
              <button
                key={path}
                onClick={() => router.push(path)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-left w-full transition-all group"
                style={{
                  background: active ? "#FFF3EE" : "transparent",
                  color: active ? "#FF6B35" : "#374151",
                  fontWeight: active ? 700 : 500,
                  fontSize: 14,
                }}
              >
                <Icon
                  size={18}
                  strokeWidth={active ? 2.5 : 1.8}
                  color={active ? "#FF6B35" : "#6B7280"}
                />
                {label}
                {active && <ChevronRight size={14} color="#FF6B35" className="ml-auto" />}
              </button>
            );
          })}

          <p style={{ fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 12px 4px" }}>
            My Space
          </p>
          {[
            { icon: User, label: "My Profile", path: "/app/local-dashboard" },
            { icon: Users, label: "Become a Local", path: "/app/become-local" },
            { icon: MessageCircle, label: "Messages", path: "/app" },
          ].map(({ icon: Icon, label, path }) => {
            const active = isActive(path) && path !== "/app";
            return (
              <button
                key={label}
                onClick={() => router.push(path)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-left w-full transition-all"
                style={{
                  background: active ? "#FFF3EE" : "transparent",
                  color: active ? "#FF6B35" : "#374151",
                  fontWeight: active ? 700 : 500,
                  fontSize: 14,
                }}
              >
                <Icon size={18} strokeWidth={1.8} color={active ? "#FF6B35" : "#6B7280"} />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Bottom: Safety CTA */}
        <div className="px-4 pb-6 pt-2">
          <button
            onClick={() => router.push("/app/safety")}
            className="w-full rounded-2xl p-4 flex items-center gap-3 transition-all"
            style={{
              background: isActive("/app/safety") ? "#111827" : "linear-gradient(135deg, #111827, #1E293B)",
              boxShadow: "0 4px 20px rgba(17,24,39,0.2)",
            }}
          >
            <div
              className="rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ width: 36, height: 36, background: "rgba(255,255,255,0.12)" }}
            >
              <Shield size={18} color="#fff" />
            </div>
            <div className="text-left">
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Safety Center</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>SOS · Location · Contacts</div>
            </div>
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {children}
      </div>
    </div>
  );
}
