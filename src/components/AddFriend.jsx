import { useState } from "react";

export default function AddFriend({ friendsArr, onSetFriendsArr, onSetIsOpen, isOpen }) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("https://i.pravatar.cc/48");

    function handleOpenClose() {
        onSetIsOpen(() => !isOpen);
    }

    function handleAddFriend(e) {
        e.preventDefault();
        if (!name || !url) return;
        const id = crypto.randomUUID();
        const newFriend = {
            id: id,
            name: name,
            image: `${url}`,
            balance: 0,
        };
        onSetFriendsArr(() => [...friendsArr, newFriend]);
        setName("");
        setUrl("https://i.pravatar.cc/48");
    }
    return (
        <div>
            {isOpen ? (
                <form className="form" onSubmit={handleAddFriend}>
                    <div className="flex">
                        <label>🙍‍♂️ Friend name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex">
                        <label>📸 Image URL:</label>
                        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <button>Add</button>
                </form>
            ) : null}
            <button className="close-button" onClick={handleOpenClose}>
                {isOpen ? "Close" : "Add friend"}
            </button>
        </div>
    );
}
