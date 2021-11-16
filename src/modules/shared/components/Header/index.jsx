import history from 'modules/shared/history';
import UserService from 'modules/shared/services/UserService';
import { TheHeader } from './style';
import { BtnLogout } from 'modules/book/styledOBS';

export default function Header() {
  return (
    <TheHeader>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>

        <BtnLogout
          onClick={() => {
            UserService.removeUser();
            history.push('/login');
          }}
        >
          Logout
        </BtnLogout>
      </div>
    </TheHeader>
  );
}
