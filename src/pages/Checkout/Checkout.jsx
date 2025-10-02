// src/pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard, DollarSign, CheckCircle, XCircle } from "lucide-react";

import Button from "../../components/Button";
import { CartContext } from "../../contexts/CartContext";

/**
 * Checkout
 * - left: Shipping form + Payment method
 * - right: Order summary
 *
 * Note: This is a mock checkout UI. Replace payment handlers with real integrations.
 */



const OrderItem = ({ item }) => {
  return (
    <div className="flex items-start gap-3">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <p className="text-sm font-semibold text-[#272343] line-clamp-2">
          {item.title}
        </p>
        <p className="text-xs text-zinc-500 mt-1">
          Qty: {item.qty} · $
          {(item.price).toLocaleString()}
        </p>
      </div>
      <div className="text-sm font-semibold text-[#272343]">
        $
        {((item.price * item.quantity) ).toLocaleString()}
      </div>
    </div>
  );
};

const Checkout = () => {
  const navigate = useNavigate?.() || (() => {});
  const {cart} = useContext(CartContext);

  // shipping form state
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [processing, setProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const subtotal = cart?.items.reduce((s, it) => s + it.price * it.quantity, 0);
  const shipping = subtotal >= 2000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: null }));
  }

  function handleCardChange(e) {
    setCard((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function validate() {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.pincode.trim()) errs.pincode = "Pincode is required";
    if (paymentMethod === "card") {
      if (!card.number.trim()) errs.cardNumber = "Card number required";
      if (!card.name.trim()) errs.cardName = "Name on card required";
      if (!card.expiry.trim()) errs.cardExpiry = "Expiry required";
      if (!card.cvv.trim()) errs.cardCvv = "CVV required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function placeOrder(e) {
    e.preventDefault();
    if (!validate()) return;

    setProcessing(true);
    // Mock processing delay
    await new Promise((r) => setTimeout(r, 1200));
    const id = `ORD-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
    setOrderId(id);
    setOrderPlaced(true);
    setProcessing(false);

    // optional: redirect after delay
    setTimeout(() => {
      navigate("/orders"); // if you have orders page
    }, 2200);
  }

  return (
    <div className="min-h-screen relative z-10 overflow-hidden bg-gradient-to-br from-[#fffffe] via-[#f0f4ff] to-[#e4ebf5]">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ffd803] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#bae8e8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      {/* Page header */}
      <div className="bg-gradient-to-br from-[#fffffe] via-[#f0f4ff] to-[#e4ebf5] py-12">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <p variant="h1" weight="font-extrabold" className="text-3xl md:text-4xl text-[#272343]">
            Checkout
          </p>
          <p className="text-sm text-zinc-600 mt-2">Secure checkout — complete your order</p>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left column: forms */}
          <div className="lg:col-span-2">
            <form onSubmit={placeOrder} className="space-y-6">
              {/* Shipping card */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-zinc-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p variant="h3" weight="font-semibold" className="text-[#272343]">Shipping Details</p>
                    <p className="text-xs text-zinc-500 mt-1">Where should we deliver your order?</p>
                  </div>
                  <div className="text-xs text-zinc-500">Step 1 of 2</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">Full name</span>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.fullName ? "border-red-400" : "border-zinc-200"}`}
                      placeholder="Your name"
                    />
                    {errors.fullName && <span className="text-xs text-red-500 mt-1">{errors.fullName}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">Phone</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.phone ? "border-red-400" : "border-zinc-200"}`}
                      placeholder="+91 9XXXXXXXXX"
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone}</span>}
                  </label>

                  <label className="col-span-1 md:col-span-2 flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">Address</span>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.address ? "border-red-400" : "border-zinc-200"}`}
                      placeholder="Flat, house no., building, street"
                    />
                    {errors.address && <span className="text-xs text-red-500 mt-1">{errors.address}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">City</span>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.city ? "border-red-400" : "border-zinc-200"}`}
                      placeholder="City"
                    />
                    {errors.city && <span className="text-xs text-red-500 mt-1">{errors.city}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">State</span>
                    <input
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 border-zinc-200"
                      placeholder="State"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs text-zinc-600 mb-1">Pincode</span>
                    <input
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.pincode ? "border-red-400" : "border-zinc-200"}`}
                      placeholder="Pin code"
                    />
                    {errors.pincode && <span className="text-xs text-red-500 mt-1">{errors.pincode}</span>}
                  </label>
                </div>
              </div>

              {/* Payment card */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-zinc-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#ffd803]">
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <p variant="h3" weight="font-semibold" className="text-[#272343]">Payment</p>
                      <p className="text-xs text-zinc-500 mt-1">Choose a payment method</p>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-500">Step 2 of 2</div>
                </div>

                {/* Payment method tabs */}
                <div className="flex gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`px-4 py-2 rounded-xl border ${paymentMethod === "card" ? "bg-white shadow-md border-zinc-200" : "bg-transparent border-zinc-200"} text-sm`}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`px-4 py-2 rounded-xl border ${paymentMethod === "upi" ? "bg-white shadow-md border-zinc-200" : "bg-transparent border-zinc-200"} text-sm`}
                  >
                    UPI
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`px-4 py-2 rounded-xl border ${paymentMethod === "cod" ? "bg-white shadow-md border-zinc-200" : "bg-transparent border-zinc-200"} text-sm`}
                  >
                    Cash on Delivery
                  </button>
                </div>

                {/* Payment method details */}
                {paymentMethod === "card" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                      <span className="text-xs text-zinc-600 mb-1">Card number</span>
                      <input
                        name="number"
                        value={card.number}
                        onChange={handleCardChange}
                        className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.cardNumber ? "border-red-400" : "border-zinc-200"}`}
                        placeholder="4242 4242 4242 4242"
                      />
                      {errors.cardNumber && <span className="text-xs text-red-500 mt-1">{errors.cardNumber}</span>}
                    </label>

                    <label className="flex flex-col">
                      <span className="text-xs text-zinc-600 mb-1">Name on card</span>
                      <input
                        name="name"
                        value={card.name}
                        onChange={handleCardChange}
                        className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.cardName ? "border-red-400" : "border-zinc-200"}`}
                        placeholder="Full name"
                      />
                      {errors.cardName && <span className="text-xs text-red-500 mt-1">{errors.cardName}</span>}
                    </label>

                    <label className="flex flex-col">
                      <span className="text-xs text-zinc-600 mb-1">Expiry</span>
                      <input
                        name="expiry"
                        value={card.expiry}
                        onChange={handleCardChange}
                        className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.cardExpiry ? "border-red-400" : "border-zinc-200"}`}
                        placeholder="MM/YY"
                      />
                      {errors.cardExpiry && <span className="text-xs text-red-500 mt-1">{errors.cardExpiry}</span>}
                    </label>

                    <label className="flex flex-col">
                      <span className="text-xs text-zinc-600 mb-1">CVV</span>
                      <input
                        name="cvv"
                        value={card.cvv}
                        onChange={handleCardChange}
                        className={`rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffd803]/40 ${errors.cardCvv ? "border-red-400" : "border-zinc-200"}`}
                        placeholder="123"
                      />
                      {errors.cardCvv && <span className="text-xs text-red-500 mt-1">{errors.cardCvv}</span>}
                    </label>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                    <p className="text-sm text-zinc-600">Scan the QR at checkout or enter your UPI ID</p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input placeholder="yourname@upi" className="rounded-lg border px-3 py-2 border-zinc-200 focus:outline-none" />
                      <Button btnText="Pay with UPI" btnType="filled" className="px-4 py-2 rounded-xl bg-[#ffd803] text-[#272343]" />
                    </div>
                  </div>
                )}

                {paymentMethod === "cod" && (
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                    <p className="text-sm text-zinc-600">Pay with cash when your order arrives. A small verification may be required.</p>
                  </div>
                )}
              </div>

              {/* Place order CTA */}
              <div className="flex justify-end">
                <button
                  
                  className="px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-[#272343] text-white"
                  onClick={placeOrder}
                  disabled={processing}
                >{processing ? "Processing..." : "Place order"}</button>
              </div>
            </form>
          </div>

          {/* Right column: order summary */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-zinc-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p variant="h4" weight="font-semibold" className="text-[#272343]">Order Summary</p>
                  <p className="text-xs text-zinc-500 mt-1">Items will be shipped to the address provided</p>
                </div>
                <div className="text-sm text-zinc-500">{cart?.items.length} items</div>
              </div>

              <div className="space-y-4">
                {cart?.items.map((it) => (
                  <OrderItem key={it.id} item={it} />
                ))}
              </div>

              <div className="border-t mt-4 pt-4 text-sm space-y-2 text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${(subtotal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${(shipping).toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(tax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-[#272343] text-lg mt-2">
                  <span>Total</span>
                  <span>${(total).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Promo / notes */}
            <div className="bg-white rounded-2xl shadow-sm p-4 border border-zinc-100">
              <label className="text-sm text-zinc-600">Have a promo code?</label>
              <div className="mt-3 flex gap-2">
                <input className="flex-1 rounded-lg border px-3 py-2 border-zinc-200 focus:outline-none" placeholder="Enter code" />
                <Button btnText="Apply" className="px-4 py-2 rounded-xl" />
              </div>
            </div>

            {/* Secure badge */}
            <div className="bg-white rounded-2xl shadow-sm p-4 border border-zinc-100 flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              <div>
                <p className="text-sm font-semibold text-[#272343]">Secure payments</p>
                <p className="text-xs text-zinc-500">We use industry-standard encryption</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Success / failure modal */}
      {orderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md text-center shadow-xl">
            <CheckCircle size={48} className="mx-auto text-green-500" />
            <h3 className="mt-4 text-xl font-semibold text-[#272343]">Order placed</h3>
            <p className="text-sm text-zinc-600 mt-2">Thanks — your order <span className="font-medium">{orderId}</span> is confirmed.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/orders" className="px-4 py-2 rounded-lg border border-zinc-200">View orders</Link>
              <Button btnText="Continue shopping" btnType="filled" className="px-4 py-2 rounded-lg bg-[#ffd803] text-[#272343]" onClick={() => { setOrderPlaced(false); navigate("/"); }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
