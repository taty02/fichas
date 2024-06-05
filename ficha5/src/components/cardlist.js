import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.CardList} />
              <div className="card-body">
                <h5 className="card-title">{item.CardList}</h5>
                <p className="card-text">{item.Movies}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;