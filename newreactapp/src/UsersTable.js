import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UserTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 3, boxShadow: 3, borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "2rem", color: "#424242" }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "2rem", color: "#424242" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "2rem", color: "#424242" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "0.9rem" }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "0.9rem" }}
                >
                  {row.name}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: "10px", textTransform: "capitalize" }}
                    onClick={() => selectedUser({ id: row.id, name: row.name })}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ textTransform: "capitalize" }}
                    onClick={() => deleteUser({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography variant="subtitle1" color="textSecondary">
                  No User Found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
