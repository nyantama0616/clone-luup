import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { DesignContextProvider } from "@/commons/contexts/DesignContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUUP（ループ） | 電動キックボードシェア/シェアサイクルアプリ | Luup（ループ） | 電動キックボードシェア/シェアサイクルアプリ",
  description: "LUUPは、スマホ一つで街じゅうのポートから電動マイクロモビリティへの乗り降りや移動を可能にするシェアリングサービスです。LUUPのポートを街じゅうに設置することで、人が集まる場所をつくり、街じゅうを駅前のように活性化していきます。そして、年齢に関係なく誰もが安全にサステナブルかつ快適に移動ができる未来のインフラをつくることを目指しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <DesignContextProvider>
          {children}
        </DesignContextProvider>
      </body>
    </html>
  );
}
