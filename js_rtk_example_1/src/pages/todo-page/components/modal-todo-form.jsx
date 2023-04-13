import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";

export default function ModalTodoForm(props) {
  const formRef = useRef();

  /**
   * Örnek modal window koduna şu linkten ulaşabilirsiniz:
   * https://react-bootstrap.github.io/components/modal/#live-demo
   *
   * Dökümandaki kullanım şekli ile bizim kullandığımız yöntem arasında ufak bir fark var. Bu farka dikkat
   * ederek kullanmanız önerilir. Bu fark tam olarak `show` ve `handleClose` fonksiyonlarının
   * local state'ten değil props'tan alınmasıdır.
   */

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO Formu json'a çevir ve props.handleClose() fonksiyonuna json datasını gönder.

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    console.log(">> JSON DATA", jsonData);
    // >> JSON DATA {title: 'aaerg', owner: 'aerg', assigned_at: 'aerg', target_hour: '343434', is_done: 'on'}
    // >> JSON DATA {title: 'aaerg', owner: 'aerg', assigned_at: 'aerg', target_hour: '343434'}
    // >> JSON DATA {title: '', owner: '', assigned_at: '', target_hour: ''}
    // >> JSON DATA {title: '', owner: '', assigned_at: '', target_hour: '', is_done: '1'}
    /**
     * Normal inputlarda name property'si mutlaka gelir. Fakat checkbox'larda durum farklıdır. Eğer checkbox seçili
     * değilse o zaman hiç property gelmez. Ama seçiliyse o zaman o inputun value değeri gelir. Bu durumun
     * kontrol altında tutulması gerekir.
     */

    // jsonData'sını todo datasına uygun hale getirelim.
    jsonData.is_done = jsonData.is_done ? true : false;
    jsonData.target_hour = parseInt(jsonData.target_hour);

    // Two way binding özelliği reactjs'de yoktur. Ama bu işlemi props'tan gelen fonksiyonu
    // çağırarak yapmak mümkün.
    props.handleClose(jsonData);
  };

  return (
    <Modal show={props.show} onHide={() => props.handleClose(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Todo Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={formRef} id="modal-todo-form" onSubmit={handleFormSubmit}>
          <input autocomplete="off" type="email" value="" className="d-none" />
          <input
            autocomplete="new-password"
            type="password"
            value=""
            className="d-none"
          />

          {props.editTodo ? (
            <input type="hidden" name="id" value={props.editTodo.id} />
          ) : (
            <></>
          )}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={props.editTodo ? props.editTodo.title : ""}
              placeholder="Title"
            />
            <Form.Text className="text-muted">Put title of the TODO.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              placeholder="Owner"
              defaultValue={props.editTodo ? props.editTodo.owner : ""}
            />
            <Form.Text className="text-muted">
              Who is responsible of this TODO.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Assigned At</Form.Label>

            <Datetime
              inputProps={{ name: "assigned_at" }}
              placeholder="Assigned At"
              initialValue={props.editTodo ? props.editTodo.assigned_at : ""}
            />

            <Form.Text className="text-muted">
              When assigned this task?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Target Hour</Form.Label>
            <Form.Control
              type="number"
              name="target_hour"
              placeholder="Target Hour"
              defaultValue={props.editTodo ? props.editTodo.target_hour : ""}
            />
            <Form.Text className="text-muted">
              How many hours will set for this task?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="is_done"
              value="1"
              label="Is Done?"
              defaultChecked={props.editTodo ? props.editTodo.is_done : false}
            />
          </Form.Group>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleClose(null)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            formRef.current.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
