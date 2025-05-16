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
      <body className="bg-base-100 text-base-content font-sans min-h-screen flex flex-col">
        <Navbar />
        {/* Added padding-top to offset the fixed navbar height */}
        <main className="flex-1 w-full px-2 sm:px-4 md:px-8 pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
