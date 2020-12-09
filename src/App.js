import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

export default function App(props) {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          autoOk={true}
          showTodayButton={true}
          value={"2020-02-02"}
          format="yyyy-mm-dd"
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
