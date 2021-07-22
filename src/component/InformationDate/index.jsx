import { FormControl, makeStyles, TextField } from '@material-ui/core';
import React from 'react'
import { Controller } from 'react-hook-form';

function DatePickerField(props) {
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: theme.spacing(2)
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200
        },
    }));
    const classes = useStyles();

    const { form, name, label } = props
    const { control } = form;

    return (
        <FormControl className={classes.container} noValidate>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
                    <TextField
                        id="date"
                        label={label}
                        type="date"
                        error={invalid}
                        helperText={error?.message}
                        value={value}
                        formate="MMM/dd/yyyy"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={onChange}
                    />

                )}
            ></Controller>
        </FormControl>
    )
}


export default DatePickerField

