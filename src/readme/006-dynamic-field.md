# Dynamic Field

- Use for collecting multiple data. It gives user to add or remove data base on their need

# Steps

- 1. import {useFieldArray } from 'react-hook-form'
- 2. define the type for the default value. It is an array of object. It is an array of object beause useFieldArry works only with object value
- 3. Add the defined type to the default value
- 4. Specify the Foodlist field as an array of field by invoking the useFieldArry. The useFieldArray takes an object args wuth key name and value as name of the field, and control

```
const {fields, append} = useFieldArray({
    name: 'foodList',
    control
})
```

5. Add the JSX

-       -1. map over the fields array and render an input
        -2. add a button to add and remove the food fields. Note the button takes an onClick and a callback function of append
