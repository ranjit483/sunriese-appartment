import type {Metadata} from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'Sunrise Apartment Management System',
  description: 'Multi-role Apartment Residence, Rental, Billing, Accounting, Maintenance & Society Management ERP Dashboard.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
