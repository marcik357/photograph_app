import { AuthGuard } from './../guard/auth.guard';
import { HomeComponent } from '../components/home/home';
import { NotFoundComponent } from '../components/404/notfound';
import { LoginComponent } from '../components/login/login';
import { SignUpComponent } from '../components/signup/signup';
import { UserComponent } from '../components/user/user';
import { NewsComponent } from '../components/news/news';
import { WinnersComponent } from '../components/winners/winners';

const authGuard = new AuthGuard();

export const routes = {
  '/': {component: new HomeComponent(),},
  '/login': {component: new LoginComponent(),},
  '/users/:id': {component: new UserComponent(),
                guards: [authGuard],
  },
  '404': {component: new NotFoundComponent(),},
  '/signup': {component: new SignUpComponent(),},
  '/news': {component: new NewsComponent(),
             guards: [authGuard],
  },
  '/winners': {component: new WinnersComponent(),},
};