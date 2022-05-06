import SubmitButton from '../components/common/submit-button/index';
import './submit-button.stories.modules.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Component/SubmitButton',
  component: SubmitButton,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof SubmitButton>;

const sizeList: string[] = ['normal', 'small'];
const colorList: string[] = [
  'pink',
  'green',
  'yellow',
  'white',
  'black',
  'grey',
  'lightGrey',
];
const borderList: string[] = [
  'borderWhite',
  'borderBlack',
  'borderGrey',
  'borderPink',
  'borderRed',
  'borderGreen',
  'facebook',
  'momo',
  'borderMomo',
  'borderOnepay',
];
const titleStyle = ['bold', 'small'];
const iconPosition = ['left', 'right'];

const tableHead = ['Size', 'Default', 'Loading' ,'Disable'];

const Template: ComponentStory<typeof SubmitButton> = ({ ...args }) => (
  <SubmitButton {...args} />
);

export const Default = Template.bind(() => {});
Default.args = {
  title: 'Submit',
  type: 'submit',
  size: 'normal',
  color: 'pink',
  icon: '',
  svgIcon: 'add',
  svgIconClass: '',
  iconPosition: 'left',
  align: 'center',
  className: '',
  testId: '',
  loading: false,
  disabled: false,
  link: '',
  linkTarget: '',
  style: {},
  styleIcon: {},
  titleStyle: {},
  titleClass: '',
};

export const primary = () => {
  return (
    <table>
      <tr>
        {tableHead?.map((td, i) => (
          <th key={i} colSpan={td==='Title-style'? 2:1}>{td}</th>
        ))}
      </tr>

      {sizeList?.map((s, i) => (
        <tr>
          <td key={i}>{s}</td>
          <td className="boxes">
            {colorList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }} className="box">
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon=""
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading={false}
                  disabled={false}
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>
          
          <td
            style={{
              width: 150,
              padding: 25,
            }}
          >
            {colorList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }}>
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon=""
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>

          <td style={{
              width: 150,
              padding: 25,
            }}>
            <div key={i} style={{ width: 100, height: 50 }}>
              <SubmitButton
                title="Submit"
                type="submit"
                size={s}
                icon=""
                svgIcon=""
                svgIconClass=""
                iconPosition="left"
                align="center"
                className=""
                testId=""
                disabled
                link=""
                linkTarget=""
                style={{}}
                styleIcon={{}}
                titleStyle={{}}
                titleClass=""
              />
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export const icon = () => {
  return (
    <table>
      <tr>
        {tableHead?.map((td, i) => (
          <th key={i}>{td}</th>
        ))}
      </tr>

      {sizeList?.map((s, i) => (
        <tr>
          <td key={i}>{s}</td>
          <td className="boxes">
            {colorList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }} className="box">
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon="add"
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading={false}
                  disabled={false}
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>
          
          <td
            style={{
              width: 150,
              padding: 25,
            }}
          >
            {colorList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }}>
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon="add"
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>

          <td style={{
              width: 150,
              padding: 25,
            }}>
            <div key={i} style={{ width: 100, height: 50 }}>
              <SubmitButton
                title="Submit"
                type="submit"
                size={s}
                icon=""
                svgIcon="add"
                svgIconClass=""
                iconPosition="right"
                align="center"
                className=""
                testId=""
                disabled
                link=""
                linkTarget=""
                style={{}}
                styleIcon={{}}
                titleStyle={{}}
                titleClass=""
              />
            </div>
          </td>
        </tr>
      ))}
    </table>
  );

};
export const border = () => {
  return (
    <table>
      <tr>
        {tableHead?.map((td, i) => (
          <th key={i}>{td}</th>
        ))}
      </tr>

      {sizeList?.map((s, i) => (
        <tr>
          <td key={i}>{s}</td>
          <td className="boxes">
            {borderList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }} className="box">
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon="add"
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading={false}
                  disabled={false}
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>
          
          <td
            style={{
              width: 150,
              padding: 25,
            }}
          >
            {borderList?.map((c, i) => (
              <div key={i} style={{ width: 100, height: 50 }}>
                <SubmitButton
                  title="Submit"
                  type="submit"
                  size={s}
                  color={c}
                  icon=""
                  svgIcon="add"
                  svgIconClass=""
                  iconPosition="left"
                  align="center"
                  className=""
                  testId=""
                  loading
                  link=""
                  linkTarget=""
                  style={{}}
                  styleIcon={{}}
                  titleStyle={{}}
                  titleClass=""
                />
              </div>
            ))}
          </td>

          <td style={{
              width: 150,
              padding: 25,
            }}>
            <div key={i} style={{ width: 100, height: 50 }}>
              <SubmitButton
                title="Submit"
                type="submit"
                size={s}
                icon=""
                svgIcon="add"
                svgIconClass=""
                iconPosition="right"
                align="center"
                className=""
                testId=""
                disabled
                link=""
                linkTarget=""
                style={{}}
                styleIcon={{}}
                titleStyle={{}}
                titleClass=""
              />
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
};
