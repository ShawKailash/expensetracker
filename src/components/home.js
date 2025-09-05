import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transactions from "./transactions";
function Home() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) setBalance(parseFloat(savedBalance));
  }, []);
  return (
    <div className="py-10 px-10 min-h-screen bg-gray-100 w-full">
      <h2 className="flex items-center justify-center text-blue-500 text-2xl">
        Expense Tracker
      </h2>
      <div className="flex items-center justify-center mt-5 mb-5">
        <div className="border rounded-xl bg-gray-500 text-white flex flex-col items-center w-96 h-56">
          <h2 className="text-2xl mt-10">
            Wallet Balance: <b>₹{balance}</b>
          </h2>
          <div className="flex space-x-5 mt-10">
            <div>
              <Link
                to="/login/home/addbalance"
                className="bg-green-500 text-white px-6 py-2 rounded-xl"
              >
                Add Income
              </Link>
            </div>
            <div>
              <Link
                to="/login/home/usebalance"
                className="bg-red-500 text-white px-6 py-2 rounded-xl"
              >
                Use Balance
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <Transactions />
      </div> */}

      <div className="flex items-center justify-center">
        <div className="bg-blue-500 text-white px-6 py-2 rounded-xl">
          <Link to="/login/home/transactions">Transactions</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
