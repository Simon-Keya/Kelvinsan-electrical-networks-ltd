// app/layout.tsx
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Kelvinsan Electrical Networks Ltd',
  description: 'Networking & Software Solutions for Your Business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content font-sans">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8 md:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
