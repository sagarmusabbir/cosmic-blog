import * as React from 'react';
import { IconSvgProps } from '../../types';
import { SVGProps } from 'react';

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const NotificationIcon: React.FC<IconSvgProps> = ({
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MailIcon: React.FC<IconSvgProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

export const LockIcon: React.FC<IconSvgProps> = ({
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
      fill="currentColor"
    />
    <path
      d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
      fill="currentColor"
    />
  </svg>
);

// export const DiscordIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       height={size || height}
//       viewBox="0 0 24 24"
//       width={size || width}
//       {...props}
//     >
//       <path
//         d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        fillOpacity="0"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <path d="M0 256V0h256v256z"></path>
      </g>
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <path
          fill="currentColor"
          d="M40.461 12.184a5.724 5.724 0 00-2.688-2.216c-2.327-.934-4.335-1.559-6.137-1.913-1.281-.25-2.559.379-3.159 1.565l-.134.258c-1.314-.144-2.718-.191-4.321-.152-1.64-.039-3.047.009-4.366.152l-.128-.249c-.605-1.195-1.882-1.824-3.163-1.574-1.804.354-3.812.979-6.143 1.913a5.705 5.705 0 00-2.645 2.158c-3.939 5.946-5.769 12.305-5.56 19.359-.042 1.607.02 3.249.198 4.932a.997.997 0 00.46.741c3.394 2.143 6.462 3.672 9.372 4.674 1.257.442 2.651-.045 3.393-1.181l1.52-2.327a28.56 28.56 0 007.034 1.012c2.376-.049 4.72-.39 6.978-1.015l1.592 2.372a2.947 2.947 0 002.438 1.305c.31 0 .622-.05.926-.153 2.957-1.02 5.943-2.509 9.397-4.687a1 1 0 00.461-.741 37.62 37.62 0 00.198-4.929c.207-7.033-1.609-13.375-5.523-19.304z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="#fff"
          d="M33.397 38.104c.49.749 1.399 1.074 2.224.784 3.178-1.094 6.212-2.708 9.17-4.577.775-7.339-.525-14.574-5.202-21.634a4.72 4.72 0 00-2.184-1.784c-2.044-.819-4.048-1.484-5.962-1.859-.835-.165-1.679.255-2.079 1.044l-.45.874c-1.274-.175-2.793-.28-4.912-.23-2.124-.05-3.643.055-4.912.23l-.455-.874c-.4-.789-1.244-1.209-2.079-1.044-1.909.375-3.913 1.039-5.957 1.859a4.74 4.74 0 00-2.189 1.779v.005c-4.677 7.06-5.977 14.294-5.202 21.634 2.963 1.869 6.002 3.487 9.19 4.587.82.28 1.714-.03 2.209-.764l1.999-2.978a27.13 27.13 0 007.421 1.179 27.281 27.281 0 007.446-1.179z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M12.999 39.998c-.309 0-.62-.05-.922-.153-2.961-1.021-5.947-2.51-9.401-4.688a1 1 0 01-.461-.741c-.867-8.218.874-15.491 5.325-22.233.012-.021.024-.043.038-.063a5.727 5.727 0 012.648-2.152c2.328-.934 4.336-1.559 6.138-1.913 1.281-.251 2.558.379 3.163 1.574l.13.249c1.317-.144 2.729-.19 4.369-.152 1.601-.039 3 .01 4.318.152l.13-.254c.604-1.189 1.88-1.82 3.161-1.569 1.804.354 3.812.979 6.142 1.913a5.691 5.691 0 012.646 2.161c4.477 6.756 6.231 14.048 5.361 22.288a.997.997 0 01-.46.741c-3.394 2.143-6.462 3.672-9.379 4.676-1.249.44-2.645-.046-3.386-1.183l-1.52-2.327c-2.251.622-4.6.962-6.993 1.012a28.417 28.417 0 01-7.019-1.015l-1.592 2.371a2.942 2.942 0 01-2.436 1.306zm-8.844-6.273c3.146 1.952 5.88 3.301 8.57 4.229a.915.915 0 001.052-.378l1.999-2.977a.993.993 0 011.122-.398 25.948 25.948 0 007.149 1.135 26.32 26.32 0 007.133-1.135c.424-.129.887.036 1.13.409l1.924 2.947.001.001c.236.362.669.523 1.054.387 2.658-.915 5.459-2.296 8.556-4.22.701-7.562-.966-14.271-5.09-20.494a3.702 3.702 0 00-1.723-1.408c-2.21-.886-4.102-1.477-5.781-1.806-.396-.077-.798.129-.995.516l-.451.879a.987.987 0 01-1.025.533c-1.416-.192-2.925-.265-4.752-.22-1.88-.046-3.391.026-4.801.22a.99.99 0 01-1.024-.529l-.454-.874c-.2-.396-.597-.602-.999-.524-1.678.329-3.567.92-5.777 1.806a3.741 3.741 0 00-1.693 1.354 1.6 1.6 0 01-.033.055c-4.126 6.22-5.793 12.929-5.092 20.492z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M34.73 33.248a.998.998 0 00-1.364-.372c-5.746 3.28-13.028 3.278-18.772 0a1 1 0 00-.992 1.736 20.989 20.989 0 0010.381 2.771c3.614 0 7.202-.958 10.376-2.771a.998.998 0 00.371-1.364zM17.5 20c-1.921 0-3.5 1.808-3.5 4s1.579 4 3.5 4 3.5-1.808 3.5-4-1.579-4-3.5-4zM27 24c0 2.192 1.579 4 3.5 4s3.5-1.808 3.5-4-1.579-4-3.5-4-3.5 1.808-3.5 4z"
          transform="scale(5.33333)"
        ></path>
      </g>
    </svg>
  );
};

export const GmailIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.33333)"
      >
        <path
          fill="currentColor"
          d="M39.285 11a4.727 4.727 0 00-2.913 1.008L24 21.729l-12.372-9.721A4.73 4.73 0 008.715 11 4.72 4.72 0 004 15.715V38c0 1.654 1.346 3 3 3h7a1 1 0 001-1V27.113l8.377 6.669a1 1 0 001.243.003L33 27.169V40a1 1 0 001 1h7c1.654 0 3-1.346 3-3V15.715A4.72 4.72 0 0039.285 11z"
        ></path>
        <path
          fill="#fff"
          d="M36.99 10.794L24 21 11.01 10.794A3.715 3.715 0 005 13.715V36a2 2 0 002 2h7V23.039L24 31l10-7.895V38h7a2 2 0 002-2V13.715a3.714 3.714 0 00-6.01-2.921z"
        ></path>
        <path
          fill="currentColor"
          d="M41 39h-7a1 1 0 01-1-1V25.169l-8.38 6.616a1 1 0 01-1.243-.003L15 25.113V38a1 1 0 01-1 1H7c-1.654 0-3-1.346-3-3V13.715A4.72 4.72 0 018.715 9c1.053 0 2.087.358 2.914 1.008L24 19.729l12.372-9.721A4.723 4.723 0 0139.285 9 4.72 4.72 0 0144 13.715V36c0 1.654-1.346 3-3 3zm-6-2h6c.551 0 1-.448 1-1V13.715A2.718 2.718 0 0039.285 11c-.606 0-1.202.206-1.677.58l-12.99 10.206a.999.999 0 01-1.235 0L10.393 11.58A2.718 2.718 0 006 13.715V36c0 .552.449 1 1 1h6V23.039a1 1 0 011.623-.782l9.379 7.467 9.378-7.403a1.002 1.002 0 011.62.784zm1.99-26.206H37z"
        ></path>
        <path
          fill="currentColor"
          d="M24 32a.996.996 0 01-.623-.218l-19-15.125a1 1 0 111.246-1.564l18.379 14.631L42.38 15.215a1 1 0 111.239 1.57l-19 15A.992.992 0 0124 32z"
        ></path>
        <path fill="currentColor" d="M13 13H15V26H13z"></path>
        <path fill="currentColor" d="M33 13H35V26H33z"></path>
      </g>
    </svg>
  );
};

