import textField from "./input/TextField.svelte";
import emailField from "./input/EmailField.svelte";
import textareaField from "./input/TextareaField.svelte";
import dropdownField from "./select/DropdownField.svelte";

export default {
    input: {
        text: textField,
        email: emailField,
        textarea: textareaField
    },
    select: {
        dropdown: dropdownField
    }
}