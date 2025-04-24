export default function ShoppingCart({ items, onRemove }) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b pb-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  <p className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="text-red-500 hover:underline text-sm"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-right text-lg font-semibold text-gray-800">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    )
  }
  