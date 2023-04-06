import { Button, Col, Row } from "react-bootstrap";
import logo from "../../../components/assets/logo.svg";
import { useRef, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function LoginPage() {
  const api = useApi();

  /**
   * Bir inputtan data almanın dört tane yöntemi vardır. Birincisi useState yöntemi, ikincisi useRef yöntemi,
   * üçüncüsü formu json'a çevirme yöntemi, dördüncüsü de yardımcı kütüphane kullanma yöntemi.
   * Bu yöntemler amatörden profesyonele doğru sıralanmaktadır.
   *
   * 1- useState yöntemiyle inputun değerini almak.
   *    Bu yöntem büyük formlarla çalışırken performans problemi oluşturur. Çünkü her `onChange()` event
   *    trigger olduğunda tüm component tekrar render olur. Bu da çok sayıda input barındıran
   *    formlarda büyük bir performans kaybına sebep olur. Bu yüzden birinci yöntemi kullanmak
   *    hiç tavsiye edilmez.
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(">> Form bilgisi: ", email, password);

  /**
   * 2- useRef yöntemiyle inputtan değer almak.
   *    Bu yöntemde onChange olayı her seferinde çağırılması gerekmez. Sadece formun submit olayında bu ref'lere
   *    erişerek input value'larını okuyabiliriz. Sonra bu value'lar ile JSON objesi oluşturup bunu API'ye
   *    istek atmak için kullanırız.
   */
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const formData_state = {
      email,
      password,
    };

    console.log(">>>>>>>> form gönderiliyor <<<<<<<<<");
    console.log("email: ", inputEmailRef.current.value);
    console.log("password: ", inputPasswordRef.current.value);

    const formData_ref = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };

    console.log(">> Oluşturulan form dataları:", formData_state, formData_ref);

    /**
     * 3- Form elemanını doğrudan JSON'a çevirme yöntemi.
     *    Bu yöntemde onChange yada ref ihtiyacımız yoktur. Bu sayede hem performanstan kazanç sağlarız hem de
     *    fazladan değişken tanımlamaya gerek kalmaz. Çünkü doğrudan form elemanını JSON'a çevirmekteyiz.
     *    Burada dikkat edilmesi gereken nokta her inputun `name` propertysi mutlaka belirlenmiş olmalı.
     */
    const formData = new FormData(event.target);
    const formData_json = Object.fromEntries(formData.entries());
    console.log(">> Oluşturulan form JSON datası:", formData_json);

    /**
     * 4- Yardımcı kütüphane kullanma yöntemi.
     *    Bu madde `formik` veya `react-hook-form` kütüphanelerinin kullanılmasını içerir. Bu kütüphaneler
     *    büyük kütüphaneler oldukları için onlara ayrı dersler oluşturmak gerekebilir.
     */

    /////////////////////////////////////////////////

    /**
     * `formData_json` objesini API'ye gönderiyoruz.
     */

    api
      .post("https://api.adoptez1artisan.com/auth/login", formData_json)
      .then((response) => {
        response.data;
        console.log(">> Login Response", response);
      })
      .catch((err) => {
        console.error("ERR", err);

        alert(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col lg="6">
          <form onSubmit={onFormSubmit}>
            <img class="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Lütfen giriş yapınız.</h1>

            <div class="form-floating">
              <input
                ref={inputEmailRef}
                type="email"
                class="form-control"
                name="email"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                ref={inputPasswordRef}
                type="password"
                class="form-control"
                name="password"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3"></div>

            <Button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </Button>
          </form>
        </Col>
      </Row>
    </>
  );
}
