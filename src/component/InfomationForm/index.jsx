import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

FormField.prototype = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

function FormField(props) {
    const { form, name, label} = props
    const { control } = form;

    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, name }, fieldState: { invalid, error } }) => (
                    <TextField
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        label= {label}
                        error={invalid}
                        helperText={error?.message}
                        onChange={onChange}
                        name={name}
                        value={value}
                    />

                )}
            ></Controller>
        </div>
    )
}

export default FormField

