import { useState, useCallback } from "react";

const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [itemsFields, setItemsFields] = useState([]);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const handleItemChange = (index, e) => {
    let data = [...itemsFields];

    if (e.target.name === "quantity" || "price") {
      data[index][e.target.name] = e.target.value;
      data[index]["total"] = (
        Number(data[index].quantity) * Number(data[index].price)
      ).toFixed(2);
    } else {
      data[index][e.target.name] = e.target.value;
    }

    setItemsFields(data);
  };

  const handleNewItem = () => {
    setItemsFields([
      ...itemsFields,
      { name: "New Item", quantity: "0.0", price: "0.0", total: "0.0" },
    ]);
  };

  const handleDeleteItem = (index) => {
    let data = itemsFields.filter((item, id) => id !== index);
    setItemsFields(data);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setItemsFields([]);
    },
    [setValues, setErrors, setIsValid, setItemsFields]
  );

  return {
    values,
    itemsFields,
    handleChange,
    handleItemChange,
    handleNewItem,
    handleDeleteItem,
    errors,
    isValid,
    resetForm,
    setValues,
    setItemsFields,
    setIsValid,
  };
};
export default useFormAndValidation;
