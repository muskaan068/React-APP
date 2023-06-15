function Table({tableData}){
  return(
      <table className="table">
          <thead>
              <tr>
                  <th>S.N</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Age</th>
              </tr>
          </thead>
          <tbody>
          {
              tableData.map((data, index)=>{
                  return(
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{data.fullName}</td>
                          <td>{data.Address}</td>
                          <td>{data.age}</td>
                      </tr>
                  )
              })
          }
          </tbody>
      </table>
  )
}

export default Table;