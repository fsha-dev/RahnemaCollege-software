interface AuthLayoutProps {
  className?: string;
}

function AuthLayout({ className }: AuthLayoutProps) {
  return (
    <section
      className={`bg-[url(./assets/loginSign/heroImage.jpg)] w-full h-screen bg-cover  bg-center bg-no-repeat flex justify-center items-center blur-[2px] ${className}`}
    ></section>
  );
}

export default AuthLayout;
