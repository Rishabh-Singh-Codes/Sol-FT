import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="md:px-40 min-w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] font-rubik">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