export const FaceookIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <path
          fill="currentColor"
          d="M41 8H7a1 1 0 00-1 1v32c0 1.654 1.346 3 3 3h30c1.654 0 3-1.346 3-3V9a1 1 0 00-1-1z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="#fff"
          d="M39 41H9a2 2 0 01-2-2V7h34v32a2 2 0 01-2 2z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M39 42H9c-1.654 0-3-1.346-3-3V7a1 1 0 011-1h34a1 1 0 011 1v32c0 1.654-1.346 3-3 3zM8 8v31a1 1 0 001 1h30a1 1 0 001-1V8z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M28.573 31.038h4.921l.765-4.993h-5.686V23.31c0-2.078.675-3.913 2.618-3.913h3.122v-4.363c-.549-.072-1.709-.234-3.895-.234-4.579 0-7.26 2.411-7.26 7.917v3.329h-4.696v4.993h4.696v11.728c.935.134 1.87.233 2.842.233.873 0 1.727-.081 2.573-.198z"
          transform="scale(5.33333)"
        ></path>
      </g>
    </svg>
  );
};

// export const FaceookIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 256 256"
//       {...props}
//     >
//       <g
//         fill="none"
//         strokeMiterlimit="10"
//         fontFamily="none"
//         fontSize="none"
//         fontWeight="none"
//         textAnchor="none"
//         style={{ mixBlendMode: "normal" }}
//       >
//         <path
//           fillOpacity={0.0}
//           stroke="currentColor"
//           d="M41 8H7a1 1 0 00-1 1v32c0 1.654 1.346 3 3 3h30c1.654 0 3-1.346 3-3V9a1 1 0 00-1-1z"
//           transform="scale(5.33333)"
//         ></path>
//         <path
//           fillOpacity={0.0}
//           d="M39 41H9a2 2 0 01-2-2V7h34v32a2 2 0 01-2 2z"
//           transform="scale(5.33333)"
//         ></path>
//         <path
//           fill="currentColor"
//           d="M39 42H9c-1.654 0-3-1.346-3-3V7a1 1 0 011-1h34a1 1 0 011 1v32c0 1.654-1.346 3-3 3zM8 8v31a1 1 0 001 1h30a1 1 0 001-1V8z"
//           transform="scale(5.33333)"
//         ></path>
//         <path
//           fill="currentColor"
//           stroke="currentColor"
//           d="M28.573 31.038h4.921l.765-4.993h-5.686V23.31c0-2.078.675-3.913 2.618-3.913h3.122v-4.363c-.549-.072-1.709-.234-3.895-.234-4.579 0-7.26 2.411-7.26 7.917v3.329h-4.696v4.993h4.696v11.728c.935.134 1.87.233 2.842.233.873 0 1.727-.081 2.573-.198z"
//           transform="scale(5.33333)"
//         ></path>
//       </g>
//     </svg>
//   );
// };

