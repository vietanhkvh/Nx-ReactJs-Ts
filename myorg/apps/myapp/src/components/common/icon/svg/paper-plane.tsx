import * as React from 'react';

export default ({ style, innerStyle }) => (
  <svg style={innerStyle} viewBox="0 0 30 30">
    <g fill={style.color}>
      <path d="M29.7043945,0.0769921875 C29.5216406,-0.0273046875 29.296875,-0.025546875 29.1158203,0.0815625 L18.3782813,6.43101563 C18.0997266,6.59572266 18.0074414,6.95501953 18.1721484,7.23357422 C18.3367969,7.51207031 18.6960937,7.60435547 18.974707,7.43970703 L26.6787305,2.88410156 L12.3287695,17.7735352 L5.19158203,15.5899805 L14.5059375,10.082168 C14.7844922,9.91740234 14.8767773,9.55810547 14.7120703,9.27955078 C14.5474219,9.00105469 14.1880664,8.90865234 13.9095117,9.07341797 L3.45175781,15.2573438 C3.25195312,15.3755273 3.14068359,15.6004688 3.16816406,15.8310352 C3.19564453,16.0616016 3.35660156,16.2541406 3.57855469,16.3220508 L12.1021289,18.929707 L15.8625,25.7742188 C15.8664258,25.7813086 15.8704688,25.7872852 15.8746289,25.7926172 C15.9373828,25.8972656 16.0314258,25.9827539 16.1487305,26.0320898 C16.2221484,26.0629688 16.2993164,26.0780273 16.375957,26.0780273 C16.5261328,26.0780273 16.6739648,26.0202539 16.7855859,25.9110938 L21.1094531,21.6853125 L29.2426172,24.1735547 C29.2988672,24.1907227 29.356582,24.1992188 29.4140039,24.1992188 C29.5379883,24.1992188 29.6604492,24.1598438 29.7625195,24.0843164 C29.911875,23.9738086 30,23.7990234 30,23.6132813 L30,0.5859375 C30,0.375527344 29.8871484,0.181230469 29.7043945,0.0769921875 Z M15.8944336,19.2908203 C15.826582,19.3888477 15.7901953,19.5052148 15.7901953,19.6244531 L15.7901953,23.2086914 L13.2224414,18.5349609 L24.585,6.7453125 L15.8944336,19.2908203 Z M16.9620703,24.1001367 L16.9620703,20.4165234 L19.8325781,21.2947266 L16.9620703,24.1001367 Z M28.828125,22.8212695 L17.3145117,19.2988477 L28.828125,2.67796875 L28.828125,22.8212695 Z" />
      <path d="M9.63416016,20.3658398 C9.40529297,20.1370312 9.03439453,20.1370312 8.80546875,20.3658398 L3.335625,25.8356836 C3.10681641,26.0644922 3.10681641,26.4355078 3.335625,26.664375 C3.45011719,26.77875 3.60005859,26.8359375 3.75,26.8359375 C3.89994141,26.8359375 4.04988281,26.77875 4.16431641,26.6643164 L9.63416016,21.1944727 C9.86296875,20.9657227 9.86296875,20.594707 9.63416016,20.3658398 Z" />
      <path d="M2.34791016,27.6520312 C2.11904297,27.4233398 1.74814453,27.4233398 1.51927734,27.6520898 L0.171621094,28.9997461 C-0.0571875,29.2285547 -0.0571875,29.5995703 0.171621094,29.8284375 C0.286054687,29.9428125 0.435996094,30 0.5859375,30 C0.735878906,30 0.885820312,29.9427539 1.00025391,29.8283789 L2.34791016,28.4807227 C2.57671875,28.2519141 2.57671875,27.8808984 2.34791016,27.6520312 Z" />
      <path d="M8.35833984,28.9652344 C8.24941406,28.85625 8.09824219,28.7935547 7.94414062,28.7935547 C7.78939453,28.7935547 7.63886719,28.85625 7.52988281,28.9652344 C7.42089844,29.0742188 7.35820312,29.2248047 7.35820312,29.3794922 C7.35820312,29.5335937 7.42083984,29.6847656 7.52988281,29.79375 C7.63886719,29.9027344 7.79003906,29.9654297 7.94414062,29.9654297 C8.09824219,29.9654297 8.24941406,29.9027344 8.35833984,29.79375 C8.46732422,29.6847656 8.53007812,29.5335937 8.53007812,29.3794922 C8.53007812,29.2248047 8.46738281,29.0742188 8.35833984,28.9652344 Z" />
      <path d="M12.717832,24.6055664 C12.4891406,24.3767578 12.1182422,24.3767578 11.8891992,24.6055664 L8.99197266,27.5027344 C8.76316406,27.731543 8.76316406,28.1025586 8.99197266,28.3313672 C9.10640625,28.4458008 9.25634766,28.5029883 9.40628906,28.5029883 C9.55623047,28.5029883 9.70617188,28.4457422 9.82060547,28.3313672 L12.717832,25.4341992 C12.9466406,25.2053906 12.9466406,24.834375 12.717832,24.6055664 Z" />
      <path d="M22.7170312,24.3831445 C22.4881641,24.1543945 22.1172656,24.1543945 21.8883984,24.3831445 L18.9833203,27.2882227 C18.7545117,27.5170312 18.7545117,27.8880469 18.9833203,28.1169141 C19.0977539,28.2312891 19.2476953,28.2885352 19.3976367,28.2885352 C19.5475781,28.2885352 19.6975195,28.2312891 19.8119531,28.1169141 L22.7170313,25.2118359 C22.9458398,24.9830273 22.9458398,24.6120117 22.7170312,24.3831445 Z" />
      <path d="M16.6113281,7.98691406 C16.5023437,7.87792969 16.3511719,7.81523437 16.1970703,7.81523437 C16.0429688,7.81523437 15.8917969,7.87792969 15.7828125,7.98691406 C15.6738867,8.09589844 15.6111328,8.24707031 15.6111328,8.40175781 C15.6111328,8.55585938 15.6738281,8.70644531 15.7828125,8.81542969 C15.8917969,8.925 16.0429688,8.98710938 16.1970703,8.98710938 C16.3511719,8.98710938 16.5023437,8.925 16.6113281,8.81542969 C16.7202539,8.70644531 16.7830078,8.55585938 16.7830078,8.40175781 C16.7830078,8.24707031 16.7203125,8.09589844 16.6113281,7.98691406 Z" />
    </g>
  </svg>
);