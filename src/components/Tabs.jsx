import React from "react";

function Tabs(props) {
  //destructure out props from todos
  const { todos, selectedTabs, setSelectedTabs } = props;
  const tabs = ["All", "Open", "Complete"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        //filter to get the number of tasks
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              setSelectedTabs(tab);
            }}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTabs ? " tab-selected" : "")
            }>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}

export default Tabs;
