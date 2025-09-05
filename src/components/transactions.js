import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const txns = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(txns);
  }, []);

  return (
    <div className="py-20 px-10 flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Transactions</h2>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Type</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, i) => (
                <tr key={i}>
                  <td className="border p-2">{txn.type}</td>
                  <td className="border p-2">{txn.title}</td>
                  <td className="border p-2">{txn.name}</td>
                  <td className="border p-2">₹{txn.amount}</td>
                  <td className="border p-2">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Link
          to="/login/home"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
export default Transactions;
