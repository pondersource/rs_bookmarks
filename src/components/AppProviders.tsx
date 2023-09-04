import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AppThemeProvider from "./AppProviders/AppThemeProvider";
type IProps = {
  children: React.ReactElement;
};

const AppProviders: FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppThemeProvider>
            <CssBaseline />
            {children}
          </AppThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default AppProviders;
