import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dateParser from "../../plugins/dateParser";
import numFormatter from "../../plugins/parseNumber";
import Footer from "../../components/footer";
import { useWindowWidthAndHeight } from "../../plugins/useWindowWidthAndHeight";
import formatPhoneNumber from "../../plugins/parsePhone";
import fr from "../../store/fr";
import { data } from "../../store/data";
import Header from "../../components/header/index";
import Table from "../../components/tableSheet/table";
import ItemBoxSCPI from "../../components/itemBox/ItemBoxSCPI";

import { Slide } from "react-slideshow-image";
import "../../styles/sheetPage.css";

const AgencyItem = () => {
  const { slug } = useParams();
  const [width, height] = useWindowWidthAndHeight();
  const txt = fr.agencySheet;
  const [agency, setAgency] = useState("");
  const [array, setArray] = useState("");

  useEffect(() => {
    fetch(`${data.urlServer}/api/agency/findOne/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setAgency({
          ...res,
          scpi: res.scpi.map((i) => ({ ...i, agencyName: res.title })),
        });
        let arr = [];
        const newRes = {
          ...res,
          agencyCreation: dateParser(res.agencyCreation),
          fund: numFormatter(res.fund),
        };
        for (const key in txt.table) {
          arr = [
            ...arr,
            {
              key: txt.table[key],
              value: newRes[key] || "-",
            },
          ];
        }
        setArray(arr);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="w-100 p-4 my-4">
        <h1 className="my-4 mx-auto text-center w-50 fw-lighter">
          {(agency.title || "").toUpperCase()}
        </h1>

        <section className="section-Sheet-flex ">
          <span className="logo-right">
            <img
              src={agency.logo_url}
              alt={"logo de " + (agency.title || "")}
            />
          </span>
          <article>
            <p>{agency.bio}</p>
          </article>
        </section>

        <section className="section-Sheet-flex">
          <div className="d-flex flex-column">
            <p className="d-flex justify-content-center align-content-center align-content center py-4 px-4">
              <i className="mx-2 fs-1 bi bi-telephone-fill"></i>
              <a
                href={`tel:0` + agency.phone}
                className="text-reset btn btn-lg"
              >
                {" "}
                {formatPhoneNumber("0" + agency.phone)}{" "}
              </a>
            </p>

            <p className="d-flex justify-content-center align-content-center align-item center py-4 px-4">
              <i className="mx-2 fs-1 bi bi-send-fill"></i>
              <a
                href={`mailto:` + agency.email}
                className="text-reset btn btn-lg"
              >
                {agency.email}{" "}
              </a>
            </p>
          </div>
          <article>
            <Table array={array} />
          </article>
        </section>
        <section className="h-100 w-100">
          <h2 className="text-center mx-auto my-4 fw-lighter">
            {txt.theSCPI.toUpperCase()}:{" "}
          </h2>

          <Slide slidesToShow={width / 450} easing="ease">
            {[...(agency.scpi || [])].map((item) => (
              <ItemBoxSCPI item={item} />
            ))}
          </Slide>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AgencyItem;
