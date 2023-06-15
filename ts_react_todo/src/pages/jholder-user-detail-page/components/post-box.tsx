import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export type PostBoxPropsType = {
  box_title: string;
  post_title: string;
  href: string;
  body: string;
};

export default function PostBox(props: PostBoxPropsType) {
  return (
    <Card className="mb-4 rounded-3 shadow-sm border-primary">
      <Card.Header className="py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">
          <i className="fa-solid fa-user"></i>
          &nbsp;&nbsp;
          {props.box_title}
        </h4>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.post_title}</Card.Title>

        <p style={{ height: "150px" }}>{props.body}</p>

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
