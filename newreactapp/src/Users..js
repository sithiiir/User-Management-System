import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data.response || []);
      })
      .catch((error) => {
        console.error("Axios error ", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/createUser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setTimeout(() => setSubmitted(false), 100);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios error ", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/updateUser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios error ", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post("http://localhost:3001/api/deleteUser", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Axios error ", error);
      });
  };
  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UserTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure you want to delete this user?") &&
          deleteUser(data)
        }
      />
    </Box>
  );
};

export default Users;
