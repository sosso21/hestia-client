import { useEffect, useState } from "react";
import Header from "../../../components/header/index";
import Footer from "../../../components/footer";
import FormCustom from "../../../components/admin/formCustom";
import { useParams } from "react-router-dom";
import fr from "../../../store/fr";
import { data } from "../../../store/data";

const AdminScpi = () => {
  const { slug } = useParams();
  const txt = fr.actionSCPI;
  const [SCPI, setSCPI] = useState("");
  const [Err, setErr] = useState({});

  useEffect(() => {
    if (!!slug) {
      fetch(`${data.urlServer}/api/scpi/findOne/${slug}`)
        .then((res) => res.json())
        .then((res) => setSCPI(res));
    }
  }, [slug]);

  const handleHubmit = (e) => {
    e.preventDefault();

    const header = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        ...SCPI,
        token: localStorage.getItem("token"),
      }).toString(),
    };
    setErr({ btn: "disable" });
    fetch(`${data.urlServer}/api/scpi/${!!slug ? "update" : "create"}`, header)
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res);
        setErr({
          btn: "",
          color: res.success ? "success" : "danger",
          msg: res.success ? res.success : res.error,
        });
        setTimeout(() => {
          setErr({});
        }, 10000);
      });
  };
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center my-4 fw-lighter">
          {!!slug ? txt.editTitle : txt.uploadTitle}
        </h1>
        <form
          onSubmit={handleHubmit}
          className="my-4 form-group d-flex flex-column align-content-center flex-wrap justify-between-between"
        >
          <FormCustom
            state={SCPI}
            setState={(e) => setSCPI(e)}
            items={txt.input}
          />

          {Err.msg && Err.color && (
            <div className={` text-center alert alert-${Err.color}`}>
              {Err.msg}
            </div>
          )}
          <button className={`mx-auto btn btn-lg btn-hermes ${Err.btn}`}>
            {txt.submit}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default AdminScpi;
