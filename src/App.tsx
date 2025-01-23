import { useState } from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import DocumentOverview from "./containers/DocumentOverview";
import DocumentComments from "./containers/DocumentComments";
import sidebarMenuButtons, {
  sidebarMenuButtonTypes,
} from "./constants/sidebarMenuButtons";
import TabButton from "./components/TabButton";

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
      <Sidebar>
        {sidebarMenuButtons.map((item) => (
          <TabButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            onClick={() => setSelectedView(item.id)}
            isSelected={selectedView === item.id}
          />
        ))}
      </Sidebar>
    </Card>
  );
}

export default App;
