import React from "react";
import PropTypes from "prop-types";
import FormField from "../InfomationForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectField from "../InformationSelect";
import CheckboxField from '../InformationCheckbox'
import DatePickerField from "../InformationDate";
import RadioField from "../InformationRadio";
import { Button } from "@material-ui/core";
import './style.css'


InformationList.propTypes = {
    onSubmit: PropTypes.func,
};

function InformationList(props) {

    const schema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        address: yup.string().required("Please enter address"),
        date: yup.string().required("Please enter date"),

    });

    const form = useForm({
        defaultValues: {
            name: "",
            level: "",
            address: "",
            check: "",
            date: "",
            radio: "Male"
        },
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = (value) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(value);
        }
        form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmitForm)}>
            <FormField name="name" label="Fullname" form={form} />
            <FormField name="address" label="Address" form={form} />
            <RadioField
                label="Gender"
                form={form}
                name="radio"
                values={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                ]}
            />

            <SelectField
                name="level"
                label="Level"
                form={form}
                options={[
                    { name: "Intern", value: "Intern" },
                    { name: "Fresher", value: "Fresher" },
                    { name: "Junior", value: "Junior" },
                ]}
            />

            <DatePickerField
                label="Birthday"
                form={form}
                name="date"
            />
            <CheckboxField
                name="check"
                form={form}
                label="Hobby"
                values={[
                    { value: 'Watch television', label: 'Watch television' },
                    { value: 'Play football', label: 'Play football' },
                    { value: 'Read newpaper', label: 'Read newpaper' }
                ]}
            />
            {/* <button type="submit">Submit</button> */}
            <div className="submit">
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default InformationList;
