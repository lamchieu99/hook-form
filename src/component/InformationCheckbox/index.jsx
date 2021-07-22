import React, { useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, makeStyles } from '@material-ui/core';
import { Controller } from 'react-hook-form';

function CheckboxField(props) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
            minWidth: 120,
        },
    }));

    const classes = useStyles();
    const { form, name, label, values } = props
    const { control } = form;

    const [checkedItems, setCheckedItems] = useState({});

    const handleClick = (e) => {
        let newState = { ...checkedItems };

        if (e.target.checked) {
            newState[e.target.value] = true;
        } else {
            newState[e.target.value] = false;
        }
        setCheckedItems(newState);
        // console.log(newState)

    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <FormLabel>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <FormGroup >
                        {values.map((item) => (
                            <FormControlLabel
                                key={item.value}
                                value={item.value}
                                label={item.label}
                                control={
                                    <Checkbox
                                        value={item.value}
                                        checked={Boolean(checkedItems[item.value])}
                                        onChange={onChange}
                                        onClick={handleClick}
                                    />
                                }
                            />
                        ))}
                    </FormGroup>

                )}
            >
            </Controller>
        </FormControl>
    )
}

export default CheckboxField


