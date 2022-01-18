import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header/index";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { data } from "../store/data"
import fr from "../store/fr"
import "../styles/log.css";

const Signin = () => {
  let history = useHistory();
  const txt = fr.login;

  const [log, setLog] = useState({ email: "", pass: "" });
  const [seePass, setSeePass] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [show, setShow] = useState(false);
  const [mpEmail, setMpEmail] = useState("");
  const [mpError, setmpError] = useState("");

  const sendEmaillToConfirm = () => {
    console.log('====================================');
    console.log("c regl");
    console.log('====================================');

  };

  const onConnect = (e) => {
    e.preventDefault();
    const header = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        email: log.email,
        pass: log.pass,
      }).toString()
    };


    fetch(`${data.urlServer}/api/admin/login`, header)
      .then((res) => res.json())
      .then(
        (result) => {

          if (!!result.token && result.userInfo) {
            localStorage.setItem("token", result.token);
            sessionStorage.setItem("userInfo", JSON.stringify(result.userInfo));
            history.push("/admin");
            window.location.reload();
             
          } else if (!!result.error) {
            setErrorLogin(result.error);
          }
        },
        (err) => {
          console.log("Une erreur c' est produit:", err);
        }
      );
  };

  const sendEmailToMp = (e) => {
    e.preventDefault(); 
  };

  return (
    <>
      <main className="bglog bgLogin">
        <Header />
        <section className="wResponsive container my-4 text-center">
          <h1 className="text-dark fw-lighter my-4">{txt.title}</h1>

          <form onSubmit={(e) => onConnect(e)}>
            <div className="input-group my-1">
              <input
                value={log.email}
                onChange={(e) =>
                  setLog({ email: e.target.value, pass: log.pass })
                }
                type="email"
                className="form-control"
                placeholder={txt.email}
              />
            </div>

            <div className="input-group my-1">
              <input
                value={log.pass}
                onChange={(e) =>
                  setLog({ email: log.email, pass: e.target.value })
                }
                type={seePass ? "text" : "password"}
                className="form-control "
                placeholder={txt.password}
              />
            </div>
            <div className="input-group ">
              <i
                onClick={() => setSeePass(!seePass)}
                className={`eyesItem text-hermes bi  ${seePass ? "bi-eye-fill" : " bi-eye-slash-fill"
                  } `}
              ></i>
            </div>

            <i onClick={() => setShow(true)} className="text-hermes btn btn-link my-4">  {txt.missedPassword}</i>

            <div className="input-group">
              {errorLogin && (
                <div className="text-center alert alert-danger input-group">
                  {errorLogin}
                </div>
              )}
            </div>
            <button type="submit" className="my-4 btn-lg btn  btn-hermes">
              {txt.connect}
            </button>
          </form>
        </section>

        <aside>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2 className="text-dark my-4 fw-lighter">
                  {txt.resetYourPassword}
                </h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <form
                  className="text-center my-4"
                  onSubmit={(e) => sendEmailToMp(e)}
                >
                  <div className="input-group ">
                    <input
                      value={mpEmail}
                      onChange={(e) => setMpEmail(e.target.value)}
                      type="email"
                      placeholder={txt.email}
                      className="form-control"
                      required
                    />
                  </div>
                  {mpError && (
                    <div>
                      {mpError == "success" ? (
                        <p className="alert alert-success">{txt.msgEmailSended}</p>
                      ) : (
                        <p className="alert alert-danger"> {mpError}</p>
                      )}
                    </div>
                  )}
                  <button type="submit" className="btn-lg btn btn-hermes my-4">
                    {txt.reset}
                  </button>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </aside>
        <Footer />
      </main>
    </>
  );
};

export default Signin;
