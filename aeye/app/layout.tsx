"use client";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
