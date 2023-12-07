import FriendItem from "./FriendItem";

export default function FriendList({
    friendsArr,
    selectedFriend,
    onSetSelectedFriend,
    onSetIsOpen,
}) {
    return (
        <ul>
            {friendsArr.map((friend) => (
                <FriendItem
                    key={friend.id}
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSetSelectedFriend={onSetSelectedFriend}
                    onSetIsOpen={onSetIsOpen}
                />
            ))}
        </ul>
    );
}
