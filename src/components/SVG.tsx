function Svg() {
  return (
    <>
      <svg width="100%" height="100%" viewBox={"-100 -100 200 200"}>
        <defs>
          <g id="bulb">
            <path d="M 0,0 Q 20 25 0 40 Q -20 25 0 0" fill="#f0f0f0" />
            <rect x="-6" y="0" width="12" height="10" rx="3" fill="#343434" />
          </g>
        </defs>
        <path
          d="M -140 -60 Q -100 0 0 -40 Q 90 -100 150 -10"
          fill="none"
          stroke="#343434"
        />
        <use href="#bulb" x="-130" y="79" transform="rotate(55)" />
        <use href="#bulb" x="-110" y="11" transform="rotate(23)" />
        <use href="#bulb" x="-50" y="-34" transform="rotate(-8)" />
        <use href="#bulb" x="20" y="-37" transform="rotate(-28)" />
        <use href="#bulb" x="62" y="-52" transform="rotate(-12)" />
        <use href="#bulb" x="60" y="-111" transform="rotate(39)" />
        <use href="#bulb" x="80" y="-127" transform="rotate(53)" />
      </svg>
    </>
  );
}

export default Svg;
