import { useSelector } from "react-redux";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context-provider";

export default function Footer() {
  const themeContextData = useContext(ThemeContext);

  const categoryState = useSelector((state) => state.categoryState);
  console.log(">> FOOTER CAT STATE", categoryState);

  return (
    <>
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src={Logo} alt="" width="24" height="19" />
            <small class="d-block mb-3 text-muted">&copy; 2017–2022</small>
            <br />
            <Button
              onClick={() => themeContextData.setTheme("light")}
              className="me-2"
              variant="light"
            >
              Light
            </Button>
            <Button
              onClick={() => themeContextData.setTheme("dark")}
              className="me-2"
              variant="secondary"
            >
              Dark
            </Button>
            <Button
              onClick={() => themeContextData.toggleTheme()}
              className="me-2"
              variant="outline-warning"
            >
              Toggle
            </Button>
            <br />
            Tema: {themeContextData.theme}
          </div>
          <div class="col-6 col-md">
            <h5>Kategoriler</h5>
            <ul class="list-unstyled text-small">
              {!categoryState.initialized ? (
                <li>Loading...</li>
              ) : (
                categoryState.categories.map((item, index) => {
                  if (index >= 5) {
                    return null;
                  }

                  return (
                    <li class="mb-1" key={index}>
                      <Link
                        to={"category/" + item.slug}
                        class="link-secondary text-decoration-none"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li class="mb-1">
                <a class="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
