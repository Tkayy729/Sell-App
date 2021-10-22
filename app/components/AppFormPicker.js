import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./forms/ErrorMessage";
import PickerItem from "./Pickertem";

function AppFormPicker({ items,numberOfColumns, width, PickerItemComponent,name, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                PickerItemComonent={PickerItemComponent}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;
