export default function Url({
  github,
  url,
  text,
}: {
  github: boolean;
  url: string;
  text: string;
}) {
  if (github) {
    return (
      <a className="third__url" href={url}>
        {text}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0083 0.96167C4.47396 0.96167 0 5.5625 0 11.2544C0 15.8042 2.86662 19.6555 6.84338 21.0186C7.34058 21.1211 7.5227 20.7971 7.5227 20.5246C7.5227 20.286 7.50631 19.4681 7.50631 18.6159C4.72225 19.2295 4.14249 17.3889 4.14249 17.3889C3.69508 16.1961 3.03215 15.8895 3.03215 15.8895C2.12092 15.259 3.09852 15.259 3.09852 15.259C4.1093 15.3271 4.63969 16.3155 4.63969 16.3155C5.53432 17.8831 6.97592 17.4402 7.55588 17.1675C7.63865 16.5029 7.90394 16.0428 8.18563 15.7872C5.96514 15.5486 3.62891 14.6625 3.62891 10.709C3.62891 9.58426 4.02634 8.66409 4.65608 7.94845C4.55672 7.6929 4.20866 6.63617 4.75564 5.22183C4.75564 5.22183 5.60069 4.94913 7.5061 6.27835C8.32188 6.05305 9.16317 5.93844 10.0083 5.93747C10.8533 5.93747 11.7148 6.05688 12.5102 6.27835C14.4159 4.94913 15.2609 5.22183 15.2609 5.22183C15.8079 6.63617 15.4596 7.6929 15.3603 7.94845C16.0066 8.66409 16.3876 9.58426 16.3876 10.709C16.3876 14.6625 14.0514 15.5315 11.8143 15.7872C12.179 16.111 12.4936 16.7243 12.4936 17.6957C12.4936 19.076 12.4773 20.1837 12.4773 20.5244C12.4773 20.7971 12.6596 21.1211 13.1566 21.0188C17.1333 19.6553 20 15.8042 20 11.2544C20.0163 5.5625 15.526 0.96167 10.0083 0.96167Z"
            fill="white"
          />
        </svg>
      </a>
    );
  } else {
    return (
      <a className="third__url" href={url}>
        {text}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 20C15.4706 20 20 15.4608 20 10C20 4.52942 15.4608 0 9.99021 0C4.52942 0 0 4.52942 0 10C0 15.4608 4.53922 20 10 20ZM10 18.3334C5.37256 18.3334 1.67648 14.6275 1.67648 10C1.67648 5.37256 5.36276 1.66667 9.99021 1.66667C14.6177 1.66667 18.3334 5.37256 18.3334 10C18.3334 14.6275 14.6275 18.3334 10 18.3334ZM13.0589 12.4314C13.4902 12.4314 13.7844 12.098 13.7844 11.6471V7.01962C13.7844 6.44119 13.4608 6.2157 12.9608 6.2157H8.31374C7.85296 6.2157 7.55884 6.50001 7.55884 6.93139C7.55884 7.36276 7.86276 7.64707 8.33335 7.64707H10.1177L11.5686 7.49021L10.0392 8.91175L6.42158 12.5295C6.28433 12.6667 6.18629 12.8628 6.18629 13.0589C6.18629 13.5 6.4804 13.7844 6.91178 13.7844C7.14707 13.7844 7.32355 13.6961 7.47061 13.5588L11.0785 9.95097L12.4902 8.44116L12.3432 9.97064V11.6667C12.3432 12.1275 12.6275 12.4314 13.0589 12.4314Z"
            fill="white"
          />
        </svg>
      </a>
    );
  }
}
