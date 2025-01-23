import { useState } from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import DocumentOverview from "./containers/DocumentOverview";
import DocumentComments from "./containers/DocumentComments";
import sidebarMenuButtons, {
  sidebarMenuButtonTypes,
} from "./constants/sidebarMenuButtons";

function App() {
  const [selectedView, setSelectedView] = useState<number>(
    sidebarMenuButtonTypes.OVERVIEW
  );

  return (
    <Card>
      {selectedView === sidebarMenuButtonTypes.OVERVIEW ? (
        <DocumentOverview />
      ) : (
        <DocumentComments />
      )}
      <Sidebar
        menuOptions={sidebarMenuButtons}
        selectedMenu={selectedView}
        onMenuSelect={(view: number) => setSelectedView(view)}
      />
    </Card>
  );
}

export default App;
