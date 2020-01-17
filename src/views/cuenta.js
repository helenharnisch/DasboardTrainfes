import React from "react";
import Main from '../components/Main';
import CardTrainfes from '../components/Card/CardTrainfes.js';

const Cuenta = ({ }) => (
    <Main title={"Perfil Usuario"}>
    <a style={{ displa: "block", position: 'absolute', top: '70px', left: '0', cursor: 'pointer' }} onClick={() => this.props.history.goBack()}></a>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <CardTrainfes>
            <form className="p-5">
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Rut</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rut"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Apellido</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">ID 1</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ID 1"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">ID 2</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ID 2"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nacimiento</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Nacimiento"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Teléfono</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Sexo</label>
                <div className="col-sm-8 col-lg-4">
                  <select id="inputState" class="form-control">
                    <option selected>Femenino</option>
                    <option>Masculino</option>
                  </select>
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Dirección</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Ciudad</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ciudad"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">País</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="País"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Codigo Postal</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Codigo Postal"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Seguro</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Compañía de Seguro"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Previsión</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Previsión"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Estatura</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Estatura"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Peso</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Peso"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Medico</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Medico"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Consulta</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Motivo Consulta"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Diagnostico</label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Diagnostico"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Intitución</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Intitución"
                    name=""
                  />
                </div>
                <label className="col-sm-4 col-lg-2 col-form-label">Años Lesión</label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Años Lesión"
                    name=""
                  />
                </div>
              </div>{ /* Form group */}
              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Comentarios</label>
                <div className="col-sm-8 col-lg-10">
                  <textarea
                    className="form-control"
                    placeholder="Comentarios"
                    name="comentarios"
                  />
                </div>
              </div>{ /* Form group */}
              <input type="submit" className="col-sm-3 mx-auto py-2 mt-5 btn bg-trainfes text-white btn-block" value="Actualizar"></input>
            </form>
          </CardTrainfes>
        </div>

      </div>
    </div>
  </Main>
)


export default Cuenta;