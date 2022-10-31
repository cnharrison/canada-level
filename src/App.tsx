// @ts-ignore
import { useCallback, useEffect, useMemo, useState } from 'react';
import Footer from './Footer';
import Map from './Map';
import Modal from './Modal';
import { getColorFromValue, getRandomIndex } from './util';
import { svgExport } from 'svg-in-png';
import { Analytics } from '@vercel/analytics/react';

const backgroundColors = [
  '#F9CDC7',
  '#C5F9CB',
  '#CDE8F4',
  '#FDE8C4',
  '#D0DCD7',
  '#E1CEF5',
  '#D6D6D6',
];

const defaultMapStateValue = {
  bc: 0,
  yt: 0,
  nt: 0,
  ab: 0,
  mb: 0,
  sk: 0,
  nu: 0,
  on: 0,
  qc: 0,
  nl: 0,
  nb: 0,
  ns: 0,
  pe: 0,
};

const localStorageKey = 'canada-level';
const showFooterDelay = 1500;

const App = () => {
  const [provinceAbbreviation, setProvinceAbbreviation] = useState<string>();
  const [mousePosition, setMousePosition] = useState<{ x?: number; y?: number }>({
    x: undefined,
    y: undefined,
  });
  const [frozenMousePosition, setFrozenMousePosition] = useState<{ x?: number; y?: number }>({
    x: undefined,
    y: undefined,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldShowFooter, setShouldShowFooter] = useState(false);
  const [mapState, setMapState] = useState(defaultMapStateValue);

  const { x, y } = frozenMousePosition;

  const level = useMemo(
    () =>
      Object.values(mapState)
        .filter((x) => x > -1)
        .reduce((acc, curr) => acc + curr, 0),
    [mapState]
  );

  useEffect(() => {
    if (localStorage.getItem(localStorageKey) !== null && mapState === defaultMapStateValue) {
      const fetchMapStateString = localStorage.getItem(localStorageKey) || '';
      const fetchedMapState = JSON.parse(fetchMapStateString);
      setMapState(fetchedMapState);
    }
    if (mapState !== defaultMapStateValue) {
      localStorage.setItem(localStorageKey, JSON.stringify(mapState));
    }
  }, [mapState]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldShowFooter(true);
    }, showFooterDelay);
    return () => clearTimeout(timer);
  }, []);

  const onMapClick = useCallback(
    (provinceAbbreviation: string) => {
      setFrozenMousePosition({ x: mousePosition.x, y: mousePosition.y });
      setProvinceAbbreviation(provinceAbbreviation);
      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen, mousePosition.x, mousePosition.y]
  );

  const onModalClick = useCallback(
    (value: number) => {
      if (provinceAbbreviation) {
        setMapState((prevState) => ({ ...prevState, [provinceAbbreviation]: value }));
        setIsModalOpen(false);
        localStorage.setItem(localStorageKey, JSON.stringify(mapState));
      }
    },
    [mapState, provinceAbbreviation]
  );

  const onResetClick = useCallback(() => {
    setMapState(defaultMapStateValue);
    localStorage.removeItem(localStorageKey);
  }, []);

  const backgroundColor = useMemo(() => backgroundColors[getRandomIndex(6)], []);

  const onSaveClick = useCallback(() => {
    svgExport({
      id: 'root',
      titleToExport: 'canada-level.png',

      options: {
        background: backgroundColor,
        size: { width: 1516, height: 1288 },
        fontFamily: {
          url: 'https://fonts.googleapis.com/css2?family=Varela&display=swap',
          fontFamily: 'Varela',
        },
      },
    });
  }, [backgroundColor]);

  const bcFill = useMemo(() => getColorFromValue(mapState.bc), [mapState.bc]);
  const ytFill = useMemo(() => getColorFromValue(mapState.yt), [mapState.yt]);
  const ntFill = useMemo(() => getColorFromValue(mapState.nt), [mapState.nt]);
  const abFill = useMemo(() => getColorFromValue(mapState.ab), [mapState.ab]);
  const mbFill = useMemo(() => getColorFromValue(mapState.mb), [mapState.mb]);
  const skFill = useMemo(() => getColorFromValue(mapState.sk), [mapState.sk]);
  const nuFill = useMemo(() => getColorFromValue(mapState.nu), [mapState.nu]);
  const onFill = useMemo(() => getColorFromValue(mapState.on), [mapState.on]);
  const nlFill = useMemo(() => getColorFromValue(mapState.nl), [mapState.nl]);
  const nbFill = useMemo(() => getColorFromValue(mapState.nb), [mapState.nb]);
  const nsFill = useMemo(() => getColorFromValue(mapState.ns), [mapState.ns]);
  const peFill = useMemo(() => getColorFromValue(mapState.pe), [mapState.pe]);
  const qcFill = useMemo(() => getColorFromValue(mapState.qc), [mapState.qc]);

  return (
    <div
      style={{
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        height: '100vh',
        display: 'flex',
      }}
    >
      <Modal
        onClick={onModalClick}
        isOpen={isModalOpen}
        x={x}
        y={y}
        provinceAbbreviation={provinceAbbreviation}
      />
      <Map
        onClick={(provinceAbbreviation) => onMapClick(provinceAbbreviation)}
        level={level}
        bcFill={bcFill}
        ytFill={ytFill}
        ntFill={ntFill}
        abFill={abFill}
        mbFill={mbFill}
        skFill={skFill}
        nuFill={nuFill}
        onFill={onFill}
        qcFill={qcFill}
        nlFill={nlFill}
        nbFill={nbFill}
        nsFill={nsFill}
        peFill={peFill}
      />

      <Footer onResetClick={onResetClick} onSaveClick={onSaveClick} shouldShow={shouldShowFooter} />
      <Analytics />
    </div>
  );
};

export default App;
