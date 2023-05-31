import styles from "./design.module.css";
import "./App.css";
import SearchBar from "./SearchBar";
import AddItems from "./AddItems";
import { useState, useEffect } from "react";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);
  const [showTest, setShowTest] = useState(true);
  const updateFilter = (searchParam) => {
    setFilters(searchParam);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const request = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, request).then(
      (response) => {
        if (response.ok) {
          const index = items.indexOf(item);
          items.splice(index, 1);
          setData({ items: items });
        }
      }
    );
  };

  const addItemsToData = (item) => {
    let items = data["items"];

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", request).then((response) => {
      console.log(response);
      response.json().then((data) => {
        items.push(data);
        setData({ items: items });
        console.log(data);
      });
    });
    console.log(data);
  };

  const filterData = (data) => {
    //console.log(filters);
    const CheckData = [data, filters];

    if (!filters.name) {
      return data;
    }
    // checks if the information is inside database
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== "" && item.price !== filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      CheckData.push(item);
    }
    return CheckData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearch={updateFilter} />
      </div>
      <div className="row mt-3">
        <AddItems AddItems={addItemsToData} />
      </div>
    </div>
  );
}

export default App;
