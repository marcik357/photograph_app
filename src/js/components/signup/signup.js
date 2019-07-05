import { AuthService } from './../../services/auth.service';
import { ModalsComponent } from '../modals/modal';
import { regexpEmail } from '../../helpers/regexp';
import { regexpName } from '../../helpers/regexp';
import { regexpPhone } from '../../helpers/regexp';
import { regexpCityCountry } from '../../helpers/regexp';
import { regexpDayOfBirth } from '../../helpers/regexp';
import { regexpMonthOfBirth } from '../../helpers/regexp';
import { regexpYearOfBirth } from '../../helpers/regexp';

export class SignUpComponent {
  constructor() {
    this._authService = new AuthService();
    this._modal = new ModalsComponent();
  };

  render() {
    return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Login to Social.</h3>
                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>
                <form name="signUpForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\w+">
                        <input type="nickname" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="\S+">
                        <input type="first_name" class="form-control form-control-sm mt-3" id="first_name" placeholder="first name" required data-pattern="[A-Z][a-z]+">
                        <input type="last_name" class="form-control form-control-sm mt-3" id="last_name" placeholder="last name" required data-pattern="[A-Z][a-z]+">
                        <input type="phone" class="form-control form-control-sm mt-3" id="phone" placeholder="+380988507793" required data-pattern="\+\d{3}\d{3}\d{2}\d{2}">
                        <select name="gender_orientation" id="gender_orientation" class="form-control form-control-sm mt-3">
                            <option disabled selected>Choose your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="city" class="form-control form-control-sm mt-3" id="city" placeholder="City" required data-pattern="[A-Z][a-z]+">
                        <input type="country" class="form-control form-control-sm mt-3" id="country" placeholder="Country" required data-pattern="[A-Z][a-z]+">                        
                        <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="Enter day of your birthday (exm. 02)" required data-pattern="0[1-9]|1[0-9]|2[0-9]|3[01]">                        
                        <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="Enter month of your birthday (exm. 05)" required data-pattern="0[1-9]|1[0-2]">                        
                        <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="Enter year of your birthday (exm. 1990)" required data-pattern="19[2-9][0-9]|20[0-1][0-9]">                        
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Sign up</button>
                        </div>
                        <a href='#/login'>Login</a>
                        <div></div>
                        <a href='#/'>Go to home page</a>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
  };

  afterRender() {
    document.forms.signUpForm.addEventListener('submit', e => {
      e.preventDefault();

      const {
          email,
          password,
          nickname,
          first_name,
          last_name,
          phone,
          gender_orientation,
          city,
          country, 
          date_of_birth_day,
          date_of_birth_month,
          date_of_birth_year,
      } = e.target.elements;

      if (!regexpEmail.test(email.value)) {
        return console.warn('Укажите верный email');
      } else if (!regexpName.test(first_name.value)) {
        return console.warn('Укажите верное имя');
      } else if (!regexpName.test(last_name.value)) {
        return console.warn('Укажите верную фамилию');
      } else if (!regexpPhone.test(phone.value)) {
        return console.warn('Укажите номер телефона в формате +380988507793');
      } else if (!regexpCityCountry.test(city.value)) {
        return console.warn('Укажите верный город');
      } else if (!regexpCityCountry.test(country.value)) {
        return console.warn('Укажите верную страну')
      } else if (!regexpDayOfBirth.test(date_of_birth_day.value)) {
        return console.warn('Укажите день рождения в формате 01');
      } else if (!regexpMonthOfBirth.test(date_of_birth_month.value)) {
        return console.warn('Укажите месяц рождения в формате 05');
      } else if (!regexpYearOfBirth.test(date_of_birth_year.value)) {
        return console.warn('Укажите год рождения в формате 1990');
      };

      if (!email.value || !password.value || !nickname.value || !first_name.value
         || !last_name.value || !phone.value || !gender_orientation.value || !city.value
         || !country.value || !date_of_birth_day.value || !date_of_birth_month.value || !date_of_birth_year.value) {
        return alert('Заполните все поля')
      }

      const data = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        nickname: document.querySelector('#nickname').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        phone: document.querySelector('#phone').value,
        gender_orientation: document.querySelector('#gender_orientation').value,
        city: document.querySelector('#city').value,
        country: document.querySelector('#country').value,
        date_of_birth_day: document.querySelector('#date_of_birth_day').value,
        date_of_birth_month: document.querySelector('#date_of_birth_month').value,
        date_of_birth_year: document.querySelector('#date_of_birth_year').value,
      }
      
      this._authService.signUp(data)
      .then(response => console.log(response))
      .catch(err => this._modal.render(err.message));
    });
  };
};