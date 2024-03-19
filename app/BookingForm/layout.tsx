"use client";
import { SessionProvider } from "next-auth/react";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <SessionProvider>{children}</SessionProvider>
      </div>
    </section>
  );
}
