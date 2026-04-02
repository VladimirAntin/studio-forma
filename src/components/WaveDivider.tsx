const WaveDivider = ({fill, inverted = false}: {fill: string; inverted?: boolean}) => (
  <div className={'absolute bottom-0 left-0 w-full overflow-hidden leading-none'} aria-hidden={'true'}>
    <svg
      viewBox={'0 0 1440 80'}
      preserveAspectRatio={'none'}
      className={'block h-20 w-full sm:h-28 lg:h-36'}
      fill={fill}
      style={inverted ? {transform: 'scaleX(-1)'} : undefined}>
      <path d={'M0,80 L1440,18 L1440,80 L0,80 Z'} />
    </svg>
  </div>
);

export default WaveDivider;
