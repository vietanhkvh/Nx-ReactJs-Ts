import * as React from 'react';

export default ({ style, innerStyle }) => (
  <svg style={innerStyle} viewBox="0 0 25 25">
    <g fill={style.color} fillRule="evenodd">
      <path
        fill={style.color}
        d="M18.4543457,25 L12.9684082,25 L13.4191895,19.5680664 L10.4281738,19.3198242 L9.95678711,25 L4.47084961,25 L4.97973633,18.867627 L0,18.4543457 L0,12.9684082 L5.43193359,13.4191895 L5.68017578,10.4281738 L0,9.95678711 L0,4.47084961 L6.13237305,4.97973633 L6.5456543,0 L12.0315918,0 L11.5808594,5.43198242 L14.571875,5.68017578 L15.0432129,0 L20.5291504,0 L20.0202637,6.13237305 L25,6.54570313 L25,12.0316895 L19.5680664,11.5808594 L19.3198242,14.571875 L25,15.0432129 L25,20.529248 L18.867627,20.0202637 L18.4543457,25 Z M14.5099638,23.2675781 L16.9944157,23.2675781 L17.4070617,18.295244 L23.2675781,18.7816431 L23.2675781,16.2971912 L17.6117886,15.827801 L18.0904694,10.0604289 L23.2675781,10.4900838 L23.2675781,8.00563195 L18.295244,7.59293831 L18.7815954,1.73242188 L16.2971435,1.73242188 L15.8277534,7.3882114 L10.0603812,6.90957825 L10.4900362,1.73242188 L8.0055843,1.73242188 L7.59293831,6.70475605 L1.73242188,6.21840456 L1.73242188,8.70285645 L7.3882114,9.17224663 L6.90953061,14.9396188 L1.73242188,14.5099638 L1.73242188,16.9944157 L6.70475605,17.4070617 L6.21840456,23.2675781 L8.70285645,23.2675781 L9.17224663,17.6117886 L14.9396188,18.0904694 L14.5099638,23.2675781 Z M15.2100586,15.7006348 L9.29936523,15.2100586 L9.78994141,9.29941406 L15.7006348,9.78994141 L15.2100586,15.7006348 Z M10.8803711,13.8713867 L13.8713867,14.1196289 L14.1196289,11.1286133 L11.1286133,10.8804199 L10.8803711,13.8713867 Z"
      />
    </g>
  </svg>
);