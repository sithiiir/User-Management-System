import { Button, Input, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (!submitted) {
      setid(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setid(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        marginBottom: "20px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "black" }}>
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "fex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "black",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="numebr"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "fex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "black",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="numebr"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Button
        variant="contained"
        sx={{
          margin: "auto",
          marginBottom: "20px",

          marginTop: "20px",
          marginLeft: "20px",
        }}
        onClick={() =>
          isEdit ? updateUser({ id, name }) : addUser({ id, name })
        }
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </Grid>
  );
};
export default UserForm;
