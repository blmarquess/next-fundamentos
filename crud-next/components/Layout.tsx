import NavBar from './NavBar';
import Footer from './Footer';

interface iLayout {
  children: JSX.Element
}

export default function Layout({ children }: iLayout):JSX.Element {
  return (
    <div>
      <header className="max-h-36 w-full">
        <NavBar />
      </header>
      <main className="flex flex-1 grow-1 w-full min-h-screen justify-center">
        {children}
      </main>
      <footer className="max-h-24 w-full">
        <Footer />
      </footer>
    </div>
  );
}
