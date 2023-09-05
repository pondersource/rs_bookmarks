import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import PageNotFound from "./pages/404/PageNotFound";
import HomePage from "./pages/Home/HomePage";
import { remoteStorage } from "./utils/remoteStorage";

function App() {

remoteStorage.on('connected', () => {
    const userAddress = remoteStorage.remote.userAddress;
    console.debug(`EVENT: ${userAddress} connected their remote storage.`);
  })

  remoteStorage.on('network-offline', () => {
    console.debug(`EVENT: We're offline now.`);
  })

  remoteStorage.on('network-online', () => {
    console.debug(`EVENT: Hooray, we're back online.`);
  })
  remoteStorage.on('ready', () => {
    console.debug(`EVENT: ready.`);
  })
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* <Route path="/callback" element={<LoginCallBack />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/bookmarks" element={<BookmarksPage />} /> */}
        {/* <Route element={<PrivateRoute />}>
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
