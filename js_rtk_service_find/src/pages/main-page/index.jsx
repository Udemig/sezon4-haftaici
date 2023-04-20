import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./index.module.css";
import CategoryBox from "./components/category-box";
import { useSelector } from "react-redux";

export default function MainPage() {
  const categoryState = useSelector((state) => state.categoryState);

  return (
    <>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img
            src="https://themewagon.github.io/GrowMark/img/carousel-2.jpg"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://themewagon.github.io/GrowMark/img/carousel-1.jpg"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 feature-row">
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div class="feature-item border h-100 p-5">
                <div
                  className={`btn-square bg-light rounded-circle mb-4 ${styles.button}`}
                >
                  <img class="img-fluid" src="assets/icon-1.png" alt="Icon" />
                </div>
                <h5 class="mb-3">Award Winning</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div class="feature-item border h-100 p-5">
                <div
                  className={`btn-square bg-light rounded-circle mb-4 ${styles.button}`}
                >
                  <img class="img-fluid" src="assets/icon-2.png" alt="Icon" />
                </div>
                <h5 class="mb-3">Professional Staff</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div class="feature-item border h-100 p-5">
                <div
                  className={`btn-square bg-light rounded-circle mb-4 ${styles.button}`}
                >
                  <img class="img-fluid" src="assets/icon-3.png" alt="Icon" />
                </div>
                <h5 class="mb-3">Fair Prices</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div class="feature-item border h-100 p-5">
                <div
                  className={`btn-square bg-light rounded-circle mb-4 ${styles.button}`}
                >
                  <img class="img-fluid" src="assets/icon-4.png" alt="Icon" />
                </div>
                <h5 class="mb-3">24/7 Support</h5>
                <p class="mb-0">
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p class="fs-5 fw-medium text-primary">Kategoriler</p>
            <h1 class="display-5 mb-5">
              Kategorileri buradan inceleyebilirsiniz.
            </h1>
          </div>
          <div class="row g-4">
            {categoryState.categories.map((item) => {
              return (
                <div class="col-lg-4 col-md-6 wow fadeInUp" key={item.id}>
                  <CategoryBox category={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
