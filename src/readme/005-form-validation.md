# Form Validation

- RHF supports HTML validation rules which include
-       - required
        - minLength & maxLength
        - pattern

# noValidate

- This is added to the form element. It prevents browser validation and allows RHF to handle validation

- In the spreadout ...register pass a second object argument to do other validation

```
<input id="username" {...register("username", {
    required:"Username is required"
})}>
```

# Custom validation

- we use the validate key which takes a function has its value

```
validate: (value) => value!=='test@test.com' || 'enter diffrent account'

or

validate :{
    notAllow: (value) => value!=='test@test.com' || 'enter diffrent account',
    blackListed: (value) => value !=='test@test.com' || 'enter diffrent account',

}
```
