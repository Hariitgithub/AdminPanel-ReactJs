import { Row, Col, Pagination, Button, Form } from "react-bootstrap";
import BTable from "react-bootstrap/Table";

import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
// import { toast } from "react-toastify";
import { GlobalFilter } from "./GlobalFilter";
import { Link, useNavigate } from "react-router-dom";

export function Table({ columns, data }) {
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    globalFilter,
    setGlobalFilter,

    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Row className="">
        <Col className="">
          <div className="d-flex ac-je ps-2 mt-2">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </Col>
      </Row>
      <BTable striped size="sm" responsive {...getTableProps()} className="mt-4 table-border table-design table"
      //  variant="dark"
      >
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr className="nowrap f2" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th className="px-3 text-center py-2" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <h4 className="fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20">{column.render("Header")}</h4>
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="feather icon-arrow-down text-muted float-right" />
                      ) : (
                        <span className="feather icon-arrow-up text-muted float-right" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr className="text-center f1" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="fs-sm-10 fs-md-14 fs-lg-16 fs-xl-18 fs-xxl-20 py-2 mt-2" t-2 {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      <Row className="justify-content-between table-show my-2">
        <Col>
          <span className="d-flex align-items-center">
            <p className="px-1 mb-0">Page</p>
            <strong>
              {pageIndex + 1} of {pageOptions.length}{" "}
            </strong>{" "}
            <p className="px-1 mb-0">|</p>
            <p className="px-1 mb-0">Go to page:</p>{" "}
            <input
              type="number"
              className="form-control ml-2  p-1 py-1 text-center"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "40px" }}
            />
          </span>
        </Col>
        <Col>
          <Pagination className="justify-content-end pointer">
            <Pagination.First
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            />
            <Pagination.Prev
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            />
            <Pagination.Next
              onClick={() => nextPage()}
              disabled={!canNextPage}
            />
            <Pagination.Last
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            />
          </Pagination>
        </Col>
      </Row>
    </>
  );
}
