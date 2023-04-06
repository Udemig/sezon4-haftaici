import { Link } from "react-router-dom";
import styles from "./category-box.module.css";

export default function CategoryBox(props) {
  console.log(">> CAT BOX PROPS", props);
  //props.category.name;

  /**
   * Buradaki `styles` isimli değişkenin içerisine css class'ları Reactjs tarafından oluşturulur.
   * Bu classları aşağıdaki gibi `className={styles.category_image}`  şeklinde kullanabiliriz.
   * Module css'ler html'e çevrilirken aşağıdaki gibi benzersiz bir isim oluşturularak çevrilir.
   * Bu sayede bu module css'ler sadece bu component içerisinde geçerli olmuş olur.
   *
   * <img class="_category_image_18khg_1"  .....  />
   */

  return (
    <div class="card mb-4 rounded-3 shadow-sm border-primary">
      <div class="card-header py-3 text-bg-primary border-primary">
        <h4 class="my-0 fw-normal">{props.category.name}</h4>
      </div>
      <div class="card-body">
        <img src={props.category.image} className={styles.category_image} />

        <Link
          to={"category/details/" + props.category.slug}
          type="button"
          class="w-100 btn btn-lg btn-primary"
        >
          Detaylar
        </Link>
      </div>
    </div>
  );
}
