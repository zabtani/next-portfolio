import './globals.css';
import { Quicksand } from 'next/font/google';
import Providers from './providers';
import Navbar from './components/Header/navbar';
import Main from './components/UI/main';
import API from '@/app/api/methods';

const abel = Quicksand({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Omer Zabtani Portfolio',
  description: 'web developer porfolio',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { owner_avatar, owner_name } = await API.getMainPorfolioInfo();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${abel.className} w-screen h-screen flex flex-col transition ease-in-out min-h-screen duration-600 `}
      >
        <Providers>
          <Navbar avatarSrc={owner_avatar} />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
