// import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import LoginCard from 'src/components/auth/LoginCard/LoginCard';

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <LoginCard />
    </>
  );
};

export default LoginPage;
