import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trang Chủ Đẹp Mắt Của Tôi", // Thay bằng tiêu đề bạn muốn
  description: "Một mô tả hấp dẫn về trang web của bạn.", // Thay bằng mô tả bạn muốn
  icons: {
    icon: "/favicon.ico", // Hoặc đường dẫn đến tệp biểu tượng của bạn, ví dụ: '/icon.png'
    // apple: "/apple-icon.png", // Tùy chọn: cho thiết bị Apple
    // shortcut: "/shortcut-icon.png" // Tùy chọn: cho shortcut
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
