import { Footer } from 'app/components/shared/Footer';
import { Header } from 'app/components/shared/Header';
import { Roboto } from 'next/font/google';
import 'app/sass/globals.sass'



const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
