import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const authState = useSelector((state) => state.authState);

  return (
    <>
      <div className="container-fluid bg-primary text-white d-none d-lg-flex">
        <div className="container py-3">
          <div className="d-flex align-items-center">
            <Link to="/">
              <h2 className="text-white fw-bold m-0">Service Find</h2>
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <small className="ms-4">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </small>
              <small className="ms-4">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </small>
              <small className="ms-4">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </small>
              <div className="ms-3 d-flex">
                <a
                  className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-white sticky-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <Link to="/" class="navbar-brand d-lg-none">
              <h1 class="fw-bold m-0">Service Find</h1>
            </Link>
            <button
              type="button"
              class="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <Link to="/" class="nav-item nav-link active">
                  Home
                </Link>
                <Link to="categories" class="nav-item nav-link">
                  Categories
                </Link>
                <a href="service.html" class="nav-item nav-link">
                  Services
                </a>
                <a href="project.html" class="nav-item nav-link">
                  Projects
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <a href="feature.html" class="dropdown-item">
                      Features
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="quote.html" class="dropdown-item">
                      Quotation
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div class="ms-auto d-none d-lg-block">
                <span className="badge bg-success" style={{ fontSize: "16px" }}>
                  {authState.userData?.fullname}
                </span>

                <Link
                  to="auth/login"
                  class="btn btn-primary rounded-pill py-2 px-3 me-2"
                >
                  Login
                </Link>
                <Link
                  to="auth/register"
                  class="btn btn-primary rounded-pill py-2 px-3"
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
