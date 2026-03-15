import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Rekayasa Keolahragaan ITERA",
  description: "Website resmi Program Studi Rekayasa Keolahragaan ITERA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}