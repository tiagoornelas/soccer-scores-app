import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Center, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function DateSelector({ date, setDate }) {
  function handleSumDate() {
    setDate(moment(date).add(1, "day").format("YYYY-MM-DD"));
  }

  function handleSubtractDate() {
    setDate(moment(date).subtract(1, "day").format("YYYY-MM-DD"));
  }

  return (
    <Center flexDir="row">
      <ChevronLeftIcon
        w={8}
        h={8}
        color="primary"
        cursor="pointer"
        onClick={handleSubtractDate}
      />
      <Heading color="primary">{moment(date).format("DD/MM")}</Heading>
      <ChevronRightIcon
        w={8}
        h={8}
        color="primary"
        cursor="pointer"
        onClick={handleSumDate}
      />
    </Center>
  );
}

DateSelector.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DateSelector;
