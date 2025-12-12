import React from 'react'
import { Row, Col, Pagination, Button, Form } from "react-bootstrap";


export const Paginations = ({pageIndex, pageOptions}) => {
    // return (
    //     <div>
    //         <Row className="justify-content-between table-show my-2">
    //             <Col>
    //                 <span className="d-flex align-items-center">
    //                     <p className="px-1">Page</p>
    //                     <strong>
    //                         {pageIndex + 1} of {pageOptions.length}{" "}
    //                     </strong>{" "}
    //                     <p className="px-1">|</p>
    //                     <p className="px-1">Go to page:</p>{" "}
    //                     <input
    //                         type="number"
    //                         className="form-control ml-2  p-1 py-1 text-center"
    //                         defaultValue={pageIndex + 1}
    //                         onChange={(e) => {
    //                             const page = e.target.value ? Number(e.target.value) - 1 : 0;
    //                             gotoPage(page);
    //                         }}
    //                         style={{ width: "40px" }}
    //                     />
    //                 </span>
    //             </Col>
    //             <Col>
    //                 <Pagination className="justify-content-end ">
    //                     <Pagination.First
    //                         onClick={() => gotoPage(0)}
    //                         disabled={!canPreviousPage}
    //                     />
    //                     <Pagination.Prev
    //                         onClick={() => previousPage()}
    //                         disabled={!canPreviousPage}
    //                     />
    //                     <Pagination.Next
    //                         onClick={() => nextPage()}
    //                         disabled={!canNextPage}
    //                     />
    //                     <Pagination.Last
    //                         onClick={() => gotoPage(pageCount - 1)}
    //                         disabled={!canNextPage}
    //                     />
    //                 </Pagination>
    //             </Col>
    //         </Row>
    //     </div>
    // );
};

