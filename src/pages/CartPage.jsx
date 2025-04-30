import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Left: Cart Items */}
      <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >-</button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-500 hover:underline text-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
