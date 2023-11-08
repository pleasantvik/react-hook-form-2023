# RHF Devtool

```
    npm i -D @hookform/devtools
```

# Usage

- import {DevTool} from '@hookform/devtools
- Call the DevTool component before the closing tag of the component that holds the form
- The DeTool takes a prop of control and its value is the control from the useForm component

- Note: RHF does not cause the component to rerender at every key stroke
