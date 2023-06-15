import { useEffect, useState } from "react";
import useJsonplaceholderApi, {
  JHolderUser,
  JsonplaceholderApi,
} from "../../hooks/useJsonplaceholderApi";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../redux/store";
import { JholderUserStateType, setUsers } from "../../redux/jholderUserSlice";

export default function JHolderPage() {
  // state parametresinin default type'ı `unknown`dır. Eğer bu type'ı doğru şekilde
  // belirtmezsek state property'lerine yani reduxtaki state objelerine erişemeyiz.
  // Bu yüzden state parametresinin türünü ReduxStateType olarak set ediyoruz.
  const jholderUserState = useSelector(
    (state: ReduxStateType) => state.jholderUserState
  );
  const dispatch = useDispatch();

  const api: JsonplaceholderApi = useJsonplaceholderApi();

  // burası senkron context olduğu için api.users() methodunu await ile birlikte
  // kullanamıyoruz. Bunu yapabilmek için onmount esnasında bir asenkron context
  // oluşturarak onun içerisinde `await api.users()` ifadesini kullanabiliriz.

  useEffect(() => {
    // Burası da senkron context.

    // immediate call function
    (async () => {
      // Eğer users property'si boşsa (yani null ise) o zaman api'ye istek at
      if (!jholderUserState.users) {
        // burası immediate call functiondır.
        const apiUsersResult: JHolderUser[] = await api.users();
        console.log(">> USERS", apiUsersResult);
        //setUsers(result);
        dispatch(setUsers(apiUsersResult));
      }
    })();
  }, []);

  return (
    <>
      <h1>Jsonplaceholder User List</h1>

      <hr />

      <Row>
        {jholderUserState.users ? (
          jholderUserState.users.map((item, index) => {
            return (
              <Col sm="3" key={item.id}>
                <Card className="mb-4 rounded-3 shadow-sm border-primary">
                  <Card.Header className="py-3 text-white bg-primary border-primary">
                    <h4 className="my-0 fw-normal">
                      <i className="fa-solid fa-user"></i>
                      &nbsp;&nbsp;
                      {item.name}
                    </h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>User Details</Card.Title>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Username: {item.username}</li>
                      <li>Email: {item.email}</li>
                      <li>Phone: {item.phone}</li>
                      <li>Website: {item.website}</li>
                    </ul>
                    <Link
                      to={`/jholder/user/${item.id}`}
                      className="btn btn-primary w-100 btn btn-lg btn-primary"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                      &nbsp; Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col sm="4">Loading...</Col>
        )}
      </Row>
    </>
  );
}
