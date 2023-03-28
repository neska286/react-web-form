import React from 'react'

const DataTable = ({searchData}) => {
  return (
    <>
         <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Nationality</th>
            <th scope="col">Place of birth </th>
            <th scope="col">score</th>
          </tr>
        </thead>
        <tbody>
        
        {searchData}
        
        </tbody>
</table>
    </>
  )
}

export default DataTable