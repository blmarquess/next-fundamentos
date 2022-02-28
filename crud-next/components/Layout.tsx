import NavBar from './NavBar';
import Footer from './Footer';

interface iLayout {
  children: JSX.Element
}

export default function Layout({ children }: iLayout):JSX.Element {
  return (
    <div>
      <header className="h-36 w-full fixed">
        <NavBar />
      </header>
      <main className="mt-0 flex flex-1 grow-1 h-full w-full">
        {children}
      </main>
      <footer className="h-36 w-full">
        <Footer />
      </footer>
    </div>
  );
}
