import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ValidCalcUnit() {
  let dispatch = useDispatch();
  useSelector((dat) => dat.getErrorMessage());
  let buttonstate = useSelector((dat) => dat.getButtonState());
  let errormes = useSelector((dat) => dat.errormessage);
  let tv = useSelector((dat) => dat.timeinstall);
  let to1 = useSelector((dat) => dat.maintime1);
  let to2 = useSelector((dat) => dat.maintime2);
  let to3 = useSelector((dat) => dat.maintime3);
  let to4 = useSelector((dat) => dat.maintime4);
  let numsurf = useSelector((dat) => dat.numsurfaces);

  return (
    <>
      <button
        className="buttoncalc fs-4"
        data-bs-target="#errorModal"
        data-bs-toggle={buttonstate}
        onClick={() => dispatch({ type: "CALCULATIONTIME" })}
      >
        Рассчитать
      </button>
      <div className="rezult">
        <h3>Вспомагательное время Тв, мин = {tv}</h3>
        <h3>
          Основное время То, мин ={" "}
          {numsurf == "n1"
            ? to1
            : numsurf == "n2"
            ? +to1 + "+" + +to2 + "=" + (+to1 + +to2).toFixed(1)
            : numsurf == "n3"
            ? +to1 + "+" + +to2 + "+" + +to3 + "=" + (+to1 + +to2 + +to3).toFixed(1)
            : +to1 +
              "+" +
              +to2 +
              "+" +
              +to3 +
              "+" +
              +to4 +
              "=" +
              (+to1 + +to2 + +to3 + +to4).toFixed(1)}
        </h3>
      </div>

      <div
        class="modal fade"
        id="errorModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Обнаружены ошибки:
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div class="modal-body">
              <ol>
                {errormes.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValidCalcUnit;
