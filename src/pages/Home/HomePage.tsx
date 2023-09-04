import AppFlex from "@/components/Shared/AppFlex";
import { FC, useCallback, useState } from "react";

import {
  useCreateBookmarkMutation,
  useRemoveBookmarkMutation,
} from "@/hooks/useBookmarkMutation";
import { useGetBookmarks } from "@/hooks/useGetBookmarks";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type IProps = {};

const HomePage: FC<IProps> = ({}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const { data } = useGetBookmarks();
  const createBookmarkMutation = useCreateBookmarkMutation();
  const removeBookmarkMutation = useRemoveBookmarkMutation();

  const resetForm = useCallback(() => {
    setTitle("");
    setUrl("");
  }, []);

  return (
    <AppFlex>
      <Box>
        <Card sx={{ maxWidth: 520, borderRadius: 2 }}>
          <CardContent>
            <AppFlex sx={{ gap: 1 }}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                value={title}
                size="small"
                autoComplete="off"
              />
              <TextField
                onChange={(e) => setUrl(e.target.value)}
                label="Link"
                value={url}
                autoComplete="off"
                size="small"
              />
              <Button
                variant="outlined"
                size="medium"
                onClick={() => {
                  createBookmarkMutation.mutate({ title, url, tags: [] });
                  resetForm();
                }}
              >
                ADD
              </Button>
            </AppFlex>
            <Box>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Text</TableCell>
                      <TableCell>Link</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>
                          <Link target="_blank" href={row.url}>
                            {row.url}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={async () =>
                              removeBookmarkMutation.mutate(row.id)
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </AppFlex>
  );
};

export default HomePage;

const DeleteBookmark = ({ deleteBookmark }: any) => {
  return (
    <IconButton>
      <DeleteIcon />
    </IconButton>
  );
};
