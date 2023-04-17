import React from "react";

const Filter = () => {
  return (
    <div className="Container filter mt-5  ">
      <div className="row">
        <h3 className="text-center">Filter</h3>
        <div className="col-md-12   d-flex justify-content-center  ">
          <div className="col-md-2 mx-2">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Location
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="location"
              />
            </div>
          </div>
          <div className="col-md-2 mx-2">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                type
              </label>
              <select
                class="form-select form-select mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>types </option>
                <option value="1">Banglow</option>
                <option value="2">Falte</option>
                <option value="3">House</option>
                <option value="3">land</option>
                <option value="3">Shop</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 mx-2">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Range
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Min-Max"
              />
            </div>
          </div>
          {/* <div className="col-lg-3 mx-2 d-flex align-items-center">
            <a href="">Adavance Filter</a>
            <div className="btn btn-primary mx-2 ">Search</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
