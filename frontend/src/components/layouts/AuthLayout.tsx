import logo from "/images/logo.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout py-10 md:pt-0">
      <header className="px-6 w-full hidden md:block">
        <img src={logo} alt="TDS-logo" className="w-44" />
      </header>
      <div className="flex justify-center items-center px-6 md:px-0 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
