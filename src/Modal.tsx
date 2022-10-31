import { useMemo } from 'react';
import { COLORS, VALUES } from './constants';
import { getProvinceName } from './util';

const Modal = ({
  isOpen,
  x,
  y,
  provinceAbbreviation,
  onClick,
}: {
  isOpen: boolean;
  x?: number;
  y?: number;
  provinceAbbreviation?: string;
  onClick: (value: number) => void;
}) => {
  const provinceName = useMemo(() => getProvinceName(provinceAbbreviation), [provinceAbbreviation]);
  return isOpen ? (
    <div
      style={{
        display: 'block',
        position: 'absolute',
        left: x,
        top: y,
        zIndex: 100,
        boxShadow: '3px 6px 0 rgb(0 0 0 / 10%)',
        borderRadius: 4,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 0,
      }}
      className="modal"
    >
      <h2
        className="province-title"
        style={{
          fontFamily: 'Varela',
          margin: 0,
          lineHeight: '40px',
          cursor: 'default',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {provinceName}
      </h2>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',

          backgroundColor: COLORS.LIVED,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.LIVED)}
      >
        Lived here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',

          backgroundColor: COLORS.STAYED,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.STAYED)}
      >
        Stayed Here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',

          backgroundColor: COLORS.VISITED,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.VISITED)}
      >
        Visited Here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',
          backgroundColor: COLORS.ALIGHTED,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.ALIGHTED)}
      >
        Alighted Here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',
          backgroundColor: COLORS.PASSED,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.PASSED)}
      >
        Passed here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',
          backgroundColor: COLORS.WANTTOBE,
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.WANTTOBE)}
      >
        Want to be here
      </div>
      <div
        className="modal-option"
        style={{
          lineHeight: '24px',
          padding: '2px 0px',
          backgroundColor: '#fff',
          fontFamily: 'Varela',
          margin: 0,
        }}
        onClick={() => onClick(VALUES.NEVERBEEN)}
      >
        Never been here
      </div>
    </div>
  ) : null;
};

export default Modal;
