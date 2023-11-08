# Managing Form State

- Every form has moving pieces that keeps canging as user interacts with it until they eventually submit
-       - 1. Current value of every field in the form
        - 2. Whether a field has being touched
        - 3. WHether a field has changed
        - 4. Whether the form is invalid
        - 5. Whether a field contains error
- All this can be represented as form state

- React-hook-form provide a method called register that can be access on the form object
- The method helps us register form controll with RHF.

# usage

- Call the method and pass in the value of the name attribute given to the field we want to control.

- The register method returns 4 property which can be used in tracking the form state. This are (name,ref,onCHnage, onBlur)

```
<input type="text" name="username" />

const form = useForm()
const {register} = form
const {name, ref, onChange, onBlur} = register("username")
```

# Long version

```
<input
name={name}
onChange={onChange}
ref={ref}
onBlur={onBlur}
>
```

# With Abstraction

```
<input type='text' id='username' {...register('username')}>
```
