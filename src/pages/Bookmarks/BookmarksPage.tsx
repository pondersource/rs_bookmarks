import AppFlex from "@/components/Shared/AppFlex";
import { FC, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField
} from "@mui/material";
type IProps = {};

const BookmarksPage: FC<IProps> = ({ }) => {
  const [bookmarkTitle, setbookmarkTitle] = useState("");
  const [bookmarkLink, setbookmarkLink] = useState("");

  return (
    <AppFlex>
      <Box>
        <Card sx={{ maxWidth: 520, borderRadius: 2 }}>
          <CardContent>
            <AppFlex sx={{ gap: 1 }}>
              <TextField
                onChange={(e) => setbookmarkTitle(e.target.value)}
                label="Title"
                value={bookmarkTitle}
                size="small"
                autoComplete="off"
              />
              <TextField
                onChange={(e) => setbookmarkLink(e.target.value)}
                label="Link"
                value={bookmarkLink}
                autoComplete="off"
                size="small"
              />
              <Button variant="outlined" size="medium">
                ADD
              </Button>
            </AppFlex>
            <Box>
              {/* <Table className={`table`} things={thingsArray}>
                  <TableColumn property={DCTERMS.title} header="text" />
                  <TableColumn
                    property={BOOKMARK.recalls}
                    header="link"
                    body={({ value }: { value: string }) => (
                      <Link target="_blank" href={value}>
                        {value}
                      </Link>
                    )}
                  />
                  <TableColumn
                    property={SCHEMA_INRUPT.text}
                    header="Delete"
                    body={() => (
                      <DeleteBookmark deleteBookmark={deleteBookmark} />
                    )}
                  />
                </Table> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </AppFlex>
  );
};

export default BookmarksPage;