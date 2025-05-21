// pages/HeaderDemo.tsx
import { Header } from '../components/Header';

const HeaderDemo = () => {
  return (
    <div>
      <Header />
      {/* Fake content to show scroll behavior */}
      <section id="hero" className="h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Hero Section</h1>
      </section>
      <section id="features" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Features Section</h2>
      </section>
      <footer id="footer" className="h-screen bg-gray-200 flex items-center justify-center">
        <p className="text-lg">Footer Section</p>
      </footer>
    </div>
  );
};

export default HeaderDemo;
