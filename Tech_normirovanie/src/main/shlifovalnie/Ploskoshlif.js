import React from "react";
import "./../main.css";
import { useState } from "react";

function Ploskoshlif(props) {
  let installedParts = React.createRef();
  let depth1 = React.createRef();
  let roughness1 = React.createRef();
  let depth2 = React.createRef();
  let roughness2 = React.createRef();
  let depth3 = React.createRef();
  let roughness3 = React.createRef();
  let depth4 = React.createRef();
  let roughness4 = React.createRef();
  let instAcc1 = React.createRef();
  let instAcc2 = React.createRef();
  let instAcc3 = React.createRef();
  let instAcc4 = React.createRef();
  let instAcc5 = React.createRef();

  const [model, setModel] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [maxWidth, setMaxWidth] = useState("");
  const [maxWeight, setmaxWeight] = useState("");

  const [width1, setWidth1] = useState();
  const [width2, setWidth2] = useState();
  const [width3, setWidth3] = useState();
  const [width4, setWidth4] = useState();
  const [length1, setLength1] = useState();
  const [length2, setLength2] = useState();
  const [length3, setLength3] = useState();
  const [length4, setLength4] = useState();
  const [partAccuracy1, setPartAccuracy1] = useState();
  const [partAccuracy2, setPartAccuracy2] = useState();
  const [partAccuracy3, setPartAccuracy3] = useState();
  const [partAccuracy4, setPartAccuracy4] = useState();
  const [partRoughness1, setPartRoughness1] = useState();
  const [partRoughness2, setPartRoughness2] = useState();
  const [partRoughness3, setPartRoughness3] = useState();
  const [partRoughness4, setPartRoughness4] = useState();

  const [numSurf, setNumSurf] = useState("n1"); //количество поверхностей
  const [install, setInstall] = useState("magnitTable"); //способ установки
  const [installaccuracy, setinstallaccuracy] = useState(0.5); //точность установки
  const [reinstall, setReinstall] = useState(0); //количество переустановок
  const [partMaterial, setPartMaterial] = useState("matP");
  const [hardnessPart, setHardnessPart] = useState("h1");
  const [massPart, setMassPart] = useState();

  const [stiffnessPart, setStiffnessPart] = useState("s1");

  const [osn1, setOsn1] = useState("0.0");
  const [osn2, setOsn2] = useState("0");
  const [osn3, setOsn3] = useState("0");
  const [osn4, setOsn4] = useState("0");
  const [Tvsp, setTvsp] = useState("0.0");

  const [errorMessage, setErrorMessage] = useState();

  function calculationNorm() {
    console.log(numSurf);
    if (!model) {
      setErrorMessage(<li>Не выбран станок</li>);
      return false;
    } else if (massPart > maxWeight) {
      setErrorMessage(<li>Вес детали больше допустимого для данного станка</li>);
      console.log("перебор по массе");
      return false;
    } else if (
      (numSurf == "n1" && length1 > maxLength) ||
      (numSurf == "n2" && (length1 > maxLength || length2 > maxLength)) ||
      (numSurf == "n3" && (length1 > maxLength || length2 > maxLength || length3 > maxLength)) ||
      (numSurf == "n4" &&
        (length1 > maxLength || length2 > maxLength || length3 > maxLength || length4 > maxLength))
    ) {
      setErrorMessage(<li>Длина детали больше допустимой для данного станка</li>);

      return false;
    } else if (
      (numSurf == "n1" && width1 > maxWidth) ||
      (numSurf == "n2" && (width1 > maxWidth || width2 > maxWidth)) ||
      (numSurf == "n3" && (width1 > maxWidth || width2 > maxWidth || width3 > maxWidth)) ||
      (numSurf == "n4" &&
        (width1 > maxWidth || width2 > maxWidth || width3 > maxWidth || width4 > maxWidth))
    ) {
      setErrorMessage(<li>Ширина детали больше допустимой для данного станка</li>);
      return false;
    } else if (
      (numSurf == "n1" && !partAccuracy1) ||
      (numSurf == "n2" && (!partAccuracy1 || !partAccuracy2)) ||
      (numSurf == "n3" && (!partAccuracy1 || !partAccuracy2 || !partAccuracy3)) ||
      (numSurf == "n4" && (!partAccuracy1 || !partAccuracy2 || !partAccuracy3 || !partAccuracy4))
    ) {
      setErrorMessage(<li>Не выбрана точность и шероховатость обработки</li>);
      return false;
    } else if (
      (numSurf == "n1" && !partRoughness1) ||
      (numSurf == "n2" && (!partRoughness1 || !partRoughness2)) ||
      (numSurf == "n3" && (!partRoughness1 || !partRoughness2 || !partRoughness3)) ||
      (numSurf == "n4" &&
        (!partRoughness1 || !partRoughness2 || !partRoughness3 || !partRoughness4))
    ) {
      setErrorMessage(<li>Не выбрана шероховатость обработки</li>);
      return false;
    } else {
      let vsp = props.getTimeInstall(
        install,
        installaccuracy,
        Number(massPart),
        Number(installedParts.current.value),
        reinstall
      );
      setTvsp(vsp);

      switch (numSurf) {
        case "n1":
          setOsn1(
            props.getMainTime(
              model,
              Number(width1),
              Number(length1),
              Number(depth1.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy1,
              partRoughness1,
              partMaterial
            )
          );
          setOsn2(0);
          setOsn3(0);
          setOsn4(0);
          break;
        case "n2":
          setOsn1(
            props.getMainTime(
              model,
              Number(width1),
              Number(length1),
              Number(depth1.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy1,
              partRoughness1,
              partMaterial
            )
          );
          setOsn2(
            props.getMainTime(
              model,
              Number(width2),
              Number(length2),
              Number(depth2.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy2,
              partRoughness2,
              partMaterial
            )
          );
          setOsn3(0);
          setOsn4(0);
          break;
        case "n3":
          setOsn1(
            props.getMainTime(
              model,
              Number(width1),
              Number(length1),
              Number(depth1.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy1,
              partRoughness1,
              partMaterial
            )
          );
          setOsn2(
            props.getMainTime(
              model,
              Number(width2),
              Number(length2),
              Number(depth2.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy2,
              partRoughness2,
              partMaterial
            )
          );
          setOsn3(
            props.getMainTime(
              model,
              Number(width3),
              Number(length3),
              Number(depth3.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy3,
              partRoughness3,
              partMaterial
            )
          );
          setOsn4(0);
          break;
        case "n4":
          setOsn1(
            props.getMainTime(
              model,
              Number(width1),
              Number(length1),
              Number(depth1.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy1,
              partRoughness1,
              partMaterial
            )
          );
          setOsn2(
            props.getMainTime(
              model,
              Number(width2),
              Number(length2),
              Number(depth2.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy2,
              partRoughness2,
              partMaterial
            )
          );
          setOsn3(
            props.getMainTime(
              model,
              Number(width3),
              Number(length3),
              Number(depth3.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy3,
              partRoughness3,
              partMaterial
            )
          );
          setOsn4(
            props.getMainTime(
              model,
              Number(width4),
              Number(length4),
              Number(depth4.current.value),
              Number(installedParts.current.value),
              hardnessPart,
              stiffnessPart,
              partAccuracy4,
              partRoughness4,
              partMaterial
            )
          );
          break;
      }
    }
  }
  function setprofiles(e) {
    setModel(e.target.value);
    if (!e.target.value) {
      setMaxLength("");
      setMaxWidth("");
      setmaxWeight("");
      return false;
    } else {
      setMaxLength(props.getCharacteristics(e.target.value).maxL);
      setMaxWidth(props.getCharacteristics(e.target.value).maxB);
      setmaxWeight(props.getCharacteristics(e.target.value).maxWeight);
    }
  }
  function installOption(e) {
    setInstall(e.target.value);
    instAcc1.current.checked = false;
    instAcc2.current.checked = false;
    instAcc3.current.checked = false;
    instAcc4.current.checked = false;
    instAcc5.current.checked = false;
    setinstallaccuracy("");
  }
  function instAccuracy(e) {
    setinstallaccuracy(e.target.value);
  }
  function NumReinstall(e) {
    setReinstall(e.target.value);
  }
  function countSurf(e) {
    setNumSurf(e.target.value);
  }

  // ---------------------------------------------

  function getMass(e) {
    let inp = e.target.value.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
    e.target.value = inp;
    setMassPart(inp);
  }

  function surfaceAccuracy1(e) {
    setPartAccuracy1(e.target.value);
    roughness1.current.value = "";
    setPartRoughness1("");
  }
  function surfaceAccuracy2(e) {
    setPartAccuracy2(e.target.value);
    roughness2.current.value = "";
    setPartRoughness2("");
  }
  function surfaceAccuracy3(e) {
    setPartAccuracy3(e.target.value);
    roughness3.current.value = "";
    setPartRoughness3("");
  }
  function surfaceAccuracy4(e) {
    setPartAccuracy4(e.target.value);
    roughness4.current.value = "";
    setPartRoughness4("");
  }

  // -----------------------------------------------

  function getpartMaterial(e) {
    setPartMaterial(e.target.value);
  }
  function getHardness(e) {
    setHardnessPart(e.target.value);
  }
  function getStiffness(e) {
    setStiffnessPart(e.target.value);
  }
  function validInstalledParts(e) {
    const regEx = /[^\d]/g;
    let inp = e.target.value.replace(regEx, "");
    e.target.value = inp;
  }
  function validMass(e) {
    let inp = e.target.value.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
    e.target.value = inp;
  }

  return (
    <section>
      <h1 className="text-center mb-4">Нормирование плоскошлифовальной операции</h1>

      <div className="infoblock">
        <div className="infoblock__item">
          <div className="inpname">Модель станка:</div>
          <select id="model" className="selectbox" onChange={setprofiles}>
            <option selected></option>
            <option value="3B722">3Б722</option>
            <option value="3D725">3Д725</option>
            {/* <option value="3508">3508</option> */}
          </select>
        </div>
        <div className="infoblock__item">
          <div className="inpname">Max длина детали, мм: </div>
          <span>{maxLength}</span>
          <br />
          <div className="inpname">Max ширина детали, мм: </div>
          <span>{maxWidth}</span>
          <br />
          <div className="inpname">Max вес детали, кг: </div>
          <span>{maxWeight}</span>
        </div>
      </div>

      <div className="infoblock">
        <div className="infoblock__item">
          <label htmlFor="mass" className="inpname" data-bs-toggle="123">
            Масса детали, кг:
          </label>
          <input type="text" id="mass" className="selectbox" onInput={getMass} />
        </div>

        <div className="infoblock__item infoblock__item_top">
          <div className="inpname">Материал детали:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check">
              <input
                type="radio"
                name="material"
                className="form-check-input"
                id="mat1"
                value="matP"
                onChange={getpartMaterial}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="mat1">
                углеродистые и легированные стали
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="material"
                className="form-check-input"
                id="mat2"
                value="matM"
                onChange={getpartMaterial}
              />
              <label className="form-check-label" htmlFor="mat2">
                нержавеющие стали
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="material"
                className="form-check-input"
                id="mat3"
                value="matK"
                onChange={getpartMaterial}
              />
              <label className="form-check-label" htmlFor="mat3">
                чугун, бронза
              </label>
            </div>
          </div>
        </div>
        <div className="infoblock__item">
          <div className="inpname">Твердость HRCэ:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                id="hardness1"
                value="h1"
                onChange={getHardness}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="hardness1">
                менее 30
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                id="hardness2"
                value="h2"
                onChange={getHardness}
              />
              <label className="form-check-label" htmlFor="hardness2">
                от 30 до 50
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="hardness"
                className="form-check-input"
                id="hardness3"
                value="h3"
                onChange={getHardness}
              />
              <label className="form-check-label" htmlFor="hardness3">
                свыше 50
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="infoblock">
        <div className="infoblock__item">
          <label htmlFor="numberparts" className="inpname">
            Установлено деталей:
          </label>
          <input
            type="text"
            id="numberparts"
            className="selectbox"
            ref={installedParts}
            defaultValue={1}
            onInput={validInstalledParts}
          />
        </div>
        <div className="infoblock__item infoblock__item_top">
          <div className="inpname">Вариант установки:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check">
              <input
                type="radio"
                name="installOption"
                className="form-check-input"
                id="ust1"
                value="magnitTable"
                onChange={installOption}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="ust1">
                на магнитном столе
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="installOption"
                className="form-check-input"
                id="ust2"
                value="boltPlankiV1pl"
                onChange={installOption}
              />
              <label className="form-check-label" htmlFor="ust2">
                крепление планками с выверкой в 1 плоскости
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="installOption"
                className="form-check-input"
                id="ust3"
                value="boltPlankiV2pl"
                onChange={installOption}
              />
              <label className="form-check-label" htmlFor="ust3">
                крепление планками с выверкой в 2 плоскостях
              </label>
            </div>
          </div>
        </div>

        <div className="infoblock__item">
          <div className="inpname">Точность выверки:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                id="acc1"
                value="0"
                onChange={instAccuracy}
                disabled={install == "magnitTable" ? false : true}
                ref={instAcc1}
              />
              <label className="form-check-label" htmlFor="stiffness1">
                без выверки
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                id="acc2"
                value="0.5"
                onChange={instAccuracy}
                ref={instAcc2}
              />
              <label className="form-check-label" htmlFor="stiffness2">
                до 0,5
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                id="acc3"
                value="0.1"
                onChange={instAccuracy}
                ref={instAcc3}
                disabled={install == "magnitTable" ? true : false}
              />
              <label className="form-check-label" htmlFor="stiffness2">
                до 0,1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                id="acc4"
                value="0.05"
                onChange={instAccuracy}
                ref={instAcc4}
                disabled={install == "magnitTable" ? true : false}
              />
              <label className="form-check-label" htmlFor="stiffness2">
                до 0,05
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="positionaccuracy"
                className="form-check-input"
                id="acc5"
                value="0.01"
                onChange={instAccuracy}
                ref={instAcc5}
                disabled={install == "magnitTable" ? true : false}
              />
              <label className="form-check-label" htmlFor="stiffness2">
                до 0,01
              </label>
            </div>
          </div>
        </div>
        {/* </div>
      <div className="infoblock"> */}
        <div className="infoblock__item">
          <div className="inpname">Переустановки:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="colust"
                className="form-check-input"
                id="reinst1"
                value="0"
                onChange={NumReinstall}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="reinst1">
                0
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="colust"
                className="form-check-input"
                id="reinst2"
                value="1"
                onChange={NumReinstall}
              />
              <label className="form-check-label" htmlFor="reinst2">
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="colust"
                className="form-check-input"
                id="reinst3"
                value="2"
                onChange={NumReinstall}
              />
              <label className="form-check-label" htmlFor="reinst3">
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="colust"
                className="form-check-input"
                id="reinst4"
                value="3"
                onChange={NumReinstall}
              />
              <label className="form-check-label" htmlFor="reinst4">
                3
              </label>
            </div>
          </div>
        </div>

        <div className="infoblock__item">
          <div className="inpname">Отношение L/h:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="LtoH"
                className="form-check-input"
                id="stiffness1"
                value="s1"
                onChange={getStiffness}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="stiffness1">
                до 5
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="LtoH"
                className="form-check-input"
                id="stiffness2"
                value="s2"
                onChange={getStiffness}
              />
              <label className="form-check-label" htmlFor="stiffness2">
                от 5 до 10
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="LtoH"
                className="form-check-input"
                id="stiffness3"
                value="s3"
                onChange={getStiffness}
              />
              <label className="form-check-label" htmlFor="stiffness3">
                свыше 10
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="infoblock">
        <div className="infoblock__item">
          <div className="inpname">Обраб. поверхностей:</div>
          <div className="radiobox d-inline-block">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                id="surfaces1"
                value="n1"
                onChange={countSurf}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="surfaces1">
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                id="surfaces2"
                value="n2"
                onChange={countSurf}
              />
              <label className="form-check-label" htmlFor="surfaces2">
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                id="surfaces3"
                value="n3"
                onChange={countSurf}
              />
              <label className="form-check-label" htmlFor="surfaces3">
                3
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                id="surfaces4"
                value="n4"
                onChange={countSurf}
              />
              <label className="form-check-label" htmlFor="surfaces4">
                4
              </label>
            </div>
          </div>
        </div>

        <div className="infoblock__item">
          <div className="inpname">Ширина поверхности, мм:</div>
          <input
            type="text"
            id="width1"
            onInput={validMass}
            onChange={(e) => setWidth1(e.target.value)}
            className="selectbox"
          />
          <input
            type="text"
            id="width2"
            onInput={validMass}
            onChange={(e) => setWidth2(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n2" ||
              numSurf == "n3" ||
              numSurf == "n4" ||
              numSurf == "n5" ||
              numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="width3"
            onInput={validMass}
            onChange={(e) => setWidth3(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n3" || numSurf == "n4" || numSurf == "n5" || numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="width4"
            onInput={validMass}
            onChange={(e) => setWidth4(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n4" || numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="width5"
            className={
              "selectbox selectbox_next" + (numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="width6"
            className={"selectbox selectbox_next" + (numSurf == "n6" ? " active" : "")}
          />
        </div>
        <div className="infoblock__item">
          <div className="inpname">Длина поверхности, мм:</div>
          <input
            type="text"
            id="length1"
            onInput={validMass}
            className="selectbox"
            onChange={(e) => setLength1(e.target.value)}
          />
          <input
            type="text"
            id="length2"
            onChange={(e) => setLength2(e.target.value)}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n2" ||
              numSurf == "n3" ||
              numSurf == "n4" ||
              numSurf == "n5" ||
              numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="length3"
            onChange={(e) => setLength3(e.target.value)}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n3" || numSurf == "n4" || numSurf == "n5" || numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="length4"
            onChange={(e) => setLength4(e.target.value)}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n4" || numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="length5"
            className={
              "selectbox selectbox_next" + (numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="length6"
            className={"selectbox selectbox_next" + (numSurf == "n6" ? " active" : "")}
          />
        </div>
        <div className="infoblock__item">
          <div className="inpname">Припуск на обработку, мм:</div>
          <input type="text" id="prip1" onInput={validMass} className="selectbox" ref={depth1} />
          <input
            type="text"
            id="prip2"
            ref={depth2}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n2" ||
              numSurf == "n3" ||
              numSurf == "n4" ||
              numSurf == "n5" ||
              numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="prip3"
            ref={depth3}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n3" || numSurf == "n4" || numSurf == "n5" || numSurf == "n6"
                ? " active"
                : "")
            }
          />
          <input
            type="text"
            id="prip4"
            ref={depth4}
            onInput={validMass}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n4" || numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="prip5"
            className={
              "selectbox selectbox_next" + (numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          />
          <input
            type="text"
            id="prip6"
            className={"selectbox selectbox_next" + (numSurf == "n6" ? " active" : "")}
          />
        </div>

        <div className="infoblock__item">
          <div className="inpname">Квалитет точности:</div>
          <select id="accuracy1" onChange={surfaceAccuracy1} className="selectbox">
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>

          <select
            id="accuracy2"
            onChange={surfaceAccuracy2}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n2" ||
              numSurf == "n3" ||
              numSurf == "n4" ||
              numSurf == "n5" ||
              numSurf == "n6"
                ? " active"
                : "")
            }
          >
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>

          <select
            id="accuracy3"
            onChange={surfaceAccuracy3}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n3" || numSurf == "n4" || numSurf == "n5" || numSurf == "n6"
                ? " active"
                : "")
            }
          >
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>

          <select
            id="accuracy4"
            onChange={surfaceAccuracy4}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n4" || numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          >
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>

          <select
            id="accuracy5"
            className={
              "selectbox selectbox_next" + (numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          >
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>

          <select
            id="accuracy6"
            className={"selectbox selectbox_next" + (numSurf == "n6" ? " active" : "")}
          >
            <option selected></option>
            <option value="6_7">6-7</option>
            <option value="8_9">8-9</option>
            <option value="10_14">10-14</option>
          </select>
        </div>

        <div className="infoblock__item">
          <div className="inpname">Шероховатость Ra, мм:</div>

          <select
            id="sher1"
            className="selectbox"
            ref={roughness1}
            onChange={(e) => setPartRoughness1(e.target.value)}
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy1 == "6_7" || partAccuracy1 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy1 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>

          <select
            id="sher2"
            ref={roughness2}
            onChange={(e) => setPartRoughness2(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n2" ||
              numSurf == "n3" ||
              numSurf == "n4" ||
              numSurf == "n5" ||
              numSurf == "n6"
                ? " active"
                : "")
            }
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy2 == "6_7" || partAccuracy2 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy2 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>

          <select
            id="sher3"
            ref={roughness3}
            onChange={(e) => setPartRoughness3(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n3" || numSurf == "n4" || numSurf == "n5" || numSurf == "n6"
                ? " active"
                : "")
            }
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy3 == "6_7" || partAccuracy3 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy3 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>

          <select
            id="sher4"
            ref={roughness4}
            onChange={(e) => setPartRoughness4(e.target.value)}
            className={
              "selectbox selectbox_next" +
              (numSurf == "n4" || numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy4 == "6_7" || partAccuracy4 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy4 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>

          <select
            id="sher5"
            className={
              "selectbox selectbox_next" + (numSurf == "n5" || numSurf == "n6" ? " active" : "")
            }
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy4 == "6_7" || partAccuracy4 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy4 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>

          <select
            id="sher6"
            className={"selectbox selectbox_next" + (numSurf == "n6" ? " active" : "")}
          >
            <option selected></option>
            <option
              value="Ra3.2"
              disabled={partAccuracy4 == "6_7" || partAccuracy4 == "8_9" ? true : false}
            >
              Ra3.2
            </option>
            <option value="Ra1.6">Ra1.6</option>
            <option value="Ra0.8">Ra0.8</option>
            <option value="Ra0.4" disabled={partAccuracy4 == "10_14" ? true : false}>
              Ra0.4
            </option>
          </select>
        </div>
      </div>
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
      </div>
    </section>
  );
}

export default Ploskoshlif;
