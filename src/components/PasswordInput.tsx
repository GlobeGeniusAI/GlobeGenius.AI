import { ReactNode } from 'react';
import { inputClass, labelClass } from './FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

type Props = {
  labelName: string;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  err?: string;
};

export function PasswordInput({ labelName, onInput, icon, err = '' }: Props) {
  return (
    <label className={labelClass}>
      {labelName}
      <input
        required
        name="password"
        type="password"
        onChange={(e) => onInput && onInput(e)}
        className={inputClass}
      />
      {err !== '' && (
        <div className="w-55 md:w-full flex justify-end items-center mb-2 ml-2">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-[#B22222] text-[7px] md:text-[12px]"
          />
          <p className="text-left text-[#B22222] text-[7px] md:text-[12px] px-1 ">
            {err}
          </p>
        </div>
      )}

      {icon}
    </label>
  );
}
