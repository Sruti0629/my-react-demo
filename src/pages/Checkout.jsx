import { useState } from "react";
import { FaLock, FaTrash, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";
import QRCode from "react-qr-code";

function Checkout() {
  const { cart, updateQty, removeFromCart } = useStore();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + shipping;

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ADD HERE
const handleProceedToPayment = () => {
  setStep(3);
};


const handlePlaceOrder = () => {
  alert(
    `Confirmation email sent to ${form.email}\n\nYour order will be delivered soon.`
  );

  setStep(4);
};


  const handleCOD = () => {
  const whatsappNumber = "917416778158";

  const message = `
New COD Order

Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}

Address:
${form.address}
${form.city}
${form.state}
${form.pincode}

Total: ₹${total}
  `;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};



  const inputClass =
    "w-full border border-[#e8d5c0] rounded-xl px-4 py-3 text-sm text-[#3d2b1f] bg-white focus:outline-none focus:ring-2 focus:ring-[#c68b59]/40 placeholder-gray-400";

  if (step === 4) {
    return (
      <div className="min-h-screen bg-[#fdf8f3] pt-32 pb-24 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <FaCheckCircle className="mx-auto text-[#c68b59] mb-6" style={{ fontSize: "72px" }} />
          <h2 className="text-4xl font-bold text-[#2f221c] mb-4">Order Placed!</h2>
          <p className="text-gray-600 leading-7 mb-8">
            Thank you for your order. We've sent a confirmation to your email.
            Your candles will be crafted and shipped within 2–3 business days.
          </p>
          <Link to="/">
            <button className="bg-[#2f221c] hover:bg-[#c68b59] transition text-white px-10 py-4 rounded-full font-semibold">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f3] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <div className="mb-12 text-center">
          <p className="uppercase font-semibold text-[#b8895f] mb-3" style={{ letterSpacing: "5px", fontSize: "0.8rem" }}>
            Secure Checkout
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2f221c]">Complete Your Order</h1>
        </div>

        {/* STEPPER */}
        <div className="flex items-center justify-center gap-3 mb-14">
          {["Cart", "Shipping", "Payment"].map((label, i) => {
            const s = i + 1;
            const active = step === s;
            const done = step > s;
            return (
              <div key={label} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                    style={{ backgroundColor: done || active ? "#c68b59" : "#e8d5c0", color: done || active ? "#fff" : "#9a7560" }}
                  >
                    {done ? "✓" : s}
                  </div>
                  <span className="text-sm font-medium" style={{ color: active ? "#c68b59" : "#9a7560" }}>{label}</span>
                </div>
                {i < 2 && <FaChevronRight className="text-[#d4b8a0] text-xs" />}
              </div>
            );
          })}
        </div>

        {/* MAIN GRID — left panel + right summary */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 1: CART */}
            {step === 1 && (
              <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8">
                <h2 className="text-2xl font-bold text-[#2f221c] mb-8">Your Cart</h2>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-6">Your cart is empty.</p>
                    <Link to="/categories">
                      <button className="bg-[#2f221c] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c68b59] transition">
                        Browse Products
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.name} className="flex gap-5 items-start pb-6 border-b border-[#f0e4d7] last:border-0 last:pb-0">
                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-bold text-[#2f221c] text-lg">{item.name}</h3>
                          <p className="text-[#c68b59] font-semibold mt-1">₹{item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-3 border border-[#e8d5c0] rounded-full px-3 py-1">
                              <button onClick={() => updateQty(item.name, -1)} className="w-6 h-6 flex items-center justify-center text-[#5c4033] font-bold hover:text-[#c68b59] transition">−</button>
                              <span className="text-sm font-semibold text-[#2f221c] w-4 text-center">{item.qty}</span>
                              <button onClick={() => updateQty(item.name, 1)} className="w-6 h-6 flex items-center justify-center text-[#5c4033] font-bold hover:text-[#c68b59] transition">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.name)} className="text-gray-400 hover:text-red-400 transition text-sm flex items-center gap-1">
                              <FaTrash size={12} /> Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#2f221c]">₹{(item.price * item.qty).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: SHIPPING */}
            {step === 2 && (
              <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8">
                <h2 className="text-2xl font-bold text-[#2f221c] mb-8">Shipping Details</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleInput} placeholder="Priya" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleInput} placeholder="Sharma" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleInput} placeholder="priya@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleInput} placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Address</label>
                    <input name="address" value={form.address} onChange={handleInput} placeholder="Flat 12, Rose Apartments, MG Road" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">City</label>
                    <input name="city" value={form.city} onChange={handleInput} placeholder="Hyderabad" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">State</label>
                    <input name="state" value={form.state} onChange={handleInput} placeholder="Telangana" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Pincode</label>
                    <input name="pincode" value={form.pincode} onChange={handleInput} placeholder="500032" className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT */}
            {step === 3 && (
              <div className="bg-white rounded-[24px] border border-[#eee3d8] p-8">
<div className="bg-[#fdf8f3] p-6 rounded-xl text-center mb-8">
      <h3 className="font-bold mb-4">  Scan & Pay  </h3>
{/* <QRCode
  value={`upi://pay?pa=yourupi@okaxis&pn=CandleStore&am=${total}`}
  size={180}
/> */}
<div className="w-[180px] h-[180px] bg-gray-200 mx-auto flex items-center justify-center">
  QR Code
</div>
<p className="mt-4"> UPI ID: 9876543210@paytm  </p>
 </div>

   {/* COD */}
  <div className="border border-[#eee3d8] p-6 rounded-xl flex flex-col justify-center">
    <h3 className="font-bold mb-4">
      Cash On Delivery
    </h3>

    <p className="text-sm text-gray-500 mb-4">
      Place your order through WhatsApp.
    </p>

    <button
      onClick={handleCOD}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full"
    >
      Order via WhatsApp
    </button>
  </div>

                {/* CARD PREVIEW */}
                {/* <div
                  className="rounded-2xl p-6 mb-8 text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #3d2b1f 0%, #c68b59 100%)", minHeight: "160px" }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: "white", transform: "translate(30%, -30%)" }} />
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Credit / Debit Card</p>
                  <p className="text-xl tracking-[4px] font-mono mb-4">
                    {form.cardNumber ? form.cardNumber.replace(/(.{4})/g, "$1 ").trim() : "•••• •••• •••• ••••"}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>{form.cardName || "CARD HOLDER"}</span>
                    <span>{form.expiry || "MM/YY"}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Name on Card</label>
                    <input name="cardName" value={form.cardName} onChange={handleInput} placeholder="PRIYA SHARMA" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Card Number</label>
                    <input
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={(e) => setForm({ ...form, cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16) })}
                      placeholder="1234 5678 9012 3456"
                      className={inputClass}
                      maxLength={16}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">Expiry Date</label>
                    <input name="expiry" value={form.expiry} onChange={handleInput} placeholder="MM/YY" className={inputClass} maxLength={5} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#7a5c47] mb-2 uppercase tracking-wider">CVV</label>
                    <input
                      name="cvv"
                      value={form.cvv}
                      onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) })}
                      placeholder="•••"
                      className={inputClass}
                      maxLength={3}
                    />
                  </div>
                </div> */}
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-between items-center pt-2">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="border border-[#c68b59] text-[#c68b59] px-8 py-3 rounded-full font-medium hover:bg-[#c68b59] hover:text-white transition"
                >
                  ← Back
                </button>
              ) : (
                <Link to="/categories">
                  <button className="border border-[#c68b59] text-[#c68b59] px-8 py-3 rounded-full font-medium hover:bg-[#c68b59] hover:text-white transition">
                    ← Continue Shopping
                  </button>
                </Link>
              )}

              <button
                onClick={() => {
    if (step === 2) {
      handleProceedToPayment();
    } else if (step < 3) {
      setStep((s) => s + 1);
    } else {
      handlePlaceOrder();
    }
  }}
                disabled={cart.length === 0}
                className="bg-[#2f221c] hover:bg-[#c68b59] transition text-white px-10 py-3 rounded-full font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 1 && "Proceed to Shipping →"}
                {step === 2 && "Proceed to Payment →"}
                {step === 3 && "Place Order →"}
              </button>
            </div>
          </div>

          {/* ORDER SUMMARY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[24px] border border-[#eee3d8] p-7 sticky top-28">
              <h3 className="text-xl font-bold text-[#2f221c] mb-6">Order Summary</h3>

              {cart.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">No items yet</p>
              ) : (
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#2f221c] truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                      </div>
                      <p className="text-sm font-bold text-[#2f221c] whitespace-nowrap">₹{(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-[#f0e4d7] pt-5 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#c68b59]">Add ₹{(1500 - subtotal).toLocaleString()} more for free shipping</p>
                )}
                <div className="border-t border-[#f0e4d7] pt-3 flex justify-between font-bold text-[#2f221c] text-lg">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 justify-center">
                <FaLock size={10} />
                <span>Secured with 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
