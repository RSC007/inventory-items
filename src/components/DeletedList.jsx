import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import {
  clearInventoryDeleteItems,
  selectedInvetory,
} from "../redux/slice/inventorySlice";

export default function DeletedList() {
  const { inventoryDeletedItmes = [] } = useSelector(selectedInvetory);
  const dispatch = useDispatch();

  const onReset = () => {
    dispatch(clearInventoryDeleteItems());
  };

  return (
    <div>
      <h2 className="App-header">Deleted List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>Deleted Inventory List</CardHeader>
          <CardBody>
            <div>
              <div className="d-flex justify-content-center">
                <Card className="w-100">
                  <CardBody>
                    <Table striped className="">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item Name</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inventoryDeletedItmes?.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item?.name}</td>
                            <td>{item?.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary" onClick={onReset}>
                        Clear All
                      </button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
