import { useDispatch } from "react-redux";
import useApi from "../../../hooks/useApi";
import { login } from "../../../redux/authSlice";

export default function LoginPage() {
  const api = useApi();
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(">> Form Json", formJson);

    api
      .post("https://api.adoptez1artisan.com/auth/login", formJson)
      .then((response) => {
        console.log(">> Login Response", response);
        dispatch(
          login({
            token: response.data.data.token,
            userData: response.data.data.userData,
          })
        );
        // TODO Burada dispatch yap
      });
  };

  return (
    <div className="container-xxl pt-5">
      <div className="row justify-content-center">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <h2 class="mb-4">Please Login</h2>
          <form onSubmit={onFormSubmit} id="login_form">
            <input
              autocomplete="off"
              type="email"
              value=""
              style={{ display: "none" }}
            />
            <input
              autocomplete="new-password"
              type="password"
              value=""
              style={{ display: "none" }}
            />

            <div class="row g-3">
              <div class="col-sm-12">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Your Email"
                  />
                  <label for="mail">Your Email</label>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Your Password"
                  />
                  <label for="mobile">Your Password</label>
                </div>
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-primary w-100 py-3" type="submit">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
