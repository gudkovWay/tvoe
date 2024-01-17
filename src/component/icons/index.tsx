type IconsProps = {
  iconName: "logo" | "search" | "home" | "movie" | "brightness" | "tv" | "heart" | "user" | "video" | "arrowUp"
}

const Icons: React.FC<IconsProps> = ({ iconName }) => {
  return (
    <>
      {iconName === "logo" ? (
        <svg width="144" height="50" viewBox="0 0 144 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 14L32 36L0 50L2.18557e-06 0L32 14Z" fill="white" />
          <path d="M24 4.5V9.59375L16 6.0625V1.39876e-06L24 4.5Z" fill="white" />
          <path d="M32 9V13.125L25 10.0352V5.0625L32 9Z" fill="white" />
        </svg>
      ) : iconName === "search" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5187 39.1843C27.7728 39.1837 30.9332 38.0943 33.4965 36.0897L41.5559 44.149L44.1482 41.5567L36.0889 33.4973C38.0946 30.9337 39.1846 27.7726 39.1854 24.5177C39.1854 16.4308 32.6055 9.851 24.5187 9.851C16.4319 9.851 9.85205 16.4308 9.85205 24.5177C9.85205 32.6045 16.4319 39.1843 24.5187 39.1843ZM24.5187 13.5177C30.5852 13.5177 35.5187 18.4512 35.5187 24.5177C35.5187 30.5842 30.5852 35.5177 24.5187 35.5177C18.4522 35.5177 13.5187 30.5842 13.5187 24.5177C13.5187 18.4512 18.4522 13.5177 24.5187 13.5177Z" fill="#BABABA" />
        </svg>
      ) : iconName === "home" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1667 45.333H39.8333C40.8058 45.333 41.7384 44.9467 42.4261 44.2591C43.1137 43.5714 43.5 42.6388 43.5 41.6663V25.1663C43.5014 24.925 43.4551 24.6859 43.3639 24.4625C43.2727 24.2391 43.1382 24.036 42.9683 23.8647L28.3017 9.19799C27.9582 8.85653 27.4935 8.66487 27.0092 8.66487C26.5248 8.66487 26.0602 8.85653 25.7167 9.19799L11.05 23.8647C10.8768 24.0345 10.739 24.2369 10.6445 24.4604C10.5501 24.6838 10.501 24.9238 10.5 25.1663V41.6663C10.5 42.6388 10.8863 43.5714 11.5739 44.2591C12.2616 44.9467 13.1942 45.333 14.1667 45.333ZM23.3333 41.6663V32.4997H30.6667L30.6667 41.6663H23.3333ZM14.1667 25.918L27 13.0847L39.8333 25.918V41.6663H34.3333V32.4997C34.3333 31.5272 33.947 30.5946 33.2594 29.9069C32.5718 29.2193 31.6391 28.833 30.6667 28.833H23.3333C22.3609 28.833 21.4282 29.2193 20.7406 29.9069C20.053 30.5946 19.6667 31.5272 19.6667 32.4997V41.6663H14.1667L14.1667 25.918Z" fill="#BABABA" />
        </svg>
      ) : iconName === "movie" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.6665 10.5L12.3332 10.5C10.311 10.5 8.6665 12.1445 8.6665 14.1667L8.6665 39.8333C8.6665 41.8555 10.311 43.5 12.3332 43.5H41.6665C43.6887 43.5 45.3332 41.8555 45.3332 39.8333V14.1667C45.3332 12.1445 43.6887 10.5 41.6665 10.5ZM41.6683 21.5C41.6665 21.5 41.6665 21.5 41.6683 21.5H40.8158L35.9263 14.1667H41.6665L41.6683 21.5ZM22.4825 21.5L17.593 14.1667H22.3523L27.2418 21.5H22.4825ZM31.6492 21.5L26.7597 14.1667L31.519 14.1667L36.4085 21.5H31.6492ZM12.3332 14.1667H13.1857L18.0752 21.5H12.3332V14.1667ZM12.3332 39.8333L12.3332 25.1667H41.6665L41.6702 39.8333H12.3332Z" fill="#BABABA" />
          <path d="M23.3332 38L33.4165 32.5L23.3332 27V38Z" fill="#BABABA" />
        </svg>
      ) : iconName === "brightness" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8206 27C17.8206 32.0618 21.9383 36.1795 27.0001 36.1795C32.0619 36.1795 36.1796 32.0618 36.1796 27C36.1796 21.9382 32.0619 17.8205 27.0001 17.8205C21.9383 17.8205 17.8206 21.9382 17.8206 27ZM27.0001 21.4872C30.0398 21.4872 32.5129 23.9603 32.5129 27C32.5129 30.0397 30.0398 32.5128 27.0001 32.5128C23.9604 32.5128 21.4873 30.0397 21.4873 27C21.4873 23.9603 23.9604 21.4872 27.0001 21.4872ZM25.1631 39.8333H28.8298V45.3333H25.1631V39.8333ZM25.1631 8.66666H28.8298V14.1667H25.1631V8.66666ZM8.66309 25.1667H14.1631V28.8333H8.66309V25.1667ZM39.8298 25.1667H45.3298V28.8333H39.8298V25.1667ZM12.7349 38.6655L16.6216 34.7752L19.2158 37.3675L15.3291 41.2578L12.7349 38.6655ZM34.7734 16.6307L38.6638 12.7403L41.2561 15.3327L37.3657 19.223L34.7734 16.6307ZM16.6271 19.2248L12.7368 15.3345L15.3309 12.7422L19.2176 16.6325L16.6271 19.2248ZM41.2561 38.6673L38.6638 41.2597L34.7734 37.3693L37.3657 34.777L41.2561 38.6673Z" fill="#BABABA" />
        </svg>
      ) : iconName === "tv" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.6665 10.5L12.3332 10.5C10.311 10.5 8.6665 12.1445 8.6665 14.1667L8.6665 34.3333C8.6665 36.3555 10.311 38 12.3332 38H19.6665L16.3665 42.4L19.2998 44.6L24.2498 38H29.7498L34.6998 44.6L37.6332 42.4L34.3332 38H41.6665C43.6887 38 45.3332 36.3555 45.3332 34.3333V14.1667C45.3332 12.1445 43.6887 10.5 41.6665 10.5ZM12.3332 34.3333L12.3332 14.1667L41.6665 14.1667L41.6683 34.3333H12.3332Z" fill="#BABABA" />
          <path d="M16 27H23.3333V30.6667H16V27Z" fill="#BABABA" />
        </svg>
      ) : iconName === "heart" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9999 13.4241C25.0023 11.5873 22.3876 10.5679 19.6739 10.5678C18.2375 10.5693 16.8157 10.8548 15.4901 11.408C14.1645 11.9611 12.9614 12.7709 11.95 13.7908C7.63622 18.123 7.63805 24.899 11.9537 29.2128L25.3957 42.6548C25.7074 43.203 26.3087 43.5568 26.9999 43.5568C27.2837 43.5541 27.5629 43.4848 27.815 43.3546C28.0672 43.2243 28.2853 43.0368 28.4519 42.807L42.0461 29.2128C46.3617 24.8971 46.3617 18.123 42.0424 13.7835C41.0315 12.7655 39.8294 11.9573 38.5051 11.4054C37.1808 10.8536 35.7605 10.5689 34.3259 10.5678C31.6122 10.5683 28.9977 11.5876 26.9999 13.4241ZM39.4501 16.3758C42.3155 19.256 42.3174 23.755 39.4537 26.6205L26.9999 39.0743L14.546 26.6205C11.6824 23.755 11.6842 19.256 14.5424 16.3831C15.9357 14.9971 17.758 14.2345 19.6739 14.2345C21.5897 14.2345 23.4047 14.9971 24.7871 16.3795L25.7037 17.2961C25.8738 17.4665 26.0759 17.6017 26.2983 17.694C26.5207 17.7862 26.7591 17.8337 26.9999 17.8337C27.2407 17.8337 27.4791 17.7862 27.7015 17.694C27.9239 17.6017 28.1259 17.4665 28.296 17.2961L29.2127 16.3795C31.9847 13.613 36.6817 13.6203 39.4501 16.3758Z" fill="#BABABA" />
        </svg>
      ) : iconName === "user" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 8.66669C25.187 8.66669 23.4147 9.2043 21.9073 10.2115C20.3998 11.2188 19.2249 12.6504 18.5311 14.3254C17.8373 16.0004 17.6558 17.8435 18.0095 19.6217C18.3632 21.3998 19.2362 23.0332 20.5182 24.3152C21.8002 25.5971 23.4335 26.4702 25.2117 26.8239C26.9898 27.1776 28.8329 26.9961 30.5079 26.3022C32.1829 25.6084 33.6146 24.4335 34.6218 22.9261C35.6291 21.4186 36.1667 19.6463 36.1667 17.8334C36.1667 15.4022 35.2009 13.0706 33.4818 11.3515C31.7627 9.63246 29.4312 8.66669 27 8.66669ZM27 23.3334C25.9122 23.3334 24.8488 23.0108 23.9444 22.4064C23.0399 21.8021 22.3349 20.9431 21.9187 19.9381C21.5024 18.9331 21.3935 17.8273 21.6057 16.7604C21.8179 15.6935 22.3417 14.7135 23.1109 13.9443C23.8801 13.1751 24.8601 12.6513 25.927 12.439C26.9939 12.2268 28.0998 12.3357 29.1048 12.752C30.1098 13.1683 30.9687 13.8732 31.5731 14.7777C32.1774 15.6822 32.5 16.7456 32.5 17.8334C32.5 19.292 31.9205 20.691 30.8891 21.7224C29.8576 22.7539 28.4587 23.3334 27 23.3334ZM43.5 43.5V41.6667C43.5 38.2631 42.1479 34.9989 39.7412 32.5921C37.3345 30.1854 34.0703 28.8334 30.6667 28.8334H23.3333C19.9297 28.8334 16.6655 30.1854 14.2588 32.5921C11.8521 34.9989 10.5 38.2631 10.5 41.6667V43.5H14.1667V41.6667C14.1667 39.2355 15.1324 36.904 16.8515 35.1849C18.5706 33.4658 20.9022 32.5 23.3333 32.5H30.6667C33.0978 32.5 35.4294 33.4658 37.1485 35.1849C38.8676 36.904 39.8333 39.2355 39.8333 41.6667V43.5H43.5Z" fill="#BABABA" />
        </svg>
      ) : iconName === "video" ? (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.8333 10.5L14.1667 10.5C12.1445 10.5 10.5 12.1445 10.5 14.1667L10.5 39.8333C10.5 41.8555 12.1445 43.5 14.1667 43.5H39.8333C41.8555 43.5 43.5 41.8555 43.5 39.8333V14.1667C43.5 12.1445 41.8555 10.5 39.8333 10.5ZM21.5 25.1667V14.1667L32.5 14.1667V25.1667H21.5ZM32.5 28.8333V39.8333H21.5V28.8333H32.5ZM14.1667 14.1667H17.8333V17.8333H14.1667V14.1667ZM14.1667 21.5H17.8333V25.1667H14.1667V21.5ZM14.1667 28.8333H17.8333V32.5H14.1667V28.8333ZM14.1667 36.1667H17.8333V39.8333H14.1667V36.1667ZM39.837 39.8333H36.1667V36.1667H39.837V39.8333ZM39.8352 32.5H36.1667V28.8333L39.8352 28.8333V32.5ZM39.8352 25.1667H36.1667V21.5H39.8352V25.1667ZM36.1667 17.8333V14.1667H39.8333V17.8333H36.1667Z" fill="#BABABA" />
        </svg>
      ) : (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.1664 20.4257V38H28.8331V20.4257L36.7036 28.2962L39.2959 25.7038L26.9998 13.4077L14.7036 25.7038L17.2959 28.2962L25.1664 20.4257Z" fill="#BABABA" />
        </svg>
      )}
    </>
  )
}

export default Icons
