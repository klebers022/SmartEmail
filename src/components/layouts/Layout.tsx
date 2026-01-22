import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
}
