function FormInput({handleChange, formInputData, handleSubmit}){
  return(
  
      <div className="form-row row">
        <div className="col">
          <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
        </div>
        <div className="col">
          <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="Address" className="form-control" placeholder="Address" />
        </div>
        <div className="col">
          <input type="text" onChange={handleChange} value={formInputData.salary} name="age" className="form-control" placeholder="Age" />
        </div>
        <div className="col">
          <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
        </div>
      </div>
   
    
  )
  }
  
  export default FormInput;