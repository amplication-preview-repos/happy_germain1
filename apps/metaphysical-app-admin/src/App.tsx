import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SpellBookList } from "./spellBook/SpellBookList";
import { SpellBookCreate } from "./spellBook/SpellBookCreate";
import { SpellBookEdit } from "./spellBook/SpellBookEdit";
import { SpellBookShow } from "./spellBook/SpellBookShow";
import { RitualList } from "./ritual/RitualList";
import { RitualCreate } from "./ritual/RitualCreate";
import { RitualEdit } from "./ritual/RitualEdit";
import { RitualShow } from "./ritual/RitualShow";
import { JournalList } from "./journal/JournalList";
import { JournalCreate } from "./journal/JournalCreate";
import { JournalEdit } from "./journal/JournalEdit";
import { JournalShow } from "./journal/JournalShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { TarotReadingList } from "./tarotReading/TarotReadingList";
import { TarotReadingCreate } from "./tarotReading/TarotReadingCreate";
import { TarotReadingEdit } from "./tarotReading/TarotReadingEdit";
import { TarotReadingShow } from "./tarotReading/TarotReadingShow";
import { TarotSpreadList } from "./tarotSpread/TarotSpreadList";
import { TarotSpreadCreate } from "./tarotSpread/TarotSpreadCreate";
import { TarotSpreadEdit } from "./tarotSpread/TarotSpreadEdit";
import { TarotSpreadShow } from "./tarotSpread/TarotSpreadShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MetaphysicalApp"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SpellBook"
          list={SpellBookList}
          edit={SpellBookEdit}
          create={SpellBookCreate}
          show={SpellBookShow}
        />
        <Resource
          name="Ritual"
          list={RitualList}
          edit={RitualEdit}
          create={RitualCreate}
          show={RitualShow}
        />
        <Resource
          name="Journal"
          list={JournalList}
          edit={JournalEdit}
          create={JournalCreate}
          show={JournalShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
        <Resource
          name="TarotReading"
          list={TarotReadingList}
          edit={TarotReadingEdit}
          create={TarotReadingCreate}
          show={TarotReadingShow}
        />
        <Resource
          name="TarotSpread"
          list={TarotSpreadList}
          edit={TarotSpreadEdit}
          create={TarotSpreadCreate}
          show={TarotSpreadShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
