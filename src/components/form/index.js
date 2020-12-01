import inputField from "./InputField.svelte";
import emailField from "./EmailField.svelte";
import textareaField from "./TextareaField.svelte";
import selectDropdownField from "./SelectDropdownField.svelte";

export default {
    input: {
        text: inputField,
        email: emailField,
        textarea: textareaField,
    },
    select: {
        dropdown: selectDropdownField
    }
}