import axios from 'axios';
import e from 'express';
import { useState } from 'react';
import styles from './my-form.module.scss';

/* eslint-disable-next-line */
interface IFormD {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'orther' | '';
  dateTime: string;
}
export interface MyFormProps {}

export function MyForm(props: MyFormProps) {
  const genderL = ['male', 'female', 'orther'];
  const [formData, setFormDate] = useState<IFormD>({
    firstName: '',
    lastName: '',
    gender: '',
    dateTime: '',
  });
  const handleChange = (e) => {
    const val = e.target.value;
    setFormDate({ ...formData, [e.target.name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formData;
    console.log('data', data);
    try {
      const respond = fetch(
        'https://sheet.best/api/sheets/2ef2ba79-06dc-4ae0-a20f-dcafd6353ad6',
        {
          body: JSON.stringify([
            [data?.firstName, data?.lastName, data?.gender],
          ]),
        }
      ).then((res) => {
        console.log('res', res);
        setFormDate({
          firstName: '',
          lastName: '',
          gender: '',
          dateTime: '',
        });
      });
    } catch (error) {}
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const data = formData;
    console.log('data', data);
    try {
      const respond = await axios
        .post(
          'https://v1.nocodeapi.com/host/google_sheets/pefgXcklryurLqTm?tabId=sheet1',
          JSON.stringify(data)
        )
        .then((res) => {
          console.log('res', res);
          setFormDate({
            firstName: '',
            lastName: '',
            gender: '',
            dateTime: '',
          });
        });
    } catch (error) {}
  };
  return (
    <div className={styles['container']}>
      <form className={styles['form']} onSubmit={handleSubmit2}>
        <div className={styles['form-item']}>
          <label className={styles['item']}>
            <text className={styles['txt']}>First name:</text>
            <input type="text" name="firstName" onChange={handleChange} />
          </label>
        </div>

        <div className={styles['form-item']}>
          <label className={styles['item']}>
            <text className={styles['txt']}> Last name:</text>
            <input type="text" name="lastName" onChange={handleChange} />
          </label>
        </div>

        <div className={styles['form-item']}>
          <label className={styles['item']}>
            <text className={styles['txt']}>Gender:</text>
            <select name="gender" onChange={handleChange}>
              {genderL.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles['form-item']}>
          <input type={'submit'} title="Submit" />
        </div>
      </form>
    </div>
  );
}

export default MyForm;
