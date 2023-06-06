import React from "react";
import { createStore } from "redux";

const dataForCalculation = {
  machineModels: {
    "3D725": {
      characteristics: {
        part_maxL: 2000,
        part_maxB: 630,
        max_weight: 650,
      },
      tableSpeed: {
        roughing: {
          100: 68,
          150: 47,
          200: 36,
          250: 29,
          300: 24,
          350: 21,
          400: 18.5,
          450: 16,
          500: 15,
          550: 13,
          600: 12.5,
          650: 11.5,
          700: 10.5,
          750: 10,
          800: 9.5,
          850: 8.5,
          900: 8,
          950: 8,
          1000: 7.5,
          1100: 7,
          1200: 6,
          1300: 5.5,
          1400: 5.5,
          1500: 5,
          1600: 4.7,
          1700: 4.4,
          1800: 4.2,
          1900: 3.9,
          2000: 3.7,
        },
        finishing: {
          100: 73,
          150: 50,
          200: 38,
          250: 31,
          300: 26,
          350: 22,
          400: 19.5,
          450: 17.5,
          500: 16,
          550: 14,
          600: 13,
          650: 12,
          700: 11.5,
          750: 10.5,
          800: 10,
          850: 9.5,
          900: 9,
          950: 8.5,
          1000: 8,
          1100: 7.5,
          1200: 6.5,
          1300: 6,
          1400: 6,
          1500: 5.3,
          1600: 5,
          1700: 4.7,
          1800: 4.4,
          1900: 4.2,
          2000: 4,
        },
      },
      crossFeed: {
        roughingFeed: 32,
        finishingFeed: 21,
      },
      cuttingDepth: {
        roughingDepth: 0.03,
        finishingDepth: 0.01,
      },
      trasitionTime: {
        300: {
          roughingTrasition: {
            250: 0.67,
            700: 0.76,
            900: 0.95,
            1300: 1.1,
            2000: 1.3,
          },
          finishingTrasition: {
            250: 0.76,
            700: 0.86,
            900: 1.1,
            1300: 1.3,
            2000: 1.5,
          },
        },
        400: {
          roughingTrasition: {
            250: 0.76,
            700: 0.95,
            900: 1.3,
            1300: 1.4,
            2000: 1.6,
          },
          finishingTrasition: {
            250: 0.86,
            700: 1,
            900: 1.4,
            1300: 1.6,
            2000: 1.7,
          },
        },
      },
      finishingAllowance: {
        300: {
          500: 0.05,
          1000: 0.55,
          1500: 0.06,
          2000: 0.65,
        },
        400: {
          500: 0.055,
          1000: 0.06,
          1500: 0.065,
          2000: 0.7,
        },
      },
    },
    3508: {
      characteristics: {
        part_maxL: 3000,
        part_maxB: 800,
        max_weight: 1500,
      },
    },
    "3B722": {
      characteristics: {
        part_maxL: 1000,
        part_maxB: 320,
        max_weight: 600,
      },
      tableSpeed: {
        roughing: {
          100: 82,
          150: 56,
          200: 43,
          250: 35,
          300: 29,
          350: 25,
          400: 22,
          450: 19.5,
          500: 17.5,
          550: 16,
          600: 14.5,
          650: 13.5,
          700: 12.5,
          750: 12,
          800: 11,
          850: 10.5,
          900: 10,
          950: 9.5,
          1000: 9,
        },
        finishing: {
          100: 68,
          150: 47,
          200: 36,
          250: 29,
          300: 24,
          350: 21,
          400: 18.5,
          450: 16.5,
          500: 14.5,
          550: 13.5,
          600: 12.5,
          650: 11.5,
          700: 10.5,
          750: 10,
          800: 9.5,
          850: 9,
          900: 8.5,
          950: 8,
          1000: 7.5,
        },
      },
      crossFeed: {
        roughingFeed: 21,
        finishingFeed: 12.6,
      },
      cuttingDepth: {
        roughingDepth: 0.015,
        finishingDepth: 0.01,
      },
      trasitionTime: {
        100: {
          roughingTrasition: {
            250: 0.57,
            600: 0.67,
            850: 0.76,
            1000: 0.85,
          },
          finishingTrasition: {
            250: 0.67,
            600: 0.76,
            850: 0.95,
            1000: 1.1,
          },
        },
        300: {
          roughingTrasition: {
            250: 0.67,
            600: 0.85,
            850: 1,
            1000: 1.2,
          },
          finishingTrasition: {
            250: 0.76,
            600: 1,
            850: 1.4,
            1000: 1.6,
          },
        },
      },
      finishingAllowance: {
        300: { 600: 0.05, 1000: 0.55 },
      },
    },
  },
  installRemovalTime: {
    magnitTable: {
      0: {
        0.01: 0.2,
        0.05: 0.18,
        0.08: 0.16,
        0.3: 0.3,
        1: 0.35,
        3: 0.4,
        5: 0.45,
        10: 0.5,
        20: 0.55,
        30: 3,
        50: 3.5,
        100: 4,
        200: 5,
        400: 6,
        800: 7,
        1500: 8,
        3000: 9,
        5000: 10,
      },
      0.5: {
        0.01: 0.7,
        0.05: 0.65,
        0.08: 0.6,
        0.3: 0.7,
        1: 0.9,
        3: 1.2,
        5: 1.3,
        10: 1.6,
        20: 1.8,
        30: 4,
        50: 5,
        100: 6,
        200: 7,
        400: 8,
        800: 9,
        1500: 10,
        3000: 11,
        5000: 13,
      },
    },
    boltPlankiV1pl: {
      0.5: {
        0.3: 1.3,
        1: 1.5,
        3: 2.1,
        5: 2.3,
        10: 2.8,
        20: 3.3,
        30: 8,
        50: 9,
        100: 10,
        200: 12,
        400: 14,
        800: 17,
        1500: 19,
        3000: 22,
        5000: 27,
      },
      0.1: {
        0.3: 1.4,
        1: 1.7,
        3: 2.2,
        5: 2.6,
        10: 3.1,
        20: 3.7,
        30: 9,
        50: 10,
        100: 11,
        200: 13,
        400: 16,
        800: 18,
        1500: 21,
        3000: 24,
        5000: 29,
      },
      0.05: {
        0.3: 1.7,
        1: 2,
        3: 2.6,
        5: 3,
        10: 3.6,
        20: 4.2,
        30: 10,
        50: 11,
        100: 13,
        200: 16,
        400: 18,
        800: 21,
        1500: 24,
        3000: 28,
        5000: 33,
      },
      0.01: {
        0.3: 2,
        1: 2.4,
        3: 3.1,
        5: 3.7,
        10: 4.3,
        20: 5.1,
        30: 12,
        50: 13,
        100: 16,
        200: 19,
        400: 21,
        800: 26,
        1500: 29,
        3000: 33,
        5000: 40,
      },
    },
    boltPlankiV2pl: {
      0.5: {
        0.3: 1.6,
        1: 2.2,
        3: 2.9,
        5: 3.4,
        10: 4.1,
        20: 4.9,
        30: 12,
        50: 14,
        100: 16,
        200: 18,
        400: 20,
        800: 23,
        1500: 28,
        3000: 30,
        5000: 34,
      },
      0.1: {
        0.3: 1.8,
        1: 2.4,
        3: 3.2,
        5: 3.8,
        10: 4.6,
        20: 5.4,
        30: 13,
        50: 16,
        100: 17,
        200: 20,
        400: 22,
        800: 28,
        1500: 30,
        3000: 33,
        5000: 38,
      },
      0.05: {
        0.3: 2,
        1: 2.8,
        3: 3.7,
        5: 4.3,
        10: 5.2,
        20: 6.2,
        30: 16,
        50: 17,
        100: 20,
        200: 23,
        400: 26,
        800: 29,
        1500: 34,
        3000: 39,
        5000: 43,
      },
      0.01: {
        0.3: 2.4,
        1: 3.3,
        3: 4.3,
        5: 5.2,
        10: 6,
        20: 7.3,
        30: 19,
        50: 21,
        100: 24,
        200: 28,
        400: 30,
        800: 34,
        1500: 41,
        3000: 47,
        5000: 52,
      },
    },
  },
  correctionFactors: {
    hardnessFactor: {
      h1: 0.9,
      h2: 1,
      h3: 1.1,
    },
    stiffnessFactor: {
      s1: 1,
      s2: 1.1,
      s3: 1.2,
    },
    compositeFactor: {
      "6_7": {
        "Ra1.6": {
          matP: 1,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
        "Ra0.8": {
          matP: 1.15,
          matM: 2,
          matN: 2.5,
          matK: 0.9,
        },
        "Ra0.4": {
          matP: 1.3,
          matM: 2.4,
          matN: 3,
          matK: 1,
        },
      },
      "8_9": {
        "Ra1.6": {
          matP: 0.95,
          matM: 1.7,
          matN: 1.8,
          matK: 0.8,
        },
        "Ra0.8": {
          matP: 1,
          matM: 1.9,
          matN: 2.2,
          matK: 0.85,
        },
        "Ra0.4": {
          matP: 1.15,
          matM: 2.3,
          matN: 2.7,
          matK: 0.9,
        },
      },
      "10_14": {
        "Ra3.2": {
          matP: 0.8,
          matM: 1.4,
          matN: 1.6,
          matK: 0.75,
        },
        "Ra1.6": {
          matP: 0.85,
          matM: 1.6,
          matN: 1.8,
          matK: 0.8,
        },
        "Ra0.8": {
          matP: 0.95,
          matM: 1.8,
          matN: 2,
          matK: 0.85,
        },
      },
    },
  },
};

let defaultstate = {
  partweight: "",
  partmaterial: "matP",
  parthardness: "h1",
  partstiffness: "s1",
  numberparts: "1",
  installoption: "magnitTable",
  numberreinstall: "0",
  numsurfaces: "n1",
  errormessage: [],
  timeinstall: "",
  maintime1: "",
  maintime2: "",
  maintime3: "",
  maintime4: "",

  getErrorMessage() {
    const mes1 = "Не выбран станок";
    if (!this.model) {
      let mes = "Не выбран станок";
      if (!this.errormessage.includes(mes1)) this.errormessage.push(mes1);
    } else {
      let ind = this.errormessage.indexOf(mes1);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes2 = "Не выбрана точность установки";
    if (!this.positionaccuracy) {
      if (!this.errormessage.includes(mes2)) this.errormessage.push(mes2);
    } else {
      let ind = this.errormessage.indexOf(mes2);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes3 = "Не указан вес детали";
    if (!this.partweight) {
      if (!this.errormessage.includes(mes3)) this.errormessage.push(mes3);
    } else {
      let ind = this.errormessage.indexOf(mes3);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes4 = "Вес детали больше допустимого для выбранного станка";
    if (this.partweight > this.maxWeight) {
      if (!this.errormessage.includes(mes4)) this.errormessage.push(mes4);
    } else {
      let ind = this.errormessage.indexOf(mes4);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes5 = "Не указана длина обрабатываемой поверхности";
    if (
      (this.numsurfaces == "n1" && !this.length1) ||
      (this.numsurfaces == "n2" && (!this.length1 || !this.length2)) ||
      (this.numsurfaces == "n3" && (!this.length1 || !this.length2 || !this.length3)) ||
      (this.numsurfaces == "n4" &&
        (!this.length1 || !this.length2 || !this.length3 || !this.length4))
    ) {
      if (!this.errormessage.includes(mes5)) this.errormessage.push(mes5);
    } else {
      let ind = this.errormessage.indexOf(mes5);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes6 = "Не указана ширина обрабатываемой поверхности";
    if (
      (this.numsurfaces == "n1" && !this.width1) ||
      (this.numsurfaces == "n2" && (!this.width1 || !this.width2)) ||
      (this.numsurfaces == "n3" && (!this.width1 || !this.width2 || !this.width3)) ||
      (this.numsurfaces == "n4" && (!this.width1 || !this.width2 || !this.width3 || !this.width4))
    ) {
      if (!this.errormessage.includes(mes6)) this.errormessage.push(mes6);
    } else {
      let ind = this.errormessage.indexOf(mes6);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes7 = "Не указан припуск обрабатываемой поверхности";
    if (
      (this.numsurfaces == "n1" && !this.allowance1) ||
      (this.numsurfaces == "n2" && (!this.allowance1 || !this.allowance2)) ||
      (this.numsurfaces == "n3" && (!this.allowance1 || !this.allowance2 || !this.allowance3)) ||
      (this.numsurfaces == "n4" &&
        (!this.allowance1 || !this.allowance2 || !this.allowance3 || !this.allowance4))
    ) {
      if (!this.errormessage.includes(mes7)) this.errormessage.push(mes7);
    } else {
      let ind = this.errormessage.indexOf(mes7);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes8 = "Не указана точность обрабатываемой поверхности";
    if (
      (this.numsurfaces == "n1" && !this.accuracy1) ||
      (this.numsurfaces == "n2" && (!this.accuracy1 || !this.accuracy2)) ||
      (this.numsurfaces == "n3" && (!this.accuracy1 || !this.accuracy2 || !this.accuracy3)) ||
      (this.numsurfaces == "n4" &&
        (!this.accuracy1 || !this.accuracy2 || !this.accuracy3 || !this.accuracy4))
    ) {
      if (!this.errormessage.includes(mes8)) this.errormessage.push(mes8);
    } else {
      let ind = this.errormessage.indexOf(mes8);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes9 = "Не указана шероховатось обрабатываемой поверхности";
    if (
      (this.numsurfaces == "n1" && !this.roughness1) ||
      (this.numsurfaces == "n2" && (!this.roughness1 || !this.roughness2)) ||
      (this.numsurfaces == "n3" && (!this.roughness1 || !this.roughness2 || !this.roughness3)) ||
      (this.numsurfaces == "n4" &&
        (!this.roughness1 || !this.roughness2 || !this.roughness3 || !this.roughness4))
    ) {
      if (!this.errormessage.includes(mes9)) this.errormessage.push(mes9);
    } else {
      let ind = this.errormessage.indexOf(mes9);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes10 = "Длина поверхности больше допустимой для выбранного станка";
    if (
      (this.numsurfaces == "n1" && this.length1 > this.maxLength) ||
      (this.numsurfaces == "n2" &&
        (this.length1 > this.maxLength || this.length2 > this.maxLength)) ||
      (this.numsurfaces == "n3" &&
        (this.length1 > this.maxLength ||
          this.length2 > this.maxLength ||
          this.length3 > this.maxLength)) ||
      (this.numsurfaces == "n4" &&
        (this.length1 > this.maxLength ||
          this.length2 > this.maxLength ||
          this.length3 > this.maxLength ||
          this.length4 > this.maxLength))
    ) {
      if (!this.errormessage.includes(mes10)) this.errormessage.push(mes10);
    } else {
      let ind = this.errormessage.indexOf(mes10);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
    const mes11 = "Ширина поверхности больше допустимой для выбранного станка";
    if (
      (this.numsurfaces == "n1" && this.width1 > this.maxWidth) ||
      (this.numsurfaces == "n2" && (this.width1 > this.maxWidth || this.width2 > this.maxWidth)) ||
      (this.numsurfaces == "n3" &&
        (this.width1 > this.maxWidth ||
          this.width2 > this.maxWidth ||
          this.width3 > this.maxWidth)) ||
      (this.numsurfaces == "n4" &&
        (this.width1 > this.maxWidth ||
          this.width2 > this.maxWidth ||
          this.width3 > this.maxWidth ||
          this.width4 > this.maxWidth))
    ) {
      if (!this.errormessage.includes(mes11)) this.errormessage.push(mes11);
    } else {
      let ind = this.errormessage.indexOf(mes11);
      if (ind != -1) this.errormessage.splice(ind, 1);
    }
  },

  getButtonState() {
    if (this.errormessage.length > 0) return "modal";
    else return "";
  },

  getTimeInstall() {
    const range = [
      0.01, 0.05, 0.08, 0.3, 1, 3, 5, 10, 20, 30, 50, 100, 200, 400, 800, 1500, 3000, 5000,
    ];
    let specifiedWeight = range.find((item) => item >= this.partweight);
    let installTime = 0;
    if (this.partweight == 0 || this.numberparts == 0) return (installTime = "0.0");
    else {
      for (let key in dataForCalculation.installRemovalTime) {
        if (this.installoption == key) {
          for (let acc in dataForCalculation.installRemovalTime[key]) {
            if (this.positionaccuracy == acc) {
              for (let m in dataForCalculation.installRemovalTime[key][acc]) {
                if (specifiedWeight == m) {
                  installTime =
                    dataForCalculation.installRemovalTime[key][acc][m] *
                    this.numberparts *
                    (+this.numberreinstall + 1);
                  return installTime.toFixed(1);
                }
              }
            }
          }
        }
      }
    }
  },

  getMainTime(allowance, width, length, accuracy, roughness) {
    let MainTime = 0;
    let doubleStrokeRoughing = 0;
    let doubleStrokeFinishing = 0;
    let tableSpeedRoughing = 0;
    let tableSpeedFinishing = 0;
    let crossFeedRoughing = 0;
    let crossFeedFinishing = 0;
    let cuttingDepthRoughing = 0;
    let cuttingDepthFinishing = 0;
    let roughingTrasitionTime = 0;
    let finishingTrasitionTime = 0;
    let finishingAllow = 0;
    let hardnessFactor = 0;
    let stiffnessFactor = 0;
    let compositeFactor = 0;
    let bTable = width <= 300 ? 300 : 400;
    let range = [
      100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950,
      1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
    ];
    let specifiedLength = range.find((item) => item >= length);
    if (allowance == 0 || width == 0 || length == 0 || this.numberparts == 0) MainTime = 0;
    else {
      crossFeedRoughing = dataForCalculation.machineModels[this.model].crossFeed.roughingFeed;
      cuttingDepthRoughing =
        dataForCalculation.machineModels[this.model].cuttingDepth.roughingDepth;
      crossFeedFinishing = dataForCalculation.machineModels[this.model].crossFeed.finishingFeed;
      cuttingDepthFinishing =
        dataForCalculation.machineModels[this.model].cuttingDepth.finishingDepth;
      for (let lengthPart in dataForCalculation.machineModels[this.model].tableSpeed.roughing) {
        if (specifiedLength == lengthPart) {
          doubleStrokeRoughing =
            dataForCalculation.machineModels[this.model].tableSpeed.roughing[lengthPart];
          tableSpeedRoughing = (doubleStrokeRoughing * lengthPart * 2) / 1000;
        }
      }
      for (let lengthPart in dataForCalculation.machineModels[this.model].tableSpeed.finishing) {
        if (specifiedLength == lengthPart) {
          doubleStrokeFinishing =
            dataForCalculation.machineModels[this.model].tableSpeed.finishing[lengthPart];
          tableSpeedFinishing = (doubleStrokeFinishing * lengthPart * 2) / 1000;
        }
      }
      // auxiliary time--------------------------------------

      for (let lengthPart in dataForCalculation.machineModels[this.model].trasitionTime[bTable]
        .roughingTrasition) {
        if (specifiedLength <= lengthPart) {
          roughingTrasitionTime =
            dataForCalculation.machineModels[this.model].trasitionTime[bTable].roughingTrasition[
              lengthPart
            ];
          break;
        }
      }
      for (let lengthPart in dataForCalculation.machineModels[this.model].trasitionTime[bTable]
        .finishingTrasition) {
        if (specifiedLength <= lengthPart) {
          finishingTrasitionTime =
            dataForCalculation.machineModels[this.model].trasitionTime[bTable].finishingTrasition[
              lengthPart
            ];
          break;
        }
      }

      // finishing allowance--------------------------

      for (let lengthPart in dataForCalculation.machineModels[this.model].finishingAllowance[
        bTable
      ]) {
        if (specifiedLength <= lengthPart) {
          finishingAllow =
            dataForCalculation.machineModels[this.model].finishingAllowance[bTable][lengthPart];
          break;
        }
      }

      // factors---------------------------------------------------

      hardnessFactor = dataForCalculation.correctionFactors.hardnessFactor[this.parthardness];

      stiffnessFactor = dataForCalculation.correctionFactors.stiffnessFactor[this.partstiffness];

      compositeFactor =
        dataForCalculation.correctionFactors.compositeFactor[accuracy][roughness][
          this.partmaterial
        ];

      // base time calculation--------------------------------------

      MainTime =
        ((width * length * (allowance - finishingAllow)) /
          (1000 * crossFeedRoughing * cuttingDepthRoughing * tableSpeedRoughing) +
          (width * length * finishingAllow) /
            (1000 * crossFeedFinishing * cuttingDepthFinishing * tableSpeedFinishing) +
          roughingTrasitionTime +
          finishingTrasitionTime) *
        hardnessFactor *
        stiffnessFactor *
        compositeFactor *
        this.numberparts;
    }
    return MainTime.toFixed(1);
  },

  validEneredData() {
    if (
      !this.model ||
      !this.positionaccuracy ||
      !this.partweight ||
      this.partweight > this.maxWeight ||
      (this.numsurfaces == "n1" && !this.length1) ||
      (this.numsurfaces == "n2" && (!this.length1 || !this.length2)) ||
      (this.numsurfaces == "n3" && (!this.length1 || !this.length2 || !this.length3)) ||
      (this.numsurfaces == "n4" &&
        (!this.length1 || !this.length2 || !this.length3 || !this.length4)) ||
      (this.numsurfaces == "n1" && this.length1 > this.maxLength) ||
      (this.numsurfaces == "n2" &&
        (this.length1 > this.maxLength || this.length2 > this.maxLength)) ||
      (this.numsurfaces == "n3" &&
        (this.length1 > this.maxLength ||
          this.length2 > this.maxLength ||
          this.length3 > this.maxLength)) ||
      (this.numsurfaces == "n4" &&
        (this.length1 > this.maxLength ||
          this.length2 > this.maxLength ||
          this.length3 > this.maxLength ||
          this.length4 > this.maxLength)) ||
      (this.numsurfaces == "n1" && !this.width1) ||
      (this.numsurfaces == "n2" && (!this.width1 || !this.width2)) ||
      (this.numsurfaces == "n3" && (!this.width1 || !this.width2 || !this.width3)) ||
      (this.numsurfaces == "n4" &&
        (!this.width1 || !this.width2 || !this.width3 || !this.width4)) ||
      (this.numsurfaces == "n1" && this.width1 > this.maxWidth) ||
      (this.numsurfaces == "n2" && (this.width1 > this.maxWidth || this.width2 > this.maxWidth)) ||
      (this.numsurfaces == "n3" &&
        (this.width1 > this.maxWidth ||
          this.width2 > this.maxWidth ||
          this.width3 > this.maxWidth)) ||
      (this.numsurfaces == "n4" &&
        (this.width1 > this.maxWidth ||
          this.width2 > this.maxWidth ||
          this.width3 > this.maxWidth ||
          this.width4 > this.maxWidth)) ||
      (this.numsurfaces == "n1" && !this.allowance1) ||
      (this.numsurfaces == "n2" && (!this.allowance1 || !this.allowance2)) ||
      (this.numsurfaces == "n3" && (!this.allowance1 || !this.allowance2 || !this.allowance3)) ||
      (this.numsurfaces == "n4" &&
        (!this.allowance1 || !this.allowance2 || !this.allowance3 || !this.allowance4)) ||
      (this.numsurfaces == "n1" && !this.accuracy1) ||
      (this.numsurfaces == "n2" && (!this.accuracy1 || !this.accuracy2)) ||
      (this.numsurfaces == "n3" && (!this.accuracy1 || !this.accuracy2 || !this.accuracy3)) ||
      (this.numsurfaces == "n4" &&
        (!this.accuracy1 || !this.accuracy2 || !this.accuracy3 || !this.accuracy4)) ||
      (this.numsurfaces == "n1" && !this.roughness1) ||
      (this.numsurfaces == "n2" && (!this.roughness1 || !this.roughness2)) ||
      (this.numsurfaces == "n3" && (!this.roughness1 || !this.roughness2 || !this.roughness3)) ||
      (this.numsurfaces == "n4" &&
        (!this.roughness1 || !this.roughness2 || !this.roughness3 || !this.roughness4))
    )
      this.buttonstate = "modal";
    else this.buttonstate = "";
  },
};

const store = createStore(reducer);

function reducer(state = defaultstate, action) {
  let validinputnumber = "";
  switch (action.type) {
    case "MODEL":
      if (!action.data) return { ...state, maxWidth: "", maxLength: "", maxWeight: "" };
      else
        return {
          ...state,
          model: action.data,
          maxWidth: dataForCalculation.machineModels[action.data].characteristics.part_maxB,
          maxLength: dataForCalculation.machineModels[action.data].characteristics.part_maxL,
          maxWeight: dataForCalculation.machineModels[action.data].characteristics.max_weight,
        };
    case "WEIGHT":
      let inpweight = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, partweight: inpweight };
    case "MATERIAL":
      return { ...state, partmaterial: action.data };
    case "HARDNESS":
      return { ...state, parthardness: action.data };
    case "STIFFNESS":
      return { ...state, partstiffness: action.data };
    case "NUMBERPARTS":
      let inpnumparts = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, numberparts: inpnumparts };
    case "INSTALLOPTION":
      return { ...state, installoption: action.data, positionaccuracy: "" };
    case "POSITIONACCURACY":
      return { ...state, positionaccuracy: action.data };
    case "NUMBERREINSTALL":
      return { ...state, numberreinstall: action.data };
    case "NUMSURFACES":
      return { ...state, numsurfaces: action.data };
    case "WIDTH1":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, width1: validinputnumber };
    case "WIDTH2":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, width2: validinputnumber };
    case "WIDTH3":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, width3: validinputnumber };
    case "WIDTH4":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, width4: validinputnumber };
    case "LENGTH1":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, length1: validinputnumber };
    case "LENGTH2":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, length2: validinputnumber };
    case "LENGTH3":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, length3: validinputnumber };
    case "LENGTH4":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, length4: validinputnumber };
    case "ALLOWANCE1":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, allowance1: validinputnumber };
    case "ALLOWANCE2":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, allowance2: validinputnumber };
    case "ALLOWANCE3":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, allowance3: validinputnumber };
    case "ALLOWANCE4":
      validinputnumber = action.data.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
      return { ...state, allowance4: validinputnumber };
    case "ACCURACY1":
      return { ...state, accuracy1: action.data, roughness1: "" };
    case "ACCURACY2":
      return { ...state, accuracy2: action.data, roughness2: "" };
    case "ACCURACY3":
      return { ...state, accuracy3: action.data, roughness3: "" };
    case "ACCURACY4":
      return { ...state, accuracy4: action.data, roughness4: "" };
    case "ROUGHNESS1":
      return { ...state, roughness1: action.data };
    case "ROUGHNESS2":
      return { ...state, roughness2: action.data };
    case "ROUGHNESS3":
      return { ...state, roughness3: action.data };
    case "ROUGHNESS4":
      return { ...state, roughness4: action.data };
    case "CALCULATIONTIME": {
      if (state.errormessage.length > 0) return state;
      else {
        if (state.numsurfaces == "n1")
          return {
            ...state,
            timeinstall: state.getTimeInstall(),
            maintime1: state.getMainTime(
              state.allowance1,
              state.width1,
              state.length1,
              state.accuracy1,
              state.roughness1
            ),
          };
        else if (state.numsurfaces == "n2")
          return {
            ...state,
            timeinstall: state.getTimeInstall(),
            maintime1: state.getMainTime(
              state.allowance1,
              state.width1,
              state.length1,
              state.accuracy1,
              state.roughness1
            ),
            maintime2: state.getMainTime(
              state.allowance2,
              state.width2,
              state.length2,
              state.accuracy2,
              state.roughness2
            ),
          };
        else if (state.numsurfaces == "n3")
          return {
            ...state,
            timeinstall: state.getTimeInstall(),
            maintime1: state.getMainTime(
              state.allowance1,
              state.width1,
              state.length1,
              state.accuracy1,
              state.roughness1
            ),
            maintime2: state.getMainTime(
              state.allowance2,
              state.width2,
              state.length2,
              state.accuracy2,
              state.roughness2
            ),
            maintime3: state.getMainTime(
              state.allowance3,
              state.width3,
              state.length3,
              state.accuracy3,
              state.roughness3
            ),
          };
        else if (state.numsurfaces == "n4")
          return {
            ...state,
            timeinstall: state.getTimeInstall(),
            maintime1: state.getMainTime(
              state.allowance1,
              state.width1,
              state.length1,
              state.accuracy1,
              state.roughness1
            ),
            maintime2: state.getMainTime(
              state.allowance2,
              state.width2,
              state.length2,
              state.accuracy2,
              state.roughness2
            ),
            maintime3: state.getMainTime(
              state.allowance3,
              state.width3,
              state.length3,
              state.accuracy3,
              state.roughness3
            ),
            maintime4: state.getMainTime(
              state.allowance4,
              state.width4,
              state.length4,
              state.accuracy4,
              state.roughness4
            ),
          };
      }
    }
    default:
      return state;
  }
}

export { store };
