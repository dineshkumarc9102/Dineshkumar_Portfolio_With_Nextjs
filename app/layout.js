import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: {
    default: "Dinesh Kumar | Full Stack Developer Portfolio",
    template: "%s | Dinesh Kumar"
  },
  description: "Portfolio of Dinesh Kumar, a passionate Full Stack Developer specializing in building modern, scalable, and responsive web applications.",
  keywords: ["Dinesh Kumar", "Web Developer", "Full Stack Developer", "React Developer", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Dinesh Kumar" }],
  creator: "Dinesh Kumar",
  metadataBase: new URL("https://dineshkumar-portfolio-website.netlify.app"), 
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dinesh Kumar | Full Stack Developer Portfolio",
    description: "Explore the projects, technical journey, and achievements of Dinesh Kumar.",
    url: "https://dineshkumar-portfolio-website.netlify.app", 
    siteName: "Dinesh Kumar Portfolio",
    images: [
      {
        url: "/favicon.svg", // Ensure you add this image to your /public folder
        width: 1200,
        height: 630,
        alt: "Dinesh Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Kumar | Full Stack Developer Portfolio",
    description: "Explore the projects, technical journey, and achievements of Dinesh Kumar.",
    images: ["/favicon.svg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
        dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
