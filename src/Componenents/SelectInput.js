import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useForm from '../UseForm';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



export default function SelectInput() {
  const classes = useStyles();
  const { handleInputChange, userType, clubes} = useForm()

  return (
    <div>
    <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Clube</InputLabel>
        <Select
          native
          label="Clube"
          onChange={handleInputChange}
          inputProps={{
            name: 'Clube',
            id: 'outlined-age-native-simple',
          }}
        >
          <option  aria-label="boxShadow" value="" />
          <option value={1}>{clubes[1]}</option>
          <option value={2}>{clubes[2]}</option>
          <option value={3}>{clubes[3]}</option>
          <option value={3}>{clubes[4]}</option>

        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Tipo de Usuario</InputLabel>
        <Select
          native
          label="Tipo de Usuario"
          onChange={handleInputChange}
          inputProps={{
            name: 'userType',
            id: 'outlined-age-native-simple',
          }}
        >
          <option  aria-label="boxShadow" value="" />
          <option value={1}>{userType[1]}</option>
          <option value={2}>{userType[2]}</option>

        </Select>
      </FormControl>
    </div>
  );
}
