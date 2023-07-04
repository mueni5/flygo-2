import "./Login.css";

const Login = () => {
  return (
    <div className="log-in">
      <div
        className="container d-flex justify-content-center align-items-center min-vh-100"
        style={{}}
      >
        <div className="row rounded-4 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#17BEBB" }}
          >
            <div className="featured-image mb-1">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/331/634/458/sunset-the-sun-the-sky-clouds-wallpaper-preview.jpg"
                alt="airplanes"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <p className="text-white fs-2 ">Welcome!</p>
          </div>

          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-2">
                <h2>Login</h2>
                <p>We are happy you are back!</p>
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Usename"
                />
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-4 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="/">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mt-2 mb-1">
                <button className="btn btn-lg btn btn-outline-primary w-50 fs-6">
                  Login
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have account ? <a href="/signup">Sign Up</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
