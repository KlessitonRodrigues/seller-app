import { LabelError, Input, Label } from "./style";

export type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  type?: string;
  readOnly?: boolean;
  withDecimals?: boolean;
  icon?: React.ReactNode;
  onChangeValue?: (value: string) => void;
};

const TextInput = (props: IInputField) => {
  const { name, label, icon, onChangeValue } = props;

  return (
    <Label>
      {label}
      <div className="flex">
        {icon && <span className="mt-[8px] -mr-[28px] z-10">{icon}</span>}
        <Input
          className={`${icon && "pl-10"}`}
          type={props.type || "text"}
          id={name}
          name={name}
          placeholder={props.placeholder}
          autoComplete={name}
          value={props.value}
          readOnly={props.readOnly}
          data-error={!!props.error}
          data-type={props.type}
          onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
          step={props.withDecimals ? ".1" : "1"}
          {...props.input}
        />
      </div>
      <LabelError>{props.error}</LabelError>
    </Label>
  );
};

export default TextInput;