// export const LinkedInIcon: React.FC<IconSvgProps> = ({
//   size = 24,
//   width,
//   height,
//   ...props
// }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height={size || height}
//       width={size || width}
//       viewBox="0 0 48 48"
//       {...props}
//     >
//       <path
//         fillOpacity={0.0}
//         stroke="currentColor"
//         d="M41 8H7a1 1 0 00-1 1v32c0 1.654 1.346 3 3 3h30c1.654 0 3-1.346 3-3V9a1 1 0 00-1-1z"
//       ></path>
//       <path
//         fillOpacity={0.0}
//         d="M39 41H9a2 2 0 01-2-2V7h34v32a2 2 0 01-2 2z"
//       ></path>
//       <path
//         fill="currentColor"
//         d="M39 42H9c-1.654 0-3-1.346-3-3V7a1 1 0 011-1h34a1 1 0 011 1v32c0 1.654-1.346 3-3 3zM8 8v31a1 1 0 001 1h30a1 1 0 001-1V8H8z"
//       ></path>
//       <path fill="currentColor" d="M12 19H17V36H12z"></path>
//       <path
//         fill="currentColor"
//         d="M14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
//       ></path>
//     </svg>
//   );
// };

export const LinkedInIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.33333)"
      >
        <path
          fill="currentColor"
          d="M41 8H7a1 1 0 00-1 1v32c0 1.654 1.346 3 3 3h30c1.654 0 3-1.346 3-3V9a1 1 0 00-1-1z"
        ></path>
        <path
          fill="#fff"
          d="M39 41H9a2 2 0 01-2-2V7h34v32a2 2 0 01-2 2z"
        ></path>
        <path
          fill="currentColor"
          d="M39 42H9c-1.654 0-3-1.346-3-3V7a1 1 0 011-1h34a1 1 0 011 1v32c0 1.654-1.346 3-3 3zM8 8v31a1 1 0 001 1h30a1 1 0 001-1V8z"
        ></path>
        <path fill="currentColor" d="M12 19H17V36H12z"></path>
        <path
          fill="currentColor"
          d="M14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
        ></path>
      </g>
    </svg>
  );
};

