import React from "react";
import Button from "./Button";

const Filter = () => {
  return (
    <div className="flex">
      <Button name="Live" />
      <Button name="News" />
      <Button name="Sports" />
      <Button name="Music" />
      <Button name="Mixes" />
      <Button name="Comedy" />
      <Button name="T-series" />
      <Button name="Gaming" />
      <Button name="Yoga" />
      <Button name="Fitness" />
    </div>
  );
};

export default Filter;
