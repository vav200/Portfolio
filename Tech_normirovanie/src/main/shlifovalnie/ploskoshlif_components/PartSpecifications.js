import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartSpecifications() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat);

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <label className="inpname">Масса детали, кг:</label>
        <input
          type="text"
          className="selectbox"
          value={statenow.partweight}
          onChange={(e) => dispatch({ type: "WEIGHT", data: e.target.value })}
        />
      </div>

      <div className="infoblock__item infoblock__item_top">
        <div className="inpname">Материал детали:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              углеродистые и легированные стали
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matP"
                onChange={(e) => dispatch({ type: "MATERIAL", data: e.target.value })}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              нержавеющие стали
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matM"
                onChange={(e) => dispatch({ type: "MATERIAL", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              чугун, бронза
              <input
                type="radio"
                name="material"
                className="form-check-input"
                value="matK"
                onChange={(e) => dispatch({ type: "MATERIAL", data: e.target.value })}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Твердость HRCэ:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              менее 30
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h1"
                onChange={(e) => dispatch({ type: "HARDNESS", data: e.target.value })}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 30 до 50
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h2"
                onChange={(e) => dispatch({ type: "HARDNESS", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свыше 50
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                value="h3"
                onChange={(e) => dispatch({ type: "HARDNESS", data: e.target.value })}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Отношение L/h:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 5
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s1"
                onChange={(e) => dispatch({ type: "STIFFNESS", data: e.target.value })}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              от 5 до 10
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s2"
                onChange={(e) => dispatch({ type: "STIFFNESS", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              свыше 10
              <input
                type="radio"
                name="stiffness"
                className="form-check-input"
                value="s3"
                onChange={(e) => dispatch({ type: "STIFFNESS", data: e.target.value })}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartSpecifications;
