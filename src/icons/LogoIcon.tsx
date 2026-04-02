import {FC, memo} from 'react';

// Studio Forma — room perspective vanishing-point mark
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 40 40'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    {/* Outer frame */}
    <rect x={'2'} y={'2'} width={'36'} height={'36'} rx={'3'} stroke={'currentColor'} strokeWidth={'1.8'} />
    {/* Perspective lines to vanishing point */}
    <line x1={'2'} y1={'2'} x2={'20'} y2={'20'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} opacity={'0.6'} />
    <line x1={'38'} y1={'2'} x2={'20'} y2={'20'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} opacity={'0.6'} />
    <line x1={'2'} y1={'38'} x2={'20'} y2={'20'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} opacity={'0.6'} />
    <line x1={'38'} y1={'38'} x2={'20'} y2={'20'} stroke={'currentColor'} strokeWidth={'1.1'} strokeLinecap={'round'} opacity={'0.6'} />
    {/* Horizon line */}
    <line x1={'10'} y1={'20'} x2={'30'} y2={'20'} stroke={'currentColor'} strokeWidth={'0.9'} opacity={'0.3'} />
    {/* Vanishing point */}
    <circle cx={'20'} cy={'20'} r={'2.2'} fill={'currentColor'} />
  </svg>
);

export default memo(LogoIcon);
