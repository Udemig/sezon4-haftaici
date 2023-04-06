import { useSelector } from "react-redux";
import CategoryBox from "./components/category-box";
import { Col, Row } from "react-bootstrap";

export default function MainPage() {
  const categoryState = useSelector((state) => state.categoryState);

  /**
   * ÖDEV: Aşağıdaki kategori listesine "Loading" yazısı ekleyin.
   */

  return (
    <>
      <h2 className="text-center">Kategoriler</h2>
      <hr />

      <Row>
        {categoryState.categories.map((item, index) => {
          return (
            <Col lg="3" sm="6" key={index}>
              <CategoryBox category={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
