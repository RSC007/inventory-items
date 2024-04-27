import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";
import { selectedInvetory } from "../redux/slice/inventorySlice";

const Home = (props) => {
  const { inventoryItmes = [] } = useSelector(selectedInvetory);
  const navigate = useNavigate();

  const onVisit = (path = "") => {
    navigate(path);
  };

  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
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
                {inventoryItmes?.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <button
              className="btn btn-primary"
              onClick={() => onVisit("/lists")}
            >
              Edit List
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
