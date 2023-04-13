import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ModalTodoForm from "./components/modal-todo-form";
import { addEditTodo, removeTodo } from "../../redux/todoSlice";

export default function TodoPage() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todoState);
  const [modalFormShow, setModalFormShow] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  console.log(">> EDIT JSON", editTodo);

  const handleClose = (data) => {
    console.log(">> Handle Close fonksiyonu çağırıldı, data: ", data);
    // {  title: 'Formlar react-hook-form olarak değiştirilecek.', owner: 'Zarina',
    //    assigned_at: '13 apr 2023', target_hour: '5', is_done: false}

    if (data !== null) {
      /**
       * {
       *   type: "otomatik/belirlenir",
       *   payload: data
       * }
       */
      dispatch(addEditTodo(data));
    }

    setEditTodo(null);
    setModalFormShow(false);
  };

  return (
    <>
      <ModalTodoForm
        show={modalFormShow}
        handleClose={handleClose}
        editTodo={editTodo}
      />

      <Button variant="success" onClick={() => setModalFormShow(true)}>
        Add New Todo
      </Button>

      <main>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th> ID </th>
              <th> Title </th>
              <th> Owner </th>
              <th> Done? </th>
              <th> Assigned At </th>
              <th> Hour </th>
              <th> Operation </th>
            </tr>
          </thead>

          <tbody>
            {todoState.todos.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.owner}</td>
                  <td>
                    <input type="checkbox" defaultChecked={item.is_done} />
                  </td>
                  <td>{item.assigned_at}</td>
                  <td>{item.target_hour}</td>
                  <td>
                    <Button
                      variant="success"
                      className="btn-sm"
                      onClick={() => {
                        setEditTodo(item);
                        setModalFormShow(true);
                      }}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => {
                        //alert(`Delete id: ${item.id}`);
                        dispatch(removeTodo(item.id));
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/*
        <pre>{JSON.stringify(todoState, null, 2)}</pre>
        */}
      </main>
    </>
  );
}
