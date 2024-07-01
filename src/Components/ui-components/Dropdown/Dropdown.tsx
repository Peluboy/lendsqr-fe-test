import React, { useState, useRef, useEffect } from "react";
import classes from "./Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownProps } from "../../../Utilities/types";

const Dropdown: React.FC<DropdownProps> = ({ options, selected, setSelected, title }) => {
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <div
        className={classes.dropdownButton}
        onClick={() => setIsActive(!isActive)}
        tabIndex={0}
      >
        {selected || title}
        <FontAwesomeIcon icon={faAngleDown} color="#3C393A" id="dropdownIcon" />
      </div>
      {isActive && (
        <div className={classes.dropdownContent}>
          {options.length >= 1 ? (
            options.map((option, i) => (
              <div
                key={i}
                className={classes.dropdownItem}
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))
          ) : (
            <p className={`${classes.dropdownItem2}`}>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
