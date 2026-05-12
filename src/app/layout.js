import "./globals.css";

export const metadata = {
  title: "LuxEstate — Premium UAE Luxury Real Estate",
  description:
    "Discover the most exclusive properties across Dubai, Abu Dhabi and beyond. Curated luxury villas, penthouses, and off-plan investments by LuxEstate.",
  keywords: [
    "Dubai real estate",
    "luxury property UAE",
    "Palm Jumeirah villas",
    "Dubai Marina penthouse",
    "off-plan investment Dubai",
  ],
  openGraph: {
    title: "LuxEstate — Premium UAE Luxury Real Estate",
    description:
      "Architectural excellence in every detail. Discover curated luxury properties across the UAE.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
