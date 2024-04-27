import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import {
  addItems,
  decreaseQuantity,
  deleteAllItem,
  deleteItem,
  increseQuantity,
  selectedInvetory,
} from "../redux/slice/inventorySlice";

import "../style/global.css";

const Lists = (props) => {
  const { inventoryItmes = [] } = useSelector(selectedInvetory);
  const dispatch = useDispatch();

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const onChangeHandle = (event) => {
    setItem(event.target.value);
  };

  const onChangeHandleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const onAddItem = () => {
    dispatch(addItems({ name: item, quantity: Number(quantity || 1) }));
    setItem("");
    setQuantity("");
  };

  const onRemoveItem = (item) => {
    dispatch(deleteItem(item));
  };

  const onRemoveAll = () => {
    dispatch(deleteAllItem());
  };

  const onIncrease = (index) => {
    dispatch(increseQuantity(index));
  };

  const onDrecrease = (index) => {
    dispatch(decreaseQuantity(index));
  };

  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter item name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={item}
                onChange={onChangeHandle}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={quantity}
                onChange={onChangeHandleQuantity}
              />
              <button
                class="btn btn-primary"
                type="button"
                id="button-addon2"
                disabled={!item?.length}
                onClick={onAddItem}
              >
                Add
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <h2 className="App-header mb-3">Inventory List</h2>
              <div className="d-flex justify-content-center">
                <Card className="w-100">
                  <CardBody>
                    <Table striped className="">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item Name</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {inventoryItmes?.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item?.name}</td>
                            <td>
                              <div className="quantity-container">
                                Quantity : {item?.quantity}
                                <div className="quantity-action-container">
                                  <span
                                    className="quantity-increase"
                                    onClick={() => onIncrease(index)}
                                  >
                                    ^
                                  </span>
                                  <span
                                    className="quantity-decrease"
                                    onClick={() => onDrecrease(index)}
                                  >
                                    ^
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p
                                className="text-danger fw-bolder"
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={() => onRemoveItem(item)}
                              >
                                X
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary" onClick={onRemoveAll}>
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
};

export { Lists };
