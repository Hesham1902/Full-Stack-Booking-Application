import BottomNav from "./BottomNav";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-[#f7f8fa] min-h-screen">
        <div className="container py-14">{children}</div>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
};

export default MainLayout;
