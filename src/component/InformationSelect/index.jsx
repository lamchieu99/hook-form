import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form';

function SelectField(props) {
    const { form, name, label, options } = props
    const { control } = form;

    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(10),
            minWidth: 120,
        },
    }));

    const classes = useStyles();

    const generateSingleOptions = () => {
        return options.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.name}
                </MenuItem>
            )
        })
    }
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={value}
                        onChange={onChange}
                        label={label}

                    >
                        {generateSingleOptions()}
                    </Select>

                )}
            >
            </Controller>
        </FormControl>
    )
}

export default SelectField
