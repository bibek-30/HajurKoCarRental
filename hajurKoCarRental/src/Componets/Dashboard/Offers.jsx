// import React, { useState } from "react";
// import "./Offer.css";

// function Offers() {
//   const [offers, setOffers] = useState([
//     {
//       id: 1,
//       offer: "20% off on all products",
//       description: "Valid for a limited time only.",
//     },
//     {
//       id: 2,
//       offer: "Free shipping on orders over $50",
//       description: "No coupon code required.",
//     },
//     {
//       id: 3,
//       offer: "Buy one, get one 50% off",
//       description: "Discount applies to item of equal or lesser value.",
//     },
//   ]);

//   const handleAddOffer = () => {
//     // Logic for adding a new offer to the `offers` state array
//   };

//   return (
//     <div className="offers">
//       <h1>Offers</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Offer</th>
//             <th>Description</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {offers.map((offer) => (
//             <tr key={offer.id}>
//               <td>{offer.offer}</td>
//               <td>{offer.description}</td>
//               <td>
//                 <button className="edit-btn">Edit</button>
//                 <button className="delete-btn">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-btn" onClick={handleAddOffer}>
//         Add Offer
//       </button>
//     </div>
//   );
// }

// export default Offers;
import React, { useState } from "react";
import "./Offer.css";

function Offers() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      offer: "20% off on all products",
      description: "Valid for a limited time only.",
    },
    {
      id: 2,
      offer: "Free shipping on orders over $50",
      description: "No coupon code required.",
    },
    {
      id: 3,
      offer: "Buy one, get one 50% off",
      description: "Discount applies to item of equal or lesser value.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddOffer = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const offer = {
      id: offers.length + 1,
      offer: event.target.offer.value,
      description: event.target.description.value,
    };
    setOffers([...offers, offer]);
    setShowForm(false);
  };

  return (
    <div className="offers">
      <h1>Offers</h1>
      <table>
        <thead>
          <tr>
            <th>Offer</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.offer}</td>
              <td>{offer.description}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Offer:
            <input type="text" name="offer" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <button className="add-btn" onClick={handleAddOffer}>
          Add Offer
        </button>
      )}
    </div>
  );
}

export default Offers;
