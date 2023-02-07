function Svg() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        style={{ border: "1px solid blue" }}
        viewBox={"-100 -100 200 200"}
      >
        <defs>
          <g id="bulb">
            <path d="M 0,0 Q 20 25 0 40 Q -20 25 0 0" />
            <rect x="-6" y="0" width="12" height="10" rx="3" fill="#343434" />
          </g>
        </defs>
        <path
          d="M -140 -60 Q -100 0 0 -40 Q 90 -100 150 -10"
          fill="none"
          stroke="#343434"
        />
        <use href="#bulb" x="20" y="-37" fill="blue" transform="rotate(-28)" />
      </svg>
    </>
  );
}

export default Svg;
