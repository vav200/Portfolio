import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PartSurfaces() {
  let dispatch = useDispatch();
  let numSurf = useSelector((dat) => dat.numsurfaces);
  let statenow = useSelector((dat) => dat);
  let roughness1 = React.createRef();
  let roughness2 = React.createRef();
  let roughness3 = React.createRef();
  let roughness4 = React.createRef();

  return (
    <div className="infoblock">
      <div className="infoblock__item">
        <div className="inpname">Обраб. поверхностей:</div>
        <div className="radiobox d-inline-block">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              1
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                value="n1"
                onChange={(e) => dispatch({ type: "NUMSURFACES", data: e.target.value })}
                defaultChecked
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="surfaces2">
              2
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                value="n2"
                onChange={(e) => dispatch({ type: "NUMSURFACES", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              3
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                value="n3"
                onChange={(e) => dispatch({ type: "NUMSURFACES", data: e.target.value })}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              4
              <input
                type="radio"
                name="numsurfaces"
                className="form-check-input"
                value="n4"
                onChange={(e) => dispatch({ type: "NUMSURFACES", data: e.target.value })}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="infoblock__item">
        <div className="inpname">Ширина поверхности, мм:</div>
        <input
          type="text"
          value={statenow.width1}
          onChange={(e) => dispatch({ type: "WIDTH1", data: e.target.value })}
          className="selectbox"
        />
        <input
          type="text"
          value={statenow.width2}
          onChange={(e) => dispatch({ type: "WIDTH2", data: e.target.value })}
          className={
            "selectbox selectbox_next" +
            (numSurf == "n2" || numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.width3}
          onChange={(e) => dispatch({ type: "WIDTH3", data: e.target.value })}
          className={
            "selectbox selectbox_next" + (numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.width4}
          onChange={(e) => dispatch({ type: "WIDTH4", data: e.target.value })}
          className={"selectbox selectbox_next" + (numSurf == "n4" ? " active" : "")}
        />
      </div>

      <div className="infoblock__item">
        <div className="inpname">Длина поверхности, мм:</div>
        <input
          type="text"
          className="selectbox"
          value={statenow.length1}
          onChange={(e) => dispatch({ type: "LENGTH1", data: e.target.value })}
        />
        <input
          type="text"
          value={statenow.length2}
          onChange={(e) => dispatch({ type: "LENGTH2", data: e.target.value })}
          className={
            "selectbox selectbox_next" +
            (numSurf == "n2" || numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.length3}
          onChange={(e) => dispatch({ type: "LENGTH3", data: e.target.value })}
          className={
            "selectbox selectbox_next" + (numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.length4}
          onChange={(e) => dispatch({ type: "LENGTH4", data: e.target.value })}
          className={"selectbox selectbox_next" + (numSurf == "n4" ? " active" : "")}
        />
      </div>

      <div className="infoblock__item">
        <div className="inpname">Припуск на обработку, мм:</div>
        <input
          type="text"
          value={statenow.allowance1}
          onChange={(e) => dispatch({ type: "ALLOWANCE1", data: e.target.value })}
          className="selectbox"
        />
        <input
          type="text"
          value={statenow.allowance2}
          onChange={(e) => dispatch({ type: "ALLOWANCE2", data: e.target.value })}
          className={
            "selectbox selectbox_next" +
            (numSurf == "n2" || numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.allowance3}
          onChange={(e) => dispatch({ type: "ALLOWANCE3", data: e.target.value })}
          className={
            "selectbox selectbox_next" + (numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        />
        <input
          type="text"
          value={statenow.allowance4}
          onChange={(e) => dispatch({ type: "ALLOWANCE4", data: e.target.value })}
          className={"selectbox selectbox_next" + (numSurf == "n4" ? " active" : "")}
        />
      </div>

      <div className="infoblock__item">
        <div className="inpname">Квалитет точности:</div>
        <select
          onChange={(e) => {
            roughness1.current.value = "";
            return dispatch({ type: "ACCURACY1", data: e.target.value });
          }}
          className="selectbox"
        >
          <option selected></option>
          <option value="6_7">6-7</option>
          <option value="8_9">8-9</option>
          <option value="10_14">10-14</option>
        </select>
        <select
          onChange={(e) => {
            roughness2.current.value = "";
            return dispatch({ type: "ACCURACY2", data: e.target.value });
          }}
          className={
            "selectbox selectbox_next" +
            (numSurf == "n2" || numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        >
          <option selected></option>
          <option value="6_7">6-7</option>
          <option value="8_9">8-9</option>
          <option value="10_14">10-14</option>
        </select>
        <select
          onChange={(e) => {
            roughness3.current.value = "";
            return dispatch({ type: "ACCURACY3", data: e.target.value });
          }}
          className={
            "selectbox selectbox_next" + (numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        >
          <option selected></option>
          <option value="6_7">6-7</option>
          <option value="8_9">8-9</option>
          <option value="10_14">10-14</option>
        </select>
        <select
          onChange={(e) => {
            roughness4.current.value = "";
            return dispatch({ type: "ACCURACY4", data: e.target.value });
          }}
          className={"selectbox selectbox_next" + (numSurf == "n4" ? " active" : "")}
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
          className="selectbox"
          ref={roughness1}
          onChange={(e) => dispatch({ type: "ROUGHNESS1", data: e.target.value })}
          defaultValue={5}
        >
          <option selected></option>
          <option value="Ra3.2" disabled={statenow.accuracy1 != "10_14" ? true : false}>
            Ra3.2
          </option>
          <option value="Ra1.6">Ra1.6</option>
          <option value="Ra0.8">Ra0.8</option>
          <option value="Ra0.4" disabled={statenow.accuracy1 == "10_14" ? true : false}>
            Ra0.4
          </option>
        </select>
        <select
          ref={roughness2}
          onChange={(e) => dispatch({ type: "ROUGHNESS2", data: e.target.value })}
          className={
            "selectbox selectbox_next" +
            (numSurf == "n2" || numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        >
          <option selected></option>
          <option value="Ra3.2" disabled={statenow.accuracy2 != "10_14" ? true : false}>
            Ra3.2
          </option>
          <option value="Ra1.6">Ra1.6</option>
          <option value="Ra0.8">Ra0.8</option>
          <option value="Ra0.4" disabled={statenow.accuracy2 == "10_14" ? true : false}>
            Ra0.4
          </option>
        </select>
        <select
          ref={roughness3}
          onChange={(e) => dispatch({ type: "ROUGHNESS3", data: e.target.value })}
          className={
            "selectbox selectbox_next" + (numSurf == "n3" || numSurf == "n4" ? " active" : "")
          }
        >
          <option selected></option>
          <option value="Ra3.2" disabled={statenow.accuracy3 != "10_14" ? true : false}>
            Ra3.2
          </option>
          <option value="Ra1.6">Ra1.6</option>
          <option value="Ra0.8">Ra0.8</option>
          <option value="Ra0.4" disabled={statenow.accuracy3 == "10_14" ? true : false}>
            Ra0.4
          </option>
        </select>
        <select
          ref={roughness4}
          onChange={(e) => dispatch({ type: "ROUGHNESS4", data: e.target.value })}
          className={"selectbox selectbox_next" + (numSurf == "n4" ? " active" : "")}
        >
          <option selected></option>
          <option value="Ra3.2" disabled={statenow.accuracy4 != "10_14" ? true : false}>
            Ra3.2
          </option>
          <option value="Ra1.6">Ra1.6</option>
          <option value="Ra0.8">Ra0.8</option>
          <option value="Ra0.4" disabled={statenow.accuracy4 == "10_14" ? true : false}>
            Ra0.4
          </option>
        </select>
      </div>
    </div>
  );
}

export default PartSurfaces;
