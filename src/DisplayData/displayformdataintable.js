import React, { useState } from "react";

//import FormInput from "./forminput";
import Table from "./table";
import FormInput2 from "./form2";

function Main() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    Address: "",
    age: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { fullName: "", Address: "", age: "" };
      setformInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            {/* <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            /> */}
            <FormInput2 handleSubmit={handleSubmit} />
            <Table tableData={tableData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Main;
