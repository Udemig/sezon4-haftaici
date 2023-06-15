import { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";

import React from "react";

type TodoFormProperties = {
  title: FormDataEntryValue;
  owner: FormDataEntryValue;
  start_date: FormDataEntryValue;
  is_done?: FormDataEntryValue;
};

type OriginalObjectEntries = {
  [k: string]: FormDataEntryValue;
};

const exampleObjectEntries: OriginalObjectEntries = {
  foo: "test",
  bar: "test 2",
  baz: "test 3",
  kuu: "test 4",
};

class Todo {
  // id değeri constrcutor'da set edildiği için
  // burada ilk değer vermiyoruz
  private id: number;
  private title: string;

  private owner: string = "";
  private start_date: Date = new Date();

  // is_done değeri constrcutor'da set edilmeme ihtimaline
  // karşın burada ilk değer veriyoruz.
  private is_done: boolean = false;

  constructor(id: number, title: string, is_done?: boolean) {
    this.id = id;
    this.title = title;

    if (is_done) {
      this.is_done = is_done;
    }
  }

  getId() {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  getIsDone() {
    return this.is_done;
  }

  makeDone() {
    this.is_done = true;
  }

  getOwner(): string {
    return this.owner;
  }

  setOwner(owner: string): this {
    this.owner = owner;
    return this;
  }

  getStartDate(): Date {
    return this.start_date;
  }

  // setter'lardan neden this döner? method chain yapabilmek için.
  setStartDate(start_date: Date): this {
    this.start_date = start_date;
    return this;
  }

  setIsDone(is_done: boolean): this {
    this.is_done = is_done;
    return this;
  }
}

export default function TodoClassPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  const [todos, setTodos] = useState<Todo[]>([
    // setterlardan this döndüğü için method chain yaparak property'leri kolayca set edebiliyoruz.
    new Todo(1, "çay demle", true)
      .setOwner("ahmet")
      .setStartDate(new Date(Date.now() + 3600 * 24 * 1000)),
    new Todo(2, "kahvaltı hazırla")
      .setOwner("ahmet")
      .setStartDate(new Date(Date.now() + 3600 * 24 * 1000)),
    new Todo(3, "ayakkabıları boya")
      .setOwner("ahmet")
      .setStartDate(new Date(Date.now() + 3600 * 24 * 1000)),
  ]);

  const example_todo = new Todo(1, "test", true);
  example_todo
    .setOwner("ahmet")
    .setStartDate(new Date())
    .setTitle("reactjs tekrar edilecek");

  const onAddNewClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setEditTodo(null);
    setShowModal(true);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);

    const formJsonObj: TodoFormProperties = Object.fromEntries(
      formData.entries()
    ) as TodoFormProperties;

    console.log(">> formJsonObj", formJsonObj);

    const todo = new Todo(
      0,
      formJsonObj.title.toString(),
      formJsonObj.is_done ? true : false
    );
    todo.setOwner(formJsonObj.owner.toString());

    console.log(">> TODO:", todo);

    if (editTodo) {
      editTodo.setTitle(todo.getTitle());
      editTodo.setIsDone(todo.getIsDone());
    } else {
      todos.push(todo);
      console.log(">> TODOS", todos);
    }

    //setTodos(todos);
    setTodos([...todos]);
    //setShowModal(false);

    let arr1 = [1, 2, 3];
    let arr2 = [...arr1];
    let arr3 = arr2;
    let arr4 = arr2;
    let arr5 = arr1;

    arr5.push(4);
    console.log(arr1);

    let arr_obj1 = [
      { foo: "foo", bar: "bar" },
      { foo: "foo", bar: "bar" },
      { foo: "foo", bar: "bar" }, // bu satırdaki foo propertysine "test" değerini set edelim
      { foo: "foo", bar: "bar" },
    ];
    let item = arr_obj1[2];
    item.foo = "test";
    console.log(">> arr_obj1: ", arr_obj1);

    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Form onSubmit={onSubmitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>TODO Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Todo Title:</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Write todo here..."
                defaultValue={editTodo ? editTodo.getTitle() : ""}
              />
              <Form.Text className="text-muted">
                Please add your todo item here.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Owner:</Form.Label>
              <Form.Control
                name="owner"
                type="text"
                placeholder="Write owner here..."
                defaultValue={editTodo ? editTodo.getOwner() : ""}
              />
              <Form.Text className="text-muted">
                Write owner name here.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                name="start_date"
                type="text"
                placeholder="Select a start date..."
                defaultValue={
                  editTodo ? editTodo.getStartDate().toISOString() : ""
                }
              />
              <Form.Text className="text-muted">Select a start date.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                defaultChecked={editTodo ? editTodo.getIsDone() : false}
                name="is_done"
                type="checkbox"
                label="Is Done?"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <h2>Todo Örneği (Class kullanarak)</h2>

      <hr />

      <Button variant="success" className="mb-3" onClick={onAddNewClickHandler}>
        Add New Todo
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>Is Done?</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item: Todo, index: number) => {
            return (
              <tr key={item.getId()}>
                <td>{item.getId()}</td>
                <td>{item.getTitle()}</td>
                <td>
                  {item.getStartDate().toLocaleDateString()}
                  &nbsp;
                  {item.getStartDate().toLocaleTimeString()}
                </td>
                <td>
                  <input
                    onChange={() => {
                      todos[index].setIsDone(!todos[index].getIsDone());
                      setTodos([...todos]);
                    }}
                    type="checkbox"
                    checked={item.getIsDone()}
                  />
                  &nbsp;
                  {item.getIsDone() ? "Yapıldı" : "Beklemede"}
                </td>
                <td>
                  <Button
                    variant="primary me-2"
                    onClick={() => {
                      setEditTodo(item);
                      setShowModal(true);
                    }}
                  >
                    Düzenle
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      // index'ten itibaren bir adet satır siler
                      todos.splice(index, 1);
                      setTodos([...todos]);
                    }}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
