import { useContext, useEffect, useState } from "react";

function HomePage() {
    const { logout } = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [todos, setTodos] = useState(null);
    useEffect(() => {
      //getTodos();
    }, [])}