const data = {
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

export function getCharacteristics(mod) {
  let profile = {};
  profile.maxB = data.machineModels[mod].characteristics.part_maxB;
  profile.maxL = data.machineModels[mod].characteristics.part_maxL;
  profile.maxWeight = data.machineModels[mod].characteristics.max_weight;
  return profile;
  debugger;
}

export function getProfiles(mod) {
  for (let key in data.machineModels) {
    if (mod == key) {
      return data.machineModels[key].characteristics;
      debugger;
    }
  }
}

export function getTimeInstall(installOption, accuracy, weight, numParts, reinst) {
  let range = [
    0.01, 0.05, 0.08, 0.3, 1, 3, 5, 10, 20, 30, 50, 100, 200, 400, 800, 1500, 3000, 5000,
  ];
  let specifiedWeight = range.find((item) => item >= weight);
  let installTime = 0;

  if (!weight || !numParts) return (installTime = "0.0");
  else {
    for (let key in data.installRemovalTime) {
      if (installOption == key) {
        for (let acc in data.installRemovalTime[key]) {
          if (accuracy == acc) {
            for (let m in data.installRemovalTime[key][acc]) {
              if (specifiedWeight == m) {
                installTime = data.installRemovalTime[key][acc][m] * numParts * (+reinst + 1);
                return installTime.toFixed(1);
              }
            }
          }
        }
      }
    }
  }
}

export function getMainTime(
  mod,
  b,
  l,
  prip,
  numParts,
  hardness,
  stiffness,
  accuracy,
  roughness,
  material
) {
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
  let bTable = 0;
  let range = [
    100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000,
    1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
  ];
  let specifiedLength = range.find((item) => item >= l);

  if (!prip || !b || !l || !numParts) MainTime = 0;
  else {
    for (let key in data.machineModels) {
      if (mod == key) {
        crossFeedRoughing = data.machineModels[key].crossFeed.roughingFeed;
        cuttingDepthRoughing = data.machineModels[key].cuttingDepth.roughingDepth;
        crossFeedFinishing = data.machineModels[key].crossFeed.finishingFeed;
        cuttingDepthFinishing = data.machineModels[key].cuttingDepth.finishingDepth;
        for (let lengthPart in data.machineModels[key].tableSpeed.roughing) {
          if (specifiedLength == lengthPart) {
            doubleStrokeRoughing = data.machineModels[key].tableSpeed.roughing[lengthPart];
            tableSpeedRoughing = (doubleStrokeRoughing * lengthPart * 2) / 1000;
          }
        }
        for (let lengthPart in data.machineModels[key].tableSpeed.finishing) {
          if (specifiedLength == lengthPart) {
            doubleStrokeFinishing = data.machineModels[key].tableSpeed.finishing[lengthPart];
            tableSpeedFinishing = (doubleStrokeFinishing * lengthPart * 2) / 1000;
          }
        }

        if (b <= 300) bTable = 300;
        else bTable = 400;

        // auxiliary time--------------------------------------

        for (let lengthPart in data.machineModels[key].trasitionTime[bTable].roughingTrasition) {
          if (specifiedLength <= lengthPart) {
            roughingTrasitionTime =
              data.machineModels[key].trasitionTime[bTable].roughingTrasition[lengthPart];
            break;
          }
        }
        for (let lengthPart in data.machineModels[key].trasitionTime[bTable].finishingTrasition) {
          if (specifiedLength <= lengthPart) {
            finishingTrasitionTime =
              data.machineModels[key].trasitionTime[bTable].finishingTrasition[lengthPart];
            break;
          }
        }

        // finishing allowance--------------------------

        for (let lengthPart in data.machineModels[key].finishingAllowance[bTable]) {
          if (specifiedLength <= lengthPart) {
            finishingAllow = data.machineModels[key].finishingAllowance[bTable][lengthPart];
            break;
          }
        }
      }
    }

    // factors---------------------------------------------------

    hardnessFactor = data.correctionFactors.hardnessFactor[hardness];

    stiffnessFactor = data.correctionFactors.stiffnessFactor[stiffness];

    compositeFactor = data.correctionFactors.compositeFactor[accuracy][roughness][material];

    // base time calculation--------------------------------------

    MainTime =
      ((b * l * (prip - finishingAllow)) /
        (1000 * crossFeedRoughing * cuttingDepthRoughing * tableSpeedRoughing) +
        (b * l * finishingAllow) /
          (1000 * crossFeedFinishing * cuttingDepthFinishing * tableSpeedFinishing) +
        roughingTrasitionTime +
        finishingTrasitionTime) *
      hardnessFactor *
      stiffnessFactor *
      compositeFactor *
      numParts;
  }

  return MainTime.toFixed(1);
}
