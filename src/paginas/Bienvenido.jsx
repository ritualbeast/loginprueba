//create a welcome page

import React from "react";
import useLogin from "../hooks/useLogin";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Bienvenido = () => {
    const { user, logout } = useLogin();
    const history = useHistory();
    const handleLogout = () => {
        logout();
        history.push("/");
    };
    return (
        <div>
        <h1>Bienvenido {user.name}</h1>
        <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
    };  