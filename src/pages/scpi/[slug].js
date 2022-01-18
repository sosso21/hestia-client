import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWindowWidthAndHeight } from "../../plugins/useWindowWidthAndHeight";
import dateParser from "../../plugins/dateParser";
import numFormatter from "../../plugins/parseNumber";
import formatPhoneNumber from "../../plugins/parsePhone";
import fr from "../../store/fr";
import { data } from "../../store/data";
import FlexList from "../../components/flexList";
import Table from "../../components/tableSheet/table";
import { Slide } from "react-slideshow-image";
import ItemBoxSCPI from "../../components/itemBox/ItemBoxSCPI";
import Header from "../../components/header/index";
import Footer from "../../components/footer";

const ScpiItem = () => {
  const { slug } = useParams();
  const [width, height] = useWindowWidthAndHeight();
  const txt = fr.scpiSheet;
  const [scpi, setScpi] = useState("");
  const [SimilarScpi, setSimilarScpi] = useState("");
  const [InFlexList, setInFlexList] = useState("");
  const [inTable, setinTable] = useState([]);

  useEffect(() => {
    fetch(`${data.urlServer}/api/scpi/findOne/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        const parseResult = {
          ...res,
          parentAgencyName: res.agency.title,
          distributionRate: res.distributionRate + "%",
          partPrice: res.partPrice + "€",
          lifeInsurance: !!res.lifeInsurance ? "Disponible" : "Indisponible",
          scpiCreation: dateParser(res.scpiCreation),
          capitalisation: numFormatter(res.capitalisation) + "€",
        };
        setScpi(parseResult);
        const svg = {
          distributionRate: "bi bi-graph-up-arrow",
          partPrice: "bi bi-tag",
          capitalisation: "bi bi-trophy",
          parentAgencyName: "bi bi-bank",
          type: "bi bi-piggy-bank-fill",
          scpiCreation: "bi bi-calendar-date",
        };
        let arrFlexList = [];
        for (const key in svg) {
          arrFlexList = [
            ...arrFlexList,
            {
              svg: svg[key],
              title: txt.scpiSheet[key],
              description: parseResult[key],
            },
          ];
        }
        setInFlexList(arrFlexList);
        let _inTable = [];
        for (const key in txt.scpiSheet) {
          _inTable = [
            ..._inTable,
            { key: txt.scpiSheet[key], value: parseResult[key] || "-" },
          ];
        }
        setinTable(_inTable);
      });
  }, []);

  useEffect(() => {
    fetch(
      `${data.urlServer}/api/scpi/filter/0-10?parentAgency=${scpi.parentAgency}`
    )
      .then((res) => res.json())
      .then((res) =>
        setSimilarScpi((res || []).filter((i) => i.id != scpi.id))
      );
  }, [scpi]);

  return (
    <>
      <Header />
      <main className="w-100 p-4 my-4">
        <h1 className="my-4 mx-auto text-center w-100 fw-lighter hover-underline-animation ">
          {(scpi.title || "").toUpperCase()}
        </h1>

        <div className="my-4 mx-auto text-center w-100 ">
          <strong className=" mx-auto text fw-lighter">
            <a
              href={"/agency/" + (scpi.agency || { slug: "" }).slug}
              className="mx-2  nav-link "
            >
              <i className="bi bi-bank mx-2"></i>{" "}
              {(scpi.agency || { title: "" }).title}{" "}
            </a>{" "}
            {(scpi.type || "").toUpperCase()}
          </strong>
        </div>
        <section className="text-center">
          <FlexList data={InFlexList} />
        </section>

        <section className="p-4 mx-auto">
          <h2 className="fw-lighter text-center mx-auto">{txt.history} </h2>
          <article>
            <p>{scpi.history} </p>
          </article>
        </section>

        <section className="section-Sheet-flex">
          <div className="d-flex flex-column">
            <p className="d-flex justify-content-center align-content-center align-content center py-4 px-4">
              <i className="mx-2 fs-1 bi bi-telephone-fill"></i>
              <a
                href={`tel:0` + (scpi.agency || { phone: "" }).phone}
                className="text-reset btn btn-lg"
              >
                {" "}
                {formatPhoneNumber(
                  "0" + (scpi.agency || { phone: "" }).phone
                )}{" "}
              </a>
            </p>

            <p className="d-flex justify-content-center align-content-center align-item center py-4 px-4">
              <i className="mx-2 fs-1 bi bi-send-fill"></i>
              <a
                href={`mailto:` + (scpi.agency || { email: "" }).email}
                className="text-reset btn btn-lg"
              >
                {(scpi.agency || { email: "" }).email}{" "}
              </a>
            </p>
          </div>
          <article>
            <Table array={[...inTable]} />
          </article>
        </section>

        <section className="p-4 mx-auto">
          <h2 className="fw-lighter text-center mx-auto">{txt.profil} </h2>
          <article>
            <p>{scpi.profil} </p>
          </article>

          <h2 className="fw-lighter text-center mx-auto">
            >{txt.description}{" "}
          </h2>
          <article>
            <p>{scpi.description} </p>
          </article>
        </section>

        {!!(SimilarScpi || []).length && (
          <section className="my-4">
            <Slide slidesToShow={width / 450} easing="ease">
              {SimilarScpi.map((item) => (
                <ItemBoxSCPI item={item} />
              ))}
            </Slide>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ScpiItem;
