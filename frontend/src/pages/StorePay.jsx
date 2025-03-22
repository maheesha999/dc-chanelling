import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Example product data (you would normally fetch this from an API)
const products = [
  {
    id: 1,
    name: "Herbal Tea",
    price: "Rs.500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMbHup3E8WbdtjhziqSZFz7aHYEMa2c9HgA&s",
  },
  {
    id: 2,
    name: "Aloe Vera Gel",
    price: "Rs.1300",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcF_nEpV0Ku4dBHmbxpU8YSeexirMKxofG2A&s",
  },

  {
    id: 3,
    name: "Turmeric Capsules",
    price: "Rs.450",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKx23r7-FkQpT8cpYcM9h2lMJ7sh9yXsBHEg&s",
  },
  {
    id: 4,
    name: "Neem Oil",
    price: "Rs.300",
    image: "https://whoweare.lk/wp-content/uploads/2021/08/22-11.jpg",
  },
  {
    id: 5,
    name: "Moringa Powder",
    price: "Rs.700",
    image:
      "https://kamasrilanka.com/wp-content/uploads/2022/02/146490575_4144730535537091_6269312815956140416_n.jpg",
  },
  {
    id: 6,
    name: "Ginger Extract",
    price: "Rs.900",
    image:
      "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/121955--01--1648313992.jpeg",
  },
  {
    id: 7,
    name: "Ashwagandha Powder",
    price: "Rs.1200",
    image: "https://static-01.daraz.lk/p/55f89750916f8eef248d1e8ba1b64aac.png",
  },
  {
    id: 8,
    name: "Hibiscus Tea",
    price: "Rs.650",
    image: "https://m.media-amazon.com/images/I/71TUpyIIhcL.jpg",
  },
  {
    id: 9,
    name: "Green Tea Leaves",
    price: "Rs.550",
    image: "https://static-01.daraz.lk/p/e87c846e70e414169405363118b1dc22.jpg",
  },
  {
    id: 10,
    name: "Cinnamon Powder",
    price: "Rs.500",
    image:
      "https://apedeproducts.lk/wp-content/uploads/2023/11/Cinnamon-Cinnamomum-verum-1.jpg",
  },
  {
    id: 11,
    name: "Lavender Oil",
    price: "Rs.1400",
    image:
      "https://lk.spaceylon.com/cdn/shop/files/Cedarwood_-_Essential_Oil_20ml_-_Spa_Ceylon_Sri_Lanka-4359035.jpg?v=1728288735",
  },
  {
    id: 12,
    name: "Peppermint Capsules",
    price: "Rs.800",
    image: "https://m.media-amazon.com/images/I/71iDdGFlWsL.jpg",
  },
  {
    id: 13,
    name: "Fenugreek Seeds",
    price: "Rs.400",
    image:
      "https://www.ceylone.lk/wp-content/uploads/2021/11/ceylone.lk_Uluhal_-png-mg1.jpg",
  },
  {
    id: 14,
    name: "Organic Honey",
    price: "Rs.1500",
    image: "https://madebyher.lk/wp-content/uploads/2023/02/old-300g3.jpg",
  },
  {
    id: 15,
    name: "Black Seed Oil",
    price: "Rs.2000",
    image: "https://shopxonline.lk/cdn/shop/files/ugui.jpg?v=1731225678",
  },
  {
    id: 16,
    name: "Chamomile Tea",
    price: "Rs.600",
    image:
      "https://dmc.dilmahtea.com/web-space/dmc/products/35139ef894b28b73bea022755166a23933c7d9cb/500_500.157717279263671.jpg",
  },
];

const StorePay = () => {
  const { id } = useParams(); // Get the product ID from URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product from the list
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [paymentMethod, setPaymentMethod] = useState(""); // State to track selected payment method
  const navigate = useNavigate(); // Navigation hook

  // If product is not found, show error
  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  // Calculate total price
  const totalPrice = parseInt(product.price.replace("Rs.", "")) * quantity;

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle the payment process
  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment of Rs.${totalPrice} successful using ${paymentMethod}!`);
    navigate("/"); // Redirect to homepage or confirmation page
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Payment
      </h1>

      <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-md"
        />

        <div className="ml-6">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-green-600 font-bold">{product.price}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-2 border rounded"
            />
          </div>

          <p className="mt-4">Total Price: Rs.{totalPrice}</p>

          {/* Payment Method Selector */}
          <div className="mt-4">
            <label htmlFor="paymentMethod" className="block mb-2">
              Select Payment Method:
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Pay Now Button */}
          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorePay;
