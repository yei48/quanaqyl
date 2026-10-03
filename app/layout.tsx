import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuanAQYL A+ — Физика",
  description: "Изучай физику на русском, қазақша и English: задачи, диагностика, личный профиль и прогресс.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
