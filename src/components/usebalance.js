import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseBalance() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleUse = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    const current = parseFloat(localStorage.getItem("balance")) || 0;

    if (!title || !name || !date || isNaN(num) || num <= 0) {
      alert("Fill all fields correctly");
      return;
    }

    if (num > current) {
      alert("Not enough balance!");
      return;
    }

    // update balance
    const newBalance = current - num;
    localStorage.setItem("balance", newBalance.toString());

    // save transaction
    const txns = JSON.parse(localStorage.getItem("transactions")) || [];
    txns.push({
      type: "Use",
      title,
      name,
      amount: num,
      date,
    });
    localStorage.setItem("transactions", JSON.stringify(txns));

    navigate("/login/home");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-20">
      <form
        onSubmit={handleUse}
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Use Balance</h2>

        <select
          name="category"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-xl"
          required
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="food">Room Rent</option>
          <option value="food">Utility</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="travel">Travel</option>
        </select>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-xl"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-xl"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-xl"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/login/home")}
            className="bg-gray-400 text-white px-4 py-2 rounded-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default UseBalance;
