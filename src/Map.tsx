import { FC } from 'react';
import { COLORS, Provinces } from './constants';

interface MapProps {
  bcFill?: string;
  ytFill?: string;
  ntFill?: string;
  abFill?: string;
  mbFill?: string;
  skFill?: string;
  nuFill?: string;
  qcFill?: string;
  onFill?: string;
  nlFill?: string;
  nbFill?: string;
  nsFill?: string;
  peFill?: string;
  onClick: (provinceName: string) => void;
  level: number;
}

const defaultColor = '#fff';

const Map: FC<MapProps> = ({
  bcFill = defaultColor,
  ytFill = defaultColor,
  ntFill = defaultColor,
  abFill = defaultColor,
  skFill = defaultColor,
  mbFill = defaultColor,
  nuFill = defaultColor,
  onFill = defaultColor,
  qcFill = defaultColor,
  nlFill = defaultColor,
  nbFill = defaultColor,
  nsFill = defaultColor,
  peFill = defaultColor,
  onClick,
  level,
}) => {
  return (
      <svg x="0" y="0" version="1.1" viewBox="0 0 953.5 810.2" className="svg" width="953.5" height="810.2">
        <path
          d="m2.7 395.7 14.9 269.2 113.6 3.3-14.9-218.3z"
          className="st1"
          fill={bcFill}
          onClick={() => onClick(Provinces.BC)}
        />
        <path
          d="m209.2 670.1 5.4-195.6-97.7-25.3 14.3 219z"
          className="st3"
          fill={abFill}
          onClick={() => onClick(Provinces.AB)}
        />
        <path
          d="m317.4 670.1 78.6 2 67-103-59.4-66.2h-78.9z"
          className="st1"
          fill={mbFill}
          onClick={() => onClick(Provinces.MB)}
        />
        <path
          d="M209.2 670.1h108.2l7.3-167.2-110.1-28.4z"
          className="st3"
          fill={skFill}
          onClick={() => onClick(Provinces.SK)}
        />
        <path
          d="m463 569.1 118.7 47.8 52 190.6-240.5-82.3 2.8-53.1z"
          className="st1"
          fill={onFill}
          onClick={() => onClick(Provinces.ON)}
        />
        <path
          d="m866.6 532l80.2 40.3v19.9l-77.1 26z"
          className="st1"
          fill={nlFill}
          onClick={() => onClick(Provinces.NL)}
        />
        <path
          d="m581.7 616.9-30.4-176.2 144 3.5 82.8 163-42.2 134.3-102.2 66z"
          className="st1"
          fill={qcFill}
          onClick={() => onClick(Provinces.QC)}
        />
        <path
          d="m825.7 679.4-52.9-55.3-19.4 61.7 38.8 29.7z"
          className="st3"
          fill={nbFill}
          onClick={() => onClick(Provinces.NB)}
        />

        <path
          d="M860.5 638v27.3l15.8-3.1v-12.3z"
          className="st1"
          fill={nsFill}
          onClick={() => onClick(Provinces.NS)}
        />
        <path
          d="m347.9 338.1-55.5-33L310 258l34-10.6 14 72.2zm-94.2-83.7L310 258l-56.3-3.6z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="m292.4 305.1-45.4-15 6.7-35.7L310 258z"
          className="st3"
          fill={ntFill}
          onClick={() => onClick(Provinces.NT)}
        />
        <path
          d="m241.3 204.2 37.2 20.3-40.7 37-21.4-23.8z"
          className="st1"
          fill={ntFill}
          onClick={() => onClick(Provinces.NT)}
        />
        <path
          d="m391.4 125 85.4-10.6-4.4 110-58.5 3.9z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          fill="#231f20"
          d="m475.7 115.5-4.2 107.9-56.8 3.7-22-101.4 83-10.2m2.1-2.2-87.6 10.8L413 229.3l60.3-4 4.5-112z"
        />
        <path
          d="m342.2 174.3-15.4 44L351 213z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="m268.6 174.3 65.6-30.2 8 30.2-15.4 44-25.6 7.1zm89.4-36.8 20.7 14v18L358 159.2z"
          className="st1"
          fill={ntFill}
          onClick={() => onClick(Provinces.NT)}
        />
        <path
          d="m347.4 165.9 6.7-2.2 3.9 18.1h-5.3zm13.7 43.6 20.7-16.3 2.2 26.9-8.8 2.2zm29.1 12.8 6.6-9.3 8.8 5.3-2.2 14.6zm-37.5 41.8 8.4-16.7 20.7-3.5 6.2 37.8-15.4 11.1zm40.5-16.7 7.5-6.6 20.7 3.3-20.2 35.7z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="m448.3 243.9 203 74.8 7 101.3-99.9-22.4 3.1-55.1-132.1-51.9z"
          className="st1"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="M465.5 325.3H491l11.5 37.5L484 383l-27.8-31.2zm8.8 72.7 49.3 25.5-4 10.6-20.7-7.9-11.9 20.7-20.2-6.2z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="M358 137.5l20.7 14v18L358 159.2z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="M2.7 395.7 73.3 235h50.4l-6.8 214.2z"
          className="st1"
          fill={ytFill}
          onClick={() => onClick(Provinces.YT)}
        />
        <path
          d="M694.9 444.8 853.7 523l-21.4 59-54.6 25.8z"
          className="st3"
          fill={nlFill}
          onClick={() => onClick(Provinces.NL)}
        />
        <path
          d="M216.4 298.6 388 358.4l5.2-62.4 73.6 99.7-63.2 107.2h-78.9z"
          className="st3"
          fill={nuFill}
          onClick={() => onClick(Provinces.NU)}
        />
        <path
          d="m123.7 235 92.7 63.6 108.3 204.3-207.8-53.7z"
          className="st1"
          fill={ntFill}
          onClick={() => onClick(Provinces.NT)}
        />
        <path
          d="M793.1 724.8l48.7-55 28.5 21.7-45.6 49z"
          className="st1"
          fill={nsFill}
          onClick={() => onClick(Provinces.NS)}
        />
        <path
          d="M823.2 656l2.5 9.3 19.7-4.6-2.4-9z"
          className="st1"
          fill={peFill}
          onClick={() => onClick(Provinces.PE)}
        />
        <text
          className="st4 st11"
          transform="translate(156.243 569.083)"
          onClick={() => onClick(Provinces.AB)}
        >
          AB
        </text>
        <text
          className="st4 st11"
          transform="translate(258.1 575.067)"
          onClick={() => onClick(Provinces.SK)}
        >
          SK
        </text>
        <text
          className="st4 st11"
          transform="translate(64.734 342.514)"
          onClick={() => onClick(Provinces.YT)}
        >
          YT
        </text>
        <text
          className="st4 st11"
          transform="translate(368.367 590.129)"
          onClick={() => onClick(Provinces.MB)}
        >
          MB
        </text>
        <text
          className="st4 st11"
          transform="translate(177.027 383.027)"
          onClick={() => onClick(Provinces.NT)}
        >
          NT
        </text>
        <text
          className="st4 st11"
          transform="translate(350.973 431.449)"
          onClick={() => onClick(Provinces.NU)}
        >
          NU
        </text>
        <text
          className="st4 st11"
          transform="translate(495.193 682.6)"
          onClick={() => onClick(Provinces.ON)}
        >
          ON
        </text>
        <text
          className="st4 st11"
          transform="translate(658.349 624.128)"
          onClick={() => onClick(Provinces.QC)}
        >
          QC
        </text>
        <text
          className="st4 st11"
          transform="translate(778.128 543.981)"
          onClick={() => onClick(Provinces.NL)}
        >
          NL
        </text>
        <text
          className="st4 st11"
          transform="translate(770.716 682.6)"
          onClick={() => onClick(Provinces.NB)}
        >
          NB
        </text>
        <text
          className="st4 st13"
          transform="translate(821.565 710.127)"
          onClick={() => onClick(Provinces.NS)}
        >
          NS
        </text>
        <text
          className="st4 st13"
          transform="translate(821.564 634.477)"
          onClick={() => onClick(Provinces.PE)}
        >
          PE
        </text>
        <text
          className="st4 st11"
          transform="translate(53.843 548.175)"
          onClick={() => onClick(Provinces.BC)}
        >
          BC
        </text>
        <path
          d="m832.4 647.2-.7-11.2"
          fill="none"
          stroke="#231f20"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <g>
          <path
            fill={COLORS.PASSED}
            d="M692.6 277.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            fill={COLORS.LIVED}
            d="M692.6 149.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            fill={COLORS.ALIGHTED}
            d="M692.6 245.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            fill={COLORS.STAYED}
            d="M692.6 181.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            fill={COLORS.WANTTOBE}
            d="M692.6 309.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            fill={COLORS.VISITED}
            d="M692.6 213.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
          />
          <path
            d="M692.6 341.5h216.1c1.7 0 3 1.3 3 3v26c0 1.7-1.3 3-3 3H692.6c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3z"
            className="st6"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M692.6 149.5h216.1c1.7 0 3 1.5 3 3.5v217c0 2-1.3 3.5-3 3.5H692.6c-1.7 0-3-1.5-3-3.5V153c0-2 1.3-3.5 3-3.5z"
          />
          <text className="st4 st10" transform="translate(697.1351 171.9761)">
            Lived here{' '}
          </text>
          <text className="st4 st10" transform="translate(697.6849 204.0942)">
            Stayed here{' '}
          </text>
          <text className="st4 st10" transform="translate(698.1416 236.0932)">
            Visited here{' '}
          </text>
          <text className="st4 st10" transform="translate(697.1416 268.0934)">
            Alighted here{' '}
          </text>
          <text className="st4 st10" transform="translate(698.1416 300.0934)">
            Passed here{' '}
          </text>
          <text className="st4 st10" transform="translate(698.1416 332.0934)">
            Want to be here
          </text>
          <text className="st4 st10" transform="translate(868.6178 172.5134)">
            5 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(868.6451 203.5134)">
            4 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(869.6451 235.5134)">
            3 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(869.6451 267.5134)">
            2 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(869.6451 299.5134)">
            1 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(869.6451 331.5134)">
            0 pt{' '}
          </text>
          <text className="st4 st10" transform="translate(698.5416 361.9708)">
            Never been here{' '}
          </text>
          <text className="st4 st10" transform="translate(870.0453 361.3907)">
            0 pt{' '}
          </text>
        </g>
        <text className="st4" fontSize="72" transform="translate(189.9763 82.1309)">
          Canada Level {level}
        </text>
      </svg>
  );
};

export default Map;
