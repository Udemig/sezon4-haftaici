import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class Todo {
  // id değeri constrcutor'da set edildiği için
  // burada ilk değer vermiyoruz
  private id: number;
  private title: string;

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

  getTitle() {
    return this.title;
  }

  getIsDone() {
    return this.is_done;
  }

  makeDone() {
    this.is_done = true;
  }
}

export default function TodoClassPage() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, "çay demle", false),
    new Todo(2, "kahvaltı hazırla"),
    new Todo(3, "ayakkabıları boya"),
  ]);

  return (
    <>
      <h2>Todo Örneği (Class kullanarak)</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Is Done?</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => {
            return (
              <tr key={item.getId()}>
                <td>{item.getId()}</td>
                <td>{item.getTitle()}</td>
                <td>{item.getIsDone() ? "Yapıldı" : "Beklemede"}</td>
                <td>
                  <Button variant="danger">Sil</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
