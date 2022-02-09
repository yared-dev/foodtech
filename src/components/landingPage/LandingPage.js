import "./landing.css";
import NavBar from "../header/nav";
import Footer from "../footer/Footer";

function LandingPage() {
  return (
    <div className="">
      <NavBar />
      <div className="container-fluid bg-segundo-image  ">
        <div className="row align-items-center justify-content-center center p-3">
          <div className="display-4 text-white-50 ">
            BIENESTAR Y SALUD
            <div className="text-white-50 ">OCUPACIONAL</div>
          </div>

          <div className="h2 text-white-50 ">
            Empecémonos a cuidar en el trabajo
          </div>
          <div className="row justify-content-center">
            <div className="col-auto p-2 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-radius  btn-block p-3 px-5 "
              >
                Descargar Aplicacion
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex text-center center respon">
        <div className="col-md-6">
          <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100 ">
              <div className=" container">
                <div className="row  px-5">
                  <div className="h1 text-start mb-5">SOBRE NOSOTROS</div>
                  <div className="p text-start ">
                    Somos una aplicación que ayudará a nuestro colaboradores a
                    mejorar su calidad de vida y, por consiguiente, su desempeño
                    en el trabajo. Lo haremos mediante el control de su salud y
                    bienestar tanto fuera como dentro del ttabajo.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 bg-tercero-image"></div>
      </div>
      <div className="d-flex center   position-relativ respon">
        <div></div>
        <div
          className="col-md-3 "
          style={{ backgroundColor: "rgba(162,146,204)" }}
        >
          <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-white-50 ">
            <div className="font-weight-bold mb-4"> MIS INDICADORES</div>
            <div className="p font-weight-light w-50">
              <small>Indicadores actuales de salud</small>
            </div>
          </div>
        </div>
        <div className="col-md-3 bg-secondary bg-gradient">
          <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-white-50 ">
            <div className="font-weight-bold mb-4"> MIS INDICADORES</div>
            <div className="p font-weight-light w-50">
              <small>¿Qué resultados quiero alcanzar?</small>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 "
          style={{ backgroundColor: "rgba(116,107,156)" }}
        >
          <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-white-50 ">
            <div className="font-weight-bold mb-4"> MIS INDICADORES</div>
            <div className="p font-weight-light w-50">
              <small>¿Qué he logrado?</small>
            </div>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{ backgroundColor: "rgba(230,156,185)" }}
        >
          <div className=" d-flex flex-column align-items-center justify-content-center h-100 text-white-50 ">
            <div className="font-weight-bold mb-4"> MIS INDICADORES</div>
            <div className="p font-weight-light w-50">
              <small> Planes para lograr obtjetivos</small>
            </div>
          </div>
        </div>
      </div>
      <div className="center " style={{ backgroundColor: "rgba(213,213,213)" }}>
        <div className="container h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 ">
            <div className="display-4">COMO FUNCIONA</div>
            <div className="lead">
              Explicación del paso a paso para usar la app
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(194,187,222)" }}
      >
        <div className="d-flex row ">
          <div className="display-5 w-50 pt-4 m-auto">
            ¿ESTAS INTERESADO? PONTE EN CONTACTO CON NOSOTROS
          </div>
          <div className="container mt-5">
            <div className="row w-50 m-auto">
              <form className="user" autoComplete="off">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    placeholder="Email..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Numro de contacto..."
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-user btn-block"
                  value="enviar"
                />
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LandingPage;
