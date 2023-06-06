import React from "react";
import "./../../main.css";
import { useDispatch, useSelector } from "react-redux";

function PartInstallation() {
  let dispatch = useDispatch();
  let statenow = useSelector((dat) => dat);
  let acc1 = React.createRef();
  let acc2 = React.createRef();
  let acc3 = React.createRef();
  let acc4 = React.createRef();
  let acc5 = React.createRef();

  function changeInstallationMethod(e) {
    acc1.current.checked = false;
    acc2.current.checked = false;
    acc3.current.checked = false;
    acc4.current.checked = false;
    acc5.current.checked = false;
    return dispatch({ type: "INSTALLOPTION", data: e.target.value });
  }
  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Установлено деталей:</div>
        <input
          type="text"
          className="selectbox"
          value={statenow.numberparts}
          onChange={(e) => dispatch({ type: "NUMBERPARTS", data: e.target.value })}
        />
      </div>
      <div className="infoblock__item infoblock__item_top">
        <div className="inpname">Вариант установки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check">
            <label className="form-check-label">
              на магнитном столе
              <input
                type="radio"
                name="installoption"
                className="form-check-input"
                value="magnitTable"
                onChange={changeInstallationMethod}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              крепление планками с выверкой в 1 плоскости
              <input
                type="radio"
                name="installoption"
                className="form-check-input"
                value="boltPlankiV1pl"
                onChange={changeInstallationMethod}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              крепление планками с выверкой в 2 плоскостях
              <input
                type="radio"
                name="installoption"
                className="form-check-input"
                value="boltPlankiV2pl"
                onChange={changeInstallationMethod}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Точность установки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              без выверки
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                value="0"
                onChange={(e) => dispatch({ type: "POSITIONACCURACY", data: e.target.value })}
                disabled={statenow.installoption == "magnitTable" ? false : true}
                ref={acc1}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 0,5
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                value="0.5"
                onChange={(e) => dispatch({ type: "POSITIONACCURACY", data: e.target.value })}
                ref={acc2}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 0,1
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                value="0.1"
                onChange={(e) => dispatch({ type: "POSITIONACCURACY", data: e.target.value })}
                disabled={statenow.installoption == "magnitTable" ? true : false}
                ref={acc3}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 0,05
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                value="0.05"
                onChange={(e) => dispatch({ type: "POSITIONACCURACY", data: e.target.value })}
                disabled={statenow.installoption == "magnitTable" ? true : false}
                ref={acc4}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              до 0,01
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                value="0.01"
                onChange={(e) => dispatch({ type: "POSITIONACCURACY", data: e.target.value })}
                disabled={statenow.installoption == "magnitTable" ? true : false}
                ref={acc5}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="infoblock__item">
        <div className="inpname">Переустановки:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              0
              <input
                type="radio"
                name="numberReinstall"
                className="form-check-input"
                value="0"
                onChange={(e) => dispatch({ type: "NUMBERREINSTALL", data: e.target.value })}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              1
              <input
                type="radio"
                name="numberReinstall"
                className="form-check-input"
                value="1"
                onChange={(e) => dispatch({ type: "NUMBERREINSTALL", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              2
              <input
                type="radio"
                name="numberReinstall"
                className="form-check-input"
                value="2"
                onChange={(e) => dispatch({ type: "NUMBERREINSTALL", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              3
              <input
                type="radio"
                name="numberReinstall"
                className="form-check-input"
                value="3"
                onChange={(e) => dispatch({ type: "NUMBERREINSTALL", data: e.target.value })}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartInstallation;
