import AddFriend from "./AddFriend";
import CalculateBill from "./CalculateBill";
import FriendList from "./FriendList";
import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function SplitBill() {
    const [friendsArr, setFriendsArr] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    function handleSplitBill(value) {
        setFriendsArr((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );
    }

    return (
        <div className="main-container">
            <div className="left-container">
                <FriendList
                    friendsArr={friendsArr}
                    selectedFriend={selectedFriend}
                    onSetSelectedFriend={setSelectedFriend}
                    onSetIsOpen={setIsOpen}
                />
                <AddFriend
                    friendsArr={friendsArr}
                    onSetFriendsArr={setFriendsArr}
                    isOpen={isOpen}
                    onSetIsOpen={setIsOpen}
                />
            </div>
            {Object.keys(selectedFriend).length ? (
                <CalculateBill
                    key={selectedFriend.id}
                    selectedFriend={selectedFriend}
                    onSetSelectedFriend={setSelectedFriend}
                    onHandleSplitBill={handleSplitBill}
                />
            ) : null}
        </div>
    );
}
