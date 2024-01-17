import React from "react";

type Props = {};

const Bucket = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 9.48977H17.21L12.83 2.92977C12.64 2.64977 12.32 2.50977 12 2.50977C11.68 2.50977 11.36 2.64977 11.17 2.93977L6.79 9.48977H2C1.45 9.48977 1 9.93977 1 10.4898C1 10.5798 1.01 10.6698 1.04 10.7598L3.58 20.0298C3.81 20.8698 4.58 21.4898 5.5 21.4898H18.5C19.42 21.4898 20.19 20.8698 20.43 20.0298L22.97 10.7598L23 10.4898C23 9.93977 22.55 9.48977 22 9.48977ZM12 5.28977L14.8 9.48977H9.2L12 5.28977ZM18.5 19.4898L5.51 19.4998L3.31 11.4898H20.7L18.5 19.4898ZM12 13.4898C10.9 13.4898 10 14.3898 10 15.4898C10 16.5898 10.9 17.4898 12 17.4898C13.1 17.4898 14 16.5898 14 15.4898C14 14.3898 13.1 13.4898 12 13.4898Z"
        fill="black"
      />
    </svg>
  );
};

const Pinecone = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="27"
      viewBox="0 0 33 27"
      fill="black"
    >
      <path
        d="M5.85906 2.5397L1.65393 10.4105C1.12916 11.3956 0.866211 12.4767 0.866211 13.5592C0.866211 14.6419 1.12916 15.7228 1.65393 16.7079L5.85906 24.5789C6.63414 26.0327 8.14992 26.9407 9.79945 26.9407H14.2661V24.711H14.2646C13.4406 24.711 12.6827 24.2577 12.2951 23.5309L8.09156 15.6584C7.74025 15.0022 7.56517 14.2815 7.56517 13.5592C7.56517 12.8369 7.74025 12.1163 8.09156 11.4602L12.2951 3.58775C12.6827 2.86077 13.4406 2.40758 14.2646 2.40758H14.2661V0.177734H9.79945C8.14992 0.177734 6.63414 1.08589 5.85906 2.5397Z"
        fill={color}
      />
      <path
        d="M31.3426 10.4106L27.1376 2.53976C26.3624 1.08579 24.8467 0.177792 23.1972 0.177792H18.7304V2.40747H18.732C19.5561 2.40747 20.314 2.86082 20.7014 3.58764L24.9049 11.4601C25.2564 12.1163 25.4312 12.837 25.4312 13.5593C25.4312 14.2816 25.2564 15.0022 24.9049 15.6585L20.7014 23.5307C20.314 24.2577 19.5561 24.7109 18.732 24.7109H18.7304V26.9408H23.1972C24.8467 26.9408 26.3624 26.0328 27.1376 24.5788L31.3426 16.708C31.8672 15.7229 32.1303 14.6418 32.1303 13.5593C32.1303 12.4767 31.8672 11.3957 31.3426 10.4106Z"
        fill={color}
      />
    </svg>
  );
};
const Search = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Vector = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.99978 2.54145C10.1838 2.54145 11.1526 3.5102 11.1526 4.69423C11.1526 5.87825 10.1838 6.847 8.99978 6.847C7.81575 6.847 6.847 5.87825 6.847 4.69423C6.847 3.5102 7.81575 2.54145 8.99978 2.54145ZM8.99978 12.2289C11.906 12.2289 15.2428 13.6175 15.4581 14.3817V15.4581H2.54145V14.3925C2.75673 13.6175 6.09353 12.2289 8.99978 12.2289ZM8.99978 0.388672C6.62096 0.388672 4.69423 2.31541 4.69423 4.69423C4.69423 7.07305 6.62096 8.99978 8.99978 8.99978C11.3786 8.99978 13.3053 7.07305 13.3053 4.69423C13.3053 2.31541 11.3786 0.388672 8.99978 0.388672ZM8.99978 10.0762C6.12582 10.0762 0.388672 11.5185 0.388672 14.3817V17.6109H17.6109V14.3817C17.6109 11.5185 11.8737 10.0762 8.99978 10.0762Z"
        fill="black"
      />
    </svg>
  );
};

export { Bucket, Pinecone, Search, Vector };
