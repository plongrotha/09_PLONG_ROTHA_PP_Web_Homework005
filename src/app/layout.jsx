import SideBarComponent from "./components/SideBarComponent";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    // all the component it wrap all to render
    <html lang="en">
      <body>
        <div className="flex bg-gray-200">
          <SideBarComponent />
          {children}
        </div>
      </body>
    </html>
  );
}
