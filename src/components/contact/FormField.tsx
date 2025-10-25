import type { FunctionComponent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FormFieldProps } from "@/lib/formFields";

const FormField: FunctionComponent<FormFieldProps> = ({
  id,
  label,
  register,
  errors,
  name,
  placeholder,
  type = "text",
  required,
  textarea,
}) => {
  const error = errors[name];
  const InputComponent = textarea ? Textarea : Input;

  return (
    <div>
      <label
        htmlFor={id}
        className="font-body text-sm font-medium text-foreground mb-2 block"
      >
        {label} {required && "*"}
      </label>
      <InputComponent
        id={id}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full ${textarea ? "resize-none" : ""} ${
          error ? "border-destructive" : ""
        }`}
        {...(textarea && { rows: 5 })}
      />
      {error && (
        <p className="text-sm text-destructive mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormField;
