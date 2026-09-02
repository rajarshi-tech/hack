import { useState } from "react";
import { Header } from "./components/header/Header";
import { NavigationDrawer } from "./components/navigation/NavigationDrawer";
import { MapView } from "./components/map/MapView";
import { ConditionsBar } from "./components/conditions/ConditionsBar";
import { AIChatBar } from "./components/ai/AIChatBar";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {/* Header with menu button */}
      <Header onMenuClick={() => setDrawerOpen(true)} />

      {/* Navigation Drawer */}
      <NavigationDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />

      {/* Main content area - uses flex-1 with min-h-0 to allow proper flex shrinking */}
      <main className="flex flex-1 flex-col min-h-0">
        {/* Map takes remaining vertical space */}
        <MapView className="flex-1 min-h-0" />
        
        {/* Conditions bar below map */}
        <ConditionsBar />
      </main>

      {/* AI Chat Bar - sticky at bottom */}
      <AIChatBar />
    </div>
  );
}

export default App;
