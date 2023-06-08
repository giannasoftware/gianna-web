import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { watchEffect, computed , reactive} from "vue";

export function formValidator() {

  const formData = reactive({
    fname: '',
    lname: '',
    userEmail: '',
    password: '',
})

  // rules
  const rules = computed(() => {
    return {
      fname: {
        required: helpers.withMessage("Your first name is required", required),
      },
      lname: {
        required: helpers.withMessage("Your last name is required", required),
      },
      userEmail: {
        required: helpers.withMessage("Your email is required", required),
        email: helpers.withMessage(
          "Invalid emaill address, it must include charater @",
          email
        ),
      },
      password: {
        required: helpers.withMessage(
          "Your password cannot be empty",
          required
        ),
        minLength: helpers.withMessage(
          ({ $pending, $invalid, $params, $model }) =>
            `Password must be at least ${$params.min} character and must include numbers, character and symbols e.g @,!,<, etc`,
          minLength(8)
        ),
      },
    };
  });

  // set rules
  const v$ = useVuelidate(rules, formData, { $lazy: true });

  // result
  let result = null;

  const checkErrorStatus = watchEffect(async () => {
    result = await v$.value.$touch();
  });

  return { formData, result, v$ };
}
