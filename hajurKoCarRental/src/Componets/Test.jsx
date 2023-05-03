// import React from "react";
// import KhaltiCheckout from "khalti-checkout-web";

// function Test() {
//   const handlePayment = () => {
//     const config = {
//       publicKey: "test_public_key_dc74e0fd57cb46cd938e0a2aee986ac9",
//       productIdentity: "1234567890",
//       productName: "Test Product",
//       productUrl: "http://example.com/test-product",
//       eventHandler: {
//         onSuccess(payload) {
//           console.log(payload);
//         },
//         onError(error) {
//           console.log(error);
//         },
//         onClose() {
//           console.log("Payment closed");
//         },
//       },
//     };

//     const checkout = new KhaltiCheckout(config);

//     checkout.show({
//       amount: 1000,
//       mobile: "+9779800000000",
//       email: "test@example.com",
//     });
//   };

//   return (
//     <div>
//       <button onClick={handlePayment}>Pay with Khalti</button>
//     </div>
//   );
// }

// export default Test;