export const WhatsAppIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <path
          fill="cuurentColor"
          d="M42.893 24C41.89 14.46 33.801 7 24 7 13.523 7 5 15.523 5 26c0 2.975.706 5.93 2.047 8.577L4.534 42H4v2c0 1.103.897 2 2 2 .281 0 .391-.032.798-.15l9.004-2.725A18.765 18.765 0 0024 45c10.477 0 19-8.523 19-19v-2z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="#fff"
          d="M24 6C14.059 6 6 14.059 6 24c0 3.072.773 5.962 2.131 8.493L5.25 41c-.25.875-.25.799-.25 1a1 1 0 001 1c.181 0 .125 0 1-.25l8.89-2.696A17.896 17.896 0 0024 42c9.941 0 18-8.059 18-18S33.941 6 24 6z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M29.241 34.313c-.913 0-2.313-.232-5.192-1.367-3.126-1.233-6.2-3.914-8.654-7.549l-.081-.118c-.658-.881-2.18-3.181-2.18-5.619 0-2.631 1.314-4.033 1.876-4.632l.088-.095c.77-.842 1.677-.933 2.032-.933.38.004.697 0 .977.013.661.026 1.416.217 1.96 1.428.26.577.7 1.663 1.042 2.507.216.531.389.96.442 1.074.298.593.312 1.181.035 1.733l-.066.134c-.13.267-.266.543-.554.88l-.241.289c-.17.207-.342.412-.493.57.397.656 1.237 1.912 2.4 2.949a11.573 11.573 0 003.313 2.093c.138.06.252.11.34.153.39-.451 1.102-1.303 1.346-1.669.781-1.167 1.86-.777 2.268-.629.582.211 3.399 1.612 3.427 1.626l.261.128c.427.207.829.401 1.08.821.397.664.175 2.102-.2 3.156-.545 1.529-2.881 2.855-4.13 2.97l-.235.025a6.91 6.91 0 01-.861.062zM17.288 16h-.093a.806.806 0 00-.623.284l-.104.111c-.467.497-1.335 1.424-1.335 3.264 0 1.891 1.361 3.858 1.778 4.416.028.038.073.104.14.201 2.231 3.304 4.977 5.722 7.731 6.808 3.469 1.368 4.364 1.265 5.086 1.182l.286-.031c.628-.057 2.189-.984 2.426-1.649a4.926 4.926 0 00.296-1.429 6.882 6.882 0 01-.161-.076l-.289-.142c-.654-.329-2.86-1.406-3.212-1.534L29.2 27.4c-.453.629-1.315 1.634-1.525 1.873-.409.47-1.134.915-2.251.356-.068-.035-.161-.074-.276-.124-.707-.308-2.179-.947-3.848-2.436-1.502-1.338-2.528-2.968-2.9-3.606-.449-.768-.325-1.509.371-2.203.123-.123.265-.298.408-.473l.268-.32c.122-.143.167-.235.276-.457l.041-.083a51.252 51.252 0 01-.51-1.229 90.574 90.574 0 00-1.013-2.438c-.086-.191-.146-.261-.16-.274.022.024-.017.024-.06.024a19.11 19.11 0 00-.733-.01zm2.497 3.973h.01zm.012-.113zm-1.717-3.876z"
          transform="scale(5.33333)"
        ></path>
        <path
          fill="currentColor"
          d="M6 44c-1.103 0-2-.897-2-2 0-.29.032-.397.137-.754l.151-.521 2.759-8.148A19.033 19.033 0 015 24C5 13.523 13.523 5 24 5s19 8.523 19 19-8.523 19-19 19c-2.855 0-5.611-.631-8.198-1.875L6.798 43.85c-.407.118-.517.15-.798.15zM24 7C14.626 7 7 14.626 7 24c0 2.792.695 5.565 2.012 8.021a.998.998 0 01.066.793l-3.023 8.999c-.033.114-.053.178-.063.223.021-.038.098-.063.247-.105l.487-.142 8.874-2.691a1.01 1.01 0 01.742.064A16.798 16.798 0 0024 41c9.374 0 17-7.626 17-17 0-9.374-7.626-17-17-17z"
          transform="scale(5.33333)"
        ></path>
      </g>
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const M = (props: IconSvgProps) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="20px"
    height="20px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    {' '}
    <image
      id="image0"
      x="0"
      y="0"
      href="data:image/png;base64,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"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};
