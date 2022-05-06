import { IProps } from './model';
import { DEFAULT_PROPS } from './initialize';
import renderView from './view';

const SubmitButton = (props: IProps) => renderView({ props });
SubmitButton.defaultProps = DEFAULT_PROPS;

export default SubmitButton;
