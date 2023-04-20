import styles from "./category-box.module.css";

export default function CategoryBox(props) {
  return (
    <div class="service-item position-relative h-100">
      <div class="service-text rounded p-5">
        <div
          className={`btn-square bg-light rounded-circle mx-auto mb-4 ${styles.button}`}
        >
          <img class="img-fluid" src={props.category.image} alt="Icon" />
        </div>
        <h5 class="mb-3">{props.category.name}</h5>
        <p class="mb-0">{props.category.description}</p>
      </div>
      <div class="service-btn rounded-0 rounded-bottom">
        <a class="text-primary fw-medium" href="">
          Read More
          <i class="bi bi-chevron-double-right ms-2" />
        </a>
      </div>
    </div>
  );
}
