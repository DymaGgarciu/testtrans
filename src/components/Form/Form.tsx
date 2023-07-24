"use client";
// @ts-ignore
import * as yup from "@node_modules/yup";
import { useForm } from "@node_modules/react-hook-form";
import { yupResolver } from "@node_modules/@hookform/resolvers/yup";
import React from "react";
import Title from "@src/components/Title/Title";
import security from "../../../public/assets/icons/security.svg";
import styles from "./Form.module.scss";
import {
  checkInsurance,
  formFieldsInsurance,
} from "@src/components/Form/config";
import RadioForm from "@src/components/Form/ui/RadioForm/RadioForm";
import MyDropzone from "@src/components/DropZone/MyDropzone";
import Image from "@node_modules/next/image";

const ModalForm = () => {
  const callSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    insuranceNumber: yup.number().required(),
    phoneNumber: yup.number().required(),
    problemDate: yup.number().required(),
    location: yup.number().required(),
    description: yup.string(),
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
  };

  return (
    <form
      className={styles.Form}
      onSubmit={handleSubmit(onSubmitHandler)}
      noValidate
    >
      <Title classNames={styles.center} type="black" text="Сообщить о случае" />
      <div className={styles.content}>
        <RadioForm data={checkInsurance} />
        <Title
          classNames={styles.sectionTitle}
          type="typography"
          text="Данные заявителя"
        />
        <div className={styles.inputs}>
          {formFieldsInsurance.map((field) => {
            const fieldName = field.name;
            return (
              <>
                <input
                  className={styles.formInput}
                  {...register(fieldName as any)}
                  placeholder={field.placeholder}
                  type={field.type}
                  required
                />
                <p
                  style={{
                    opacity: `${errors[fieldName as keyof object] ? 1 : 0}`,
                  }}
                  className={styles.error}
                >
                  {field.errorMessage}
                </p>
              </>
            );
          })}

          <Title
            classNames={styles.sectionTitle}
            type="typography"
            text="Детали проишествия"
          />

          <input
            className={styles.formInput}
            {...register("problemDate")}
            placeholder="ДД/ММ/ГГГГ"
            type="number"
            required
          />
          <p
            style={{ opacity: `${errors.problemDate?.message ? 1 : 0}` }}
            className={styles.error}
          >
            Date is required
          </p>

          <input
            className={styles.formInput}
            {...register("problemDate")}
            placeholder="Место происшествия"
            type="text"
            required
          />
          <p
            style={{ opacity: `${errors.location?.message ? 1 : 0}` }}
            className={styles.error}
          >
            Location is required
          </p>

          <textarea
            className={styles.textArea}
            {...register("problemDate")}
            placeholder="Описание случая"
            required
          />

          <MyDropzone />
          <div className={styles.submitBox}>
            <div className={styles.infoWithIcon}>
              <Image src={security} alt="security" />
              <p>Мы гарантируем безопасность и сохранность ваших данных</p>
            </div>

            <button type="submit">Отправить</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ModalForm;
