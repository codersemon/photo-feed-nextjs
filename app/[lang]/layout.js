// dependencies
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "Photo Feed APP",
  description: "Developed by Emon Khan",
};

export default function RootLayout({ children, photoModal, params: { lang } }) {

  return (
    <html lang={lang}>
      <body>
        <Header />
        <div className="container my-4 lg:my-8">
          {photoModal}
          {children}
        </div>
      </body>
    </html>
  );
}
