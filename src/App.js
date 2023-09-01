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

export default function App() {
  
  const handleShowAddFriend = function () {
    
  };
  const handleAddFriend = function (newFriend) {
    
  };
  const handleSelection = function (friend) {
    
  };

  const handleSplitBill = function (value) {
    
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
        />
       <FormAddFriend />
        <Button >
          Add Friend
        </Button>
      </div>
        <FormSplitBill/>
    </div>
  );
}

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  
  return (
    <li className={"selected"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => {}}>
      Select
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend() {
  
  const handleSubmit = function (e) {
    
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Friend Name</label>
      <input
        type="text"
       
      />

      <label>🖼️ Image url</label>
      <input
        type="text"
        
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {


  function handleSubmit(e) {
   
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        
      />

      <label>🧍 Your expense</label>
      <input
        type="text"
       
      />

      <label>👬 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select
        name=""
        id=""
      >
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
