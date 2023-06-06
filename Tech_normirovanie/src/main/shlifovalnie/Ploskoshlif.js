import React from "react";
import "./../main.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MachineSpecification from "./ploskoshlif_components/MachineSpecification";
import PartSpecifications from "./ploskoshlif_components/PartSpecifications";
import PartInstallation from "./ploskoshlif_components/PartInstallation";
import PartSurfaces from "./ploskoshlif_components/PartSurfaces";
import ValidCalcUnit from "./ploskoshlif_components/ValidCalcUnit";

function Ploskoshlif() {
  let statenow = useSelector((dat) => dat);
  console.log(statenow);
  return (
    <section>
      <h1 className="text-center mb-4">Нормирование плоскошлифовальной операции</h1>
      <MachineSpecification />
      <PartSpecifications />
      <PartInstallation />
      <PartSurfaces />
      <ValidCalcUnit />

      {/* 
      
      <button
        className="buttoncalc fs-4"
        onClick={calculationNorm}
        data-bs-toggle={
          !model ||
          massPart > maxWeight ||
          (numSurf == "n1" && length1 > maxLength) ||
          (numSurf == "n2" && (length1 > maxLength || length2 > maxLength)) ||
          (numSurf == "n3" &&
            (length1 > maxLength || length2 > maxLength || length3 > maxLength)) ||
          (numSurf == "n4" &&
            (length1 > maxLength ||
              length2 > maxLength ||
              length3 > maxLength ||
              length4 > maxLength)) ||
          (numSurf == "n1" && width1 > maxWidth) ||
          (numSurf == "n2" && (width1 > maxWidth || width2 > maxWidth)) ||
          (numSurf == "n3" && (width1 > maxWidth || width2 > maxWidth || width3 > maxWidth)) ||
          (numSurf == "n4" &&
            (width1 > maxWidth || width2 > maxWidth || width3 > maxWidth || width4 > maxWidth)) ||
          (numSurf == "n1" && !partAccuracy1) ||
          (numSurf == "n2" && (!partAccuracy1 || !partAccuracy2)) ||
          (numSurf == "n3" && (!partAccuracy1 || !partAccuracy2 || !partAccuracy3)) ||
          (numSurf == "n4" &&
            (!partAccuracy1 || !partAccuracy2 || !partAccuracy3 || !partAccuracy4)) ||
          (numSurf == "n1" && !partRoughness1) ||
          (numSurf == "n2" && (!partRoughness1 || !partRoughness2)) ||
          (numSurf == "n3" && (!partRoughness1 || !partRoughness2 || !partRoughness3)) ||
          (numSurf == "n4" &&
            (!partRoughness1 || !partRoughness2 || !partRoughness3 || !partRoughness4))
            ? "modal"
            : ""
        }
        data-bs-target="#errorModal"
      >
        Рассчитать
      </button>
      <div className="rezult">
        <h3>Вспомагательное время Тв, мин = {Tvsp}</h3>
        <h3>
          Основное время То, мин ={" "}
          {numSurf == "n1"
            ? osn1
            : numSurf == "n2"
            ? +osn1 + "+" + +osn2 + "=" + (+osn1 + +osn2).toFixed(1)
            : numSurf == "n3"
            ? +osn1 + "+" + +osn2 + "+" + +osn3 + "=" + (+osn1 + +osn2 + +osn3).toFixed(1)
            : +osn1 +
              "+" +
              +osn2 +
              "+" +
              +osn3 +
              "+" +
              +osn4 +
              "=" +
              (+osn1 + +osn2 + +osn3 + +osn4).toFixed(1)}
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
                Обнаружена ошибка:
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div class="modal-body">
              <ul>{errorMessage}</ul>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Ploskoshlif;
