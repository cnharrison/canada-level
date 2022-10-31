import { COLORS } from './constants';

export const getProvinceName = (provinceAbbreviation: string = '') => {
  const mapAbbreviationToName: { [key: string]: string } = {
    bc: 'British Columbia',
    yt: 'Yukon',
    nt: 'Northwest Territories',
    ab: 'Alberta',
    mb: 'Manitoba',
    sk: 'Saskatchewan',
    nu: 'Nunavut',
    on: 'Ontario',
    qc: 'Quebec',
    nl: 'Newfoundland and Labrador',
    nb: 'New Brunswick',
    ns: 'Nova Scotia',
    pe: 'Prince Edward Island',
  };
  return mapAbbreviationToName[provinceAbbreviation];
};

export const getColorFromValue = (value: number) => {
  const mapColorsToValues: { [key: number]: string } = {
    '-1': COLORS.WANTTOBE,
    5: COLORS.LIVED,
    4: COLORS.STAYED,
    3: COLORS.VISITED,
    2: COLORS.ALIGHTED,
    1: COLORS.PASSED,
    0: COLORS.NEVERBEEN,
  };
  return mapColorsToValues[value];
};

export const getRandomIndex = (range: number) => Math.floor(Math.random() * range);
