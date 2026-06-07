const FilterBar = ({ setType }) => {

  return (

    <div style={{ marginBottom: "20px" }}>

      <button onClick={() => setType("")}>
        All
      </button>

      <button onClick={() => setType("Placement")}>
        Placement
      </button>

      <button onClick={() => setType("Result")}>
        Result
      </button>

      <button onClick={() => setType("Event")}>
        Event
      </button>

    </div>
  );
};

export default FilterBar;