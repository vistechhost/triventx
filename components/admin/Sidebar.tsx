"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/services", label: "Services", icon: FileText, exact: false },
  { href: "/admin/images", label: "Images", icon: Image, exact: false },
  { href: "/admin/leads", label: "Leads", icon: Users, exact: false },
  {
    href: "/admin/site-settings",
    label: "Site Settings",
    icon: Settings,
    exact: false,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className={cn(
          "flex items-center gap-3 p-5 border-b border-slate-700",
          collapsed && "justify-center",
        )}
      >
        <Logo iconOnly={collapsed} variant="white" className="gap-2" />
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-3 space-y-1" aria-label="Admin navigation">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 group",
                active
                  ? "bg-primary text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/10",
                collapsed && "justify-center px-2",
              )}
              aria-current={active ? "page" : undefined}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 shrink-0",
                  active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white",
                )}
              />
              {!collapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {active && <ChevronRight className="w-4 h-4" />}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-red-500/20 transition-all",
            collapsed && "justify-center",
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col bg-[#0D1520] border-r border-slate-700/50 transition-all duration-300 shrink-0",
          collapsed ? "w-16" : "w-64",
        )}
        aria-label="Admin sidebar"
      >
        <SidebarContent />
      </aside>

      {/* Toggle Button - Now more accessible */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        className={cn(
          "hidden md:flex fixed top-6 z-50 w-8 h-8 bg-primary hover:bg-primary-dark rounded-lg items-center justify-center shadow-lg shadow-primary/20 transition-all duration-300 border border-white/10",
          collapsed ? "left-20" : "left-[272px]",
        )}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronRight
          className={cn(
            "w-4 h-4 text-white transition-transform",
            collapsed ? "" : "rotate-180",
          )}
        />
      </button>

      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#0D1520] rounded-xl flex items-center justify-center text-white border border-slate-700"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="md:hidden fixed left-0 top-0 bottom-0 w-64 bg-[#0D1520] z-50 flex flex-col">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
