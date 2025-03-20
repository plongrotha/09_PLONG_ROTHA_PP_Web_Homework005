import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-gray-200 w-full border">{children}</div>
      </body>
    </html>
  );
}
