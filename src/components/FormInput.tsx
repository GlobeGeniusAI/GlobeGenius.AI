type Props = {
  labelName: string;
  name: string;
};
export const labelClass =
  'mb-1 block font-lato text-[#654A2F] text-[10px] md:text-[20px]';
export const inputClass =
  'border md:border-2 focus:border-2 md:focus:border-3 focus:outline-none border-[#654A2F] rounded md:rounded-md  md:p-2 md:h-8 w-[40%] md:w-[60%] my-[2px] md:my-[10px] ml-2';

export function FormInput({ labelName, name }: Props) {
  return (
    <label className={labelClass}>
      {labelName}
      <input required name={name} type="text" className={inputClass} />
    </label>
  );
}
