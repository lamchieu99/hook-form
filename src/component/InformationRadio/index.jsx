import React from 'react'
import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import './style.css'

function RadioField(props) {
    const { form, name, values } = props
    const { control } = form;
    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
            minWidth: 120,
        },
    }));

    const classes = useStyles();

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={onChange}>
                        {values.map((item) => (
                            <FormControlLabel
                                key={item.value}
                                label={item.label}
                                control={
                                    <FormControlLabel value={item.value} control={<Radio />} />
                                }
                            />
                        ))}
                    </RadioGroup>
                )}
            ></Controller>
        </FormControl>
    )
}

export default RadioField

