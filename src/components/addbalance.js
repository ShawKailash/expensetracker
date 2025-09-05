import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBalance() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
      alert("Enter valid amount");
      return;
    }

    // ✅ Update balance
    const current = parseFloat(localStorage.getItem("balance")) || 0;
    const newBalance = current + num;
    localStorage.setItem("balance", newBalance.toString());

    // ✅ Save transaction
    const txns = JSON.parse(localStorage.getItem("transactions")) || [];
    txns.push({
      type: "Add",
      title: "Income",
      name,
      amount: num,
      date,
    });
    localStorage.setItem("transactions", JSON.stringify(txns));

    // Go back to home
    navigate("/login/home");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-20">
      <form
        onSubmit={handleAdd}
        className="bg-white p-10 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Balance</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded-xl"
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-xl"
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
            className="bg-green-500 text-white px-4 py-2 rounded-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddBalance;
