import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import AppLogo from "./AppLogo";

type IProps = {};

const AppHeader: FC<IProps> = ({ }) => {



  return (
    <AppBar
      position="static"
      variant="elevation"
      color="default"
      enableColorOnDark
    // sx={{ borderRadius: 2, overflow: "hidden" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flex={1}
            gap={1}
          >
            <Box flex={2} display="flex" justifyContent="flex-start">
              <AppLogo />
            </Box>
            <Box
              flex={8}
              sx={{
                display: "flex",
                // display: {
                //   xs: "none",
                //   sm: "flex",
                // },
                gap: 2,
              }}
              justifyContent="center"
            >
            </Box>
            <Box flex={2} display="flex" justifyContent="flex-end">
              <div id="my-parent-element-id">
                <p></p>
              </div>
              {/* {!isLoggedIn && <AppLoginDialog />}
              {isLoggedIn && <AppProfileMenu />} */}
              {/* {isLoggedIn && <Button onClick={() => logout()}>O</Button>} */}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;