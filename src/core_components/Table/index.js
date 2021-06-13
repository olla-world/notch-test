import React from 'react';

import './style.css'

const tableHead = (cols) => 
  <tr className="table__header-row">{
    cols.map(col => 
      <th 
        key={col.id} 
        className="table__header-row__cell"
      >
        {col.name}
      </th>   
    )
  }</tr>

const tableBodyRow = (cells, rowValue) => 
  <tr className="table__body-row" key={rowValue.id}>{
    cells.map(cell=>
      <td 
          className='table__body-row__cell' 
          key={cell.cellID}
      >
        <div className="cell-wrap">{
          cell.keys.map(key=> 
            rowValue[key.keyName]?
              <div 
                  key={key.keyID}
                  className={`${key.viewType} ${key.viewType}--${key.classNameModString} ${key.viewType}--${key.classNameModFunc?key.classNameModFunc(rowValue[key.keyName]):'default'}`}>
                  {rowValue[key.keyName]}
              </div>
              :null
          )
        }</div>
      </td>
    )
  }</tr>

const Table = (props) => {
    const {
      classNameMod ='', 
      colsList, 
      cellStruct,
      data
    } = props

    return <table className={`table table--${classNameMod}`}>
        <thead>
            {tableHead(colsList)}
        </thead>
        <tbody>
            {data.map(rowValue=>tableBodyRow(cellStruct, rowValue))}
        </tbody>
    </table>
}

export default Table