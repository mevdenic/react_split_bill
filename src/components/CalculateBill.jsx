import { useState } from "react";

export default function CalculateBill({ selectedFriend, onSetSelectedFriend, onHandleSplitBill }) {
    const [bill, setBill] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendsExpense = bill ? bill - yourExpense : "";

    function handleBillSubmit(e) {
        e.preventDefault();
        if (!bill || !yourExpense) return;
        onHandleSplitBill(whoIsPaying === "user" ? friendsExpense : -bill + friendsExpense);
        setBill("");
        setYourExpense("");
        setWhoIsPaying("user");
        onSetSelectedFriend({});
    }
    return (
        <form className="form" onSubmit={handleBillSubmit}>
            <h1>SPLIT BILL WITH A {selectedFriend.name}</h1>
            <div className="flex">
                <label>💰 Bill value:</label>
                <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            </div>
            <div className="flex">
                <label>🙍‍♂️ Your expense:</label>
                <input
                    type="text"
                    value={yourExpense}
                    onChange={(e) =>
                        setYourExpense(
                            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
                        )
                    }
                />
            </div>
            <div className="flex">
                <label>👯‍♂️ {selectedFriend.name}&apos;s expense:</label>
                <input type="text" value={friendsExpense} disabled />
            </div>
            <div className="flex">
                <label>💲 Who is paying the bill?</label>
                <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            </div>
            <button>Split Bill</button>
        </form>
    );
}
