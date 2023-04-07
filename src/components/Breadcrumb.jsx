import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {props.list?.map?.((item, index) => {
            const arias =
              index === props.list?.length
                ? { "aria-label": "current-page" }
                : {};
            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
Breadcrumb.propTypes = {
  list: propTypes.array.isRequired,
};
