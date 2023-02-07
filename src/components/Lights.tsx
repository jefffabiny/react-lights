function Lights(props: any) {
  const { speed } = props;

  let myArr = Array(7)
    .fill(0)
    .map((i, index) => {
      let test = {
        animationDelay: `${(speed / 7) * index}s`,
        animationDuration: `${speed}s`,
      };
      let combinedStyles = { ...styles.container, ...test };
      return <div key={index} style={combinedStyles}></div>;
    });
  return <div style={styles.wrapper}>{myArr}</div>;
}

export default Lights;

const styles: any = {
  container: {
    animation: "lights 3s linear 2s infinite",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    width: "100px",
    height: "100px",
  },
  wrapper: {
    alignItems: "center",
    background: "blue",
    display: "flex",
    justifyContent: "center",
  },
};
