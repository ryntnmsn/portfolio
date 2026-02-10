export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#!">
          <img
            src="/assets/ryan_logo.svg"
            alt=""
            className="w-36 mx-auto mb-2 dark:hidden"
          />
          <img
            src="/assets/ryan_logo.svg"
            alt=""
            className="w-36 mx-auto mb-2 hidden dark:block"
          />
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
          <img
            src="/assets/mail_icon_dark.png"
            alt=""
            className="w-5 hidden dark:block"
          />

          <a href="mailto:ryn.tnmsn@gmail.com">ryn.tnmsn@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="#" target="_blank">
            .ryan
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
