import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./InputGroup.module.css";

type InputGroupType = {
  departure?: string;
  activePlaceholder?: string;
};

const InputGroup: FunctionComponent<InputGroupType> = ({
  departure,
  activePlaceholder,
}) => {
  return (
    <div className={styles.inputGroup}>
      <Autocomplete
        className={styles.departureField}
        size="medium"
        disablePortal
        options={[
          "Singapore (SIN)",
          "Sydney (SYD)",
          "Siem Reap (REP)",
          "Shanghai (PVG)Sanya (SYX)",
        ]}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Departure"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        defaultValue="Singapore -  Changi (SIN)"
      />
    </div>
  );
};

export default InputGroup;
