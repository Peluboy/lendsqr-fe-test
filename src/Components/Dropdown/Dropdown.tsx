import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownProps } from "../../Utilities/types";

const Dropdown = (props: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [optionsState, setOptionsState] = useState(props.options);

  // ref
  const dropdownRef = useRef<HTMLDivElement>(null!);
  const dropdownItem = useRef<HTMLElement>(null!);

  useEffect(() => {
    dropdownRef?.current?.focus();
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (!dropdownRef?.current?.contains(e.target as Node)) {
        setIsActive(false);
      } else {
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
        // tabIndex={0}
        className={classes.dropdownButton}
        onClick={() => {
          setIsActive(!isActive);
          // document.getElementById("dropdownIcon").style =
          //   "transform: rotate(0deg)";
          // if (!isActive) {
          //   document.getElementById('dropdownIcon').style =
          //     'transform: rotate(-180deg)';
          // }
        }}
        tabIndex={0}
      >
        {props.selected || props.title}
        <i>
          <FontAwesomeIcon
            icon={faAngleDown}
            color="#3C393A"
            id="dropdownIcon"
          />
        </i>
      </div>
      {isActive && (
        <div className={classes.dropdownContent} onClick={props.onClick}>
          {props.options.length >= 1 ? (
            props.options.map((option, i) => {
              return (
                <div
                  key={i}
                  className={classes.dropdownItem}
                  onClick={() => {
                    props.setSelected(option);
                    setIsActive(false);
                  }}
                >
                  {option.slice(0, 1).toUpperCase() + option.slice(1)}
                </div>
              );
            })
          ) : (
            <p className={`${classes.dropdownItem2}`}>No matching Items</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
