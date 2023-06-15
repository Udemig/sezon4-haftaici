import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export type AlbumBoxPropsType = {
  title: string;
  href: string;
  body: string;
};

export default function AlbumBox(props: AlbumBoxPropsType) {
  return (
    <Card className="mb-4 rounded-3 shadow-sm border-primary">
      <Card.Header className="py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">
          <i className="fa-solid fa-user"></i>
          &nbsp;&nbsp;
          {props.title}
        </h4>
      </Card.Header>
      <Card.Body>
        <Card.Title>Album Info</Card.Title>

        <p style={{ height: "60px" }}>{props.body}</p>

        <Link
          to={props.href}
          className="btn btn-primary w-100 btn btn-lg btn-primary"
        >
          <i className="fa-solid fa-arrow-right"></i>
          &nbsp; Details
        </Link>
      </Card.Body>
    </Card>
  );
}
