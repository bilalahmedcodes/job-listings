import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ loading }) {
  const overide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={overide}
      size={150}
    />
  );
}

export default Spinner;
