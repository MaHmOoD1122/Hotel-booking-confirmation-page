import PageHeader from "./PageHeader/PageHeader";
import SideBar from "./SideBarFolder/SideBar";
import CardsContainer from "./CardsContainer/CardsContainer";
import InfoCards from "./InfoCardsFolder/InfoCards";
export default function App() {
  return (
    <main className="main">
      <SideBar />
      <div className="main-content">
        <PageHeader name="Lucia" status="CONFIRMED" />
        <CardsContainer />
        <InfoCards />
      </div>
    </main>
  );
}
