function Lights() {
  let myArr = Array(7)
    .fill(0)
    .map((i, index) => {
      let test = { animationDelay: `${index / 5}s` };
      let combinedStyles = { ...styles.wrapper, ...test };
      return <div key={index} style={combinedStyles} className="wrapper"></div>;
    });
  return <>{myArr}</>;
}

export default Lights;

const styles: any = {
  wrapper: {
    animation: "lights 3s linear 2s infinite",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    width: "100px",
    height: "100px",
  },
};
