import Navbar from "@/app/components/Navbar";
import { Container } from "@mui/material";
import OnlineUserSpeedDial from "@/app/onlineUserSpeedDial";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <Navbar />
        <div>{children}</div>
      </Container>
      <OnlineUserSpeedDial />
    </>
  );
}
