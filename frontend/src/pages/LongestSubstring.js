import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getLongestSubstring } from "../services/apiService";

const LongestSubstring = () => {
  const [input, setInput] = useState("");
  const [maxLength, setMaxLength] = useState(0);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError("");
  };
  const isValidInput = useMemo(
    () => /^[a-z.,!?;:()'"-]*$/.test(input) && input.trim() !== "",
    [input]
  );

  const handleSubmit = async () => {
    setLoading(true); // Show loader

    try {
      const response = await getLongestSubstring({ inputString: input });

      if (response) {
        setMaxLength(response.maxLength);
        setList(response.substringsArray);
      } else {
        setError("No data found.");
      }
    } catch (error) {
      setError("Error fetching data from the API.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="spinner-border mt-3" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your input"
        />
      </div>
      {!isValidInput && (
        <div className="alert alert-danger mt-3">
          The input string must have alphanumeric and basic punctuation without
          spaces
        </div>
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={handleSubmit}
        disabled={!isValidInput}
      >
        Submit
      </button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {list.length > 0 && (
        <>
          <h3 className="mt-3">
            The length of the longest substring without repeating characters:{" "}
            {maxLength}
          </h3>
          <h3>
            Below are some of the substrings without repeating characters{" "}
          </h3>
          <div
            style={{
              maxHeight: "200px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <ul className="list-group">
              {list.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LongestSubstring;
