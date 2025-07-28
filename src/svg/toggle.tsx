export const UpperArrow = ({ setShow, showValue }: any) =>(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    onClick={() => {
      setShow(!showValue);
    }}
    className="injected-svg transform transition-transform duration-300 hover:scale-110 active:scale-95"
    data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-sharp.svg?v=2.0"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    color="#000000"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="#000000"
      strokeWidth="1.5"
      strokeMiterlimit="16"
    ></path>
  </svg>
)



export const DownArrow = ({ setShow, showValue }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    onClick={() => {
      setShow(!showValue);
    }}
    className="injected-svg transform transition-transform duration-300 hover:scale-110 active:scale-95"
    data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-standard.svg?v=2.0"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    color="#000000"
  >
    <path
      d="M5.99977 9.00005L11.9998 15L17.9998 9"
      stroke="#000000"
      strokeWidth="1.5"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)
