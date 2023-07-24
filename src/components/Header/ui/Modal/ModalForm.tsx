import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@node_modules/@hookform/resolvers/yup";
import styles from "./Modal.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";

interface ModalForm {
  onChange: () => void;
}

const ModalForm = (props: ModalForm) => {
  const { onChange } = props;

  const callSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phoneNumber: yup.number().required("Phone Number is required"),
    call: yup.boolean().required("Checkbox is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(callSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
    onChange();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        className={styles.modalInput}
        {...register("name")}
        placeholder="Имя"
        type="name"
        required
      />
      {/*{errors.name?.message && <Paragraph text="write name mudila" />}*/}
      <br />

      <input
        className={styles.modalInput}
        {...register("phoneNumber")}
        placeholder="Номер"
        type="number"
        inputMode="numeric"
        pattern="[0-9]"
        required
      />
      {/*{errors.phoneNumber?.message && (*/}
      {/*  <Paragraph text="Phone Number name required" />*/}
      {/*)}*/}
      <br />

      <div className={styles.label}>
        <input
          {...register("call")}
          placeholder="call"
          required
          className={styles.checkInput}
          type="checkbox"
        />
        <Paragraph
          type="modal"
          text="Нажимая кнопку “Заказать звонок”, я даю согласие на обработку моих данных"
        />
      </div>
      <button className={styles.btn} type="submit">
        Заказать звонок
      </button>
      {/*{errors.call?.message && <Paragraph text="select checkbox required" />}*/}
    </form>
  );
};
export default ModalForm;
