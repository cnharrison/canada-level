import { FC } from 'react';

interface FooterProps {
  onResetClick: () => void;
  onSaveClick: () => void;
  shouldShow: boolean;
}

const Footer: FC<FooterProps> = ({ onResetClick, onSaveClick, shouldShow }) => (
  <div
    style={{
      display: 'flex',
      opacity: shouldShow ? 100 : 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      transition: 'opacity 1s ease',
      position: 'absolute',
      bottom: 30,
    }}
  >
    <div
      style={{
        fontSize: 16,
        lineHeight: '24px',
        color: '#111',
        cursor: 'pointer',
        padding: '6px 8px',
        background: '#FFF',
        borderRadius: 3,
        boxShadow: '0 0 0 2px #111',
        marginLeft: '6px',
        backgroundColor: '#ffb',
        fontFamily: 'Varela',
        marginRight: 6,
      }}
      onClick={onResetClick}
    >
      Reset
    </div>
    <div
      style={{
        fontSize: 16,
        lineHeight: '24px',
        color: '#111',
        cursor: 'pointer',
        padding: '6px 8px',
        background: '#FFF',
        borderRadius: 3,
        boxShadow: '0 0 0 2px #111',
        marginLeft: '6px',
        backgroundColor: '#ffb',
        fontFamily: 'Varela',
        marginRight: 6,
      }}
      onClick={onSaveClick}
    >
      Save
    </div>
  </div>
);

export default Footer;
