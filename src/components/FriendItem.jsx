export default function FriendItem({ friend, selectedFriend, onSetSelectedFriend, onSetIsOpen }) {
    const isSelected = selectedFriend.id === friend.id;
    function handleSelectClick() {
        isSelected ? onSetSelectedFriend({}) : onSetSelectedFriend(friend);
        onSetIsOpen(false);
    }
    return (
        <li className={isSelected ? "selected" : null}>
            <img src={friend.image} />
            <div>
                <h2>{friend.name}</h2>
                {friend.balance === 0 ? <p>You and {friend.name} are even</p> : null}
                {friend.balance > 0 ? (
                    <p style={{ color: "#4CBB17" }}>
                        {friend.name} owes you {friend.balance}€
                    </p>
                ) : null}
                {friend.balance < 0 ? (
                    <p style={{ color: "#FF2400" }}>
                        You owe {friend.name} {friend.balance * -1}€
                    </p>
                ) : null}
            </div>
            <button onClick={handleSelectClick}>{isSelected ? "Close" : "Select"}</button>
        </li>
    );
}
