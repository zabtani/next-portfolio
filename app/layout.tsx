import './globals.css';
import { Prompt } from 'next/font/google';
import Providers from './providers';
import Navbar from './components/Header/navbar';
import Main from './UI/main';

const abel = Prompt({ subsets: ['latin'], weight: '400' });
console.log(abel);
export const metadata = {
  title: 'Omer Zabtani Portfolio',
  description: 'web developer porfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${abel.className} w-screen h-screen flex flex-col transition ease-in-out min-h-screen duration-600 `}
      >
        <Providers>
          <Navbar />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
