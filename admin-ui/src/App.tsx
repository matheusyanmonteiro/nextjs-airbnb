import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ListingList } from "./listing/ListingList";
import { ListingCreate } from "./listing/ListingCreate";
import { ListingEdit } from "./listing/ListingEdit";
import { ListingShow } from "./listing/ListingShow";
import { WhishlistList } from "./whishlist/WhishlistList";
import { WhishlistCreate } from "./whishlist/WhishlistCreate";
import { WhishlistEdit } from "./whishlist/WhishlistEdit";
import { WhishlistShow } from "./whishlist/WhishlistShow";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"air-bnb-generic"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Listing"
          list={ListingList}
          edit={ListingEdit}
          create={ListingCreate}
          show={ListingShow}
        />
        <Resource
          name="Whishlist"
          list={WhishlistList}
          edit={WhishlistEdit}
          create={WhishlistCreate}
          show={WhishlistShow}
        />
        <Resource
          name="Trip"
          list={TripList}
          edit={TripEdit}
          create={TripCreate}
          show={TripShow}
        />
      </Admin>
    </div>
  );
};

export default App;
