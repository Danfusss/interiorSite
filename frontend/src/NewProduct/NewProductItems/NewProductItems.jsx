import React from "react";

import "./NewProductItems.css";

export default function NewProductItems({ item }) {
  return (
    <div className="itemBox">
      <div>
        <div className="itemImg"></div>
        <div className="iconBox">
          <svg className="iconSvg">
            <path
              d="M7.15834 0.912601C7.15834 1.0872 7.03134 1.23002 6.85674 1.24597C3.36487 1.3888 0.634857 4.24581 0.634857 7.73768C0.634857 9.76931 1.57129 11.6581 3.17446 12.8961V10.4359C3.17446 10.2613 3.31728 10.1185 3.49187 10.1185C3.66647 10.1185 3.80929 10.2613 3.80929 10.4359V13.6103C3.80929 13.7849 3.66646 13.9278 3.49187 13.9278H0.317443C0.142844 13.9278 2.83275e-05 13.7849 2.83275e-05 13.6103C2.83275e-05 13.4357 0.142852 13.2929 0.317443 13.2929H2.65065C0.984045 11.9437 0 9.89629 0 7.73768C0 3.89662 2.99983 0.769808 6.82502 0.595215C6.99962 0.595215 7.14244 0.738039 7.15828 0.912629L7.15834 0.912601ZM11.6343 2.1824H13.9675C14.1421 2.1824 14.2849 2.03958 14.2849 1.86499C14.2849 1.69039 14.1421 1.54757 13.9675 1.54757H10.7931C10.6185 1.54757 10.4756 1.6904 10.4756 1.86499V5.03941C10.4756 5.21401 10.6185 5.35683 10.7931 5.35683C10.9677 5.35683 11.1105 5.214 11.1105 5.03941V2.5792C12.7135 3.81723 13.6501 5.70602 13.6501 7.73765C13.6501 11.2136 10.9359 14.0706 7.45993 14.2452C7.28534 14.2611 7.14252 14.404 7.15834 14.5786C7.17417 14.7532 7.30116 14.8802 7.47575 14.8802H7.49158C11.3009 14.6897 14.2849 11.5629 14.2849 7.73773C14.2849 5.57912 13.3008 3.53162 11.6342 2.18249L11.6343 2.1824Z"
              fill="white"
            />
          </svg>
          <svg className="iconSvg">
            <path
              d="M8.50018 3.26688C8.91509 2.54969 9.35439 1.98246 9.87945 1.56435C10.589 0.999628 11.4296 0.717285 12.5397 0.717285C13.7709 0.717285 14.886 1.21493 15.693 2.01851C16.5008 2.82194 17 3.93296 17 5.15792C17 8.06687 15.1057 9.50311 12.5901 11.4098C11.4195 12.2971 10.1084 13.2908 8.79802 14.5954C8.63389 14.7579 8.3672 14.7579 8.20306 14.5954C6.89282 13.2909 5.58157 12.2963 4.41171 11.409C1.89449 9.50279 0 8.0659 0 5.15781C0 3.93289 0.499851 2.82184 1.30699 2.0184C2.11399 1.21497 3.22911 0.717321 4.46032 0.717321C5.57036 0.717321 6.41104 0.999674 7.12055 1.56438C7.64565 1.98336 8.0849 2.55045 8.49982 3.26691L8.50018 3.26688ZM10.403 2.21614C9.82564 2.67522 9.35439 3.3858 8.87549 4.33919C8.8359 4.41718 8.77278 4.48324 8.68783 4.52518C8.48172 4.62827 8.22924 4.54439 8.12569 4.33919C7.64683 3.38483 7.17472 2.67522 6.59905 2.21614C6.04535 1.77545 5.36953 1.55508 4.46068 1.55508C3.46181 1.55508 2.55617 1.9589 1.90231 2.6107C1.24762 3.26264 0.842014 4.16328 0.842014 5.15778C0.842014 7.65379 2.59407 8.98159 4.92118 10.7447C6.02786 11.5841 7.25904 12.5176 8.50039 13.7115C9.74174 12.5176 10.973 11.5843 12.0805 10.7455C14.4065 8.9818 16.1586 7.65293 16.1586 5.15788C16.1586 4.16342 15.7538 3.26264 15.0983 2.61081C14.4444 1.95901 13.5388 1.55519 12.5399 1.55519C11.6299 1.55519 10.9549 1.77555 10.4029 2.21625L10.403 2.21614Z"
              fill="white"
            />
          </svg>
          <svg className="iconSvg">
            <path
              d="M1.35099 0.751121C1.14382 0.751121 0.975433 0.582753 0.975433 0.37556C0.975433 0.168383 1.1438 0 1.35099 0H3.77469C3.94157 0 4.08301 0.10844 4.13164 0.259231L5.25244 3.18376H16.6245C16.8316 3.18376 17 3.35213 17 3.55932C17 3.60453 16.9921 3.64813 16.9774 3.68797L14.9946 10.2915C14.9459 10.4541 14.7967 10.5596 14.6352 10.5596V10.56H7.44165C7.29737 10.56 7.16621 10.6189 7.071 10.7141C6.97579 10.8093 6.9169 10.9405 6.9169 11.0848V11.095C6.9169 11.2399 6.9758 11.3714 7.07054 11.4661L7.07157 11.4651C7.16677 11.5603 7.29793 11.6192 7.44222 11.6192H13.9634C14.171 11.6192 14.3389 11.7876 14.3389 11.9948C14.3389 12.2019 14.1706 12.3703 13.9634 12.3703H7.44222C7.09077 12.3703 6.77161 12.227 6.54035 11.9963L6.54137 11.9952L6.54035 11.9942C6.30965 11.7635 6.16628 11.4448 6.16628 11.0944V11.0841C6.16628 10.7326 6.30964 10.4135 6.54035 10.1828C6.77104 9.95208 7.09019 9.8087 7.44222 9.8087H14.357L16.1209 3.93451H5.54142L7.35055 8.6559C7.42418 8.84938 7.32704 9.06638 7.1331 9.13999C6.93962 9.21361 6.72262 9.11647 6.64901 8.92254L4.65187 3.71022C4.64696 3.69892 4.64251 3.68762 4.63862 3.67586L3.51782 0.751035H1.35233L1.35099 0.751121ZM12.9571 13.2154C13.4166 13.2154 13.7897 13.588 13.7897 14.0476C13.7897 14.5076 13.4171 14.8802 12.9571 14.8802C12.4975 14.8802 12.1249 14.5076 12.1249 14.0476C12.1249 13.588 12.4975 13.2154 12.9571 13.2154ZM7.90869 13.2154C8.36826 13.2154 8.74084 13.588 8.74084 14.0476C8.74084 14.5076 8.36826 14.8802 7.90869 14.8802C7.44868 14.8802 7.0761 14.5076 7.0761 14.0476C7.0761 13.588 7.44868 13.2154 7.90869 13.2154Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="itemName">{item.name}</p>
        <div>
          <p className="itemCost">{`$${item.cost}.00 `}</p>
        </div>
      </div>
    </div>
  );
}
