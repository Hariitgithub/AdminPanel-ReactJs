import React, { useMemo, useState } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
// import MOCK_DATA from './MOCK_DATA.json'; // Replace with your data source
// import { COLUMNS } from './columns'; // Define your columns in this file
// import './table.css'; // Add your custom styles
import { COLUMNS, MOCK_DATA } from './redux/api/dummyJson';
import { Col, Pagination, Row} from 'react-bootstrap';
import BTable from "react-bootstrap/Table";
import { Table } from '../components/Table/Table';
// import { lazy } from 'react';

// const Table = lazy(() => import('../components/Table/Table.js'));



const NewData=()=>{
    const columns = React.useMemo(
        () => [
          {
            Header: "S.No",
            accessor: "sno",
            Cell: ({ value, row }) => {
              return <p>{row.index + 1}</p>;
            },
          },
          {
            Header: "Robot type",
            accessor: "accessor",
            Cell: ({ value, row }) => {
              return <p>{value}</p>;
            },
          },
          {
            Header: "Robot type",
            accessor: "Header",
            Cell: ({ value, row }) => {
              return <p>{value}</p>;
            },
          },
       
     
        ],
        []
      );
    return(
        <div className="table-responsive menu-table side_pad mt-4 w-100">
        <Table columns={columns} data={COLUMNS} className="" />
      </div>
    )
}
export default NewData;

