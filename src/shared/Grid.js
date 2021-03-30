import React from "react";

const Grid = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
