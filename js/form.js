// валидация формы и анимирование кнопки

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    position: "absolute",
    color: "#D11616",
    top: "0px",
    right: "0px"
  },
});

validation
  .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Your name?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Fill in the field',
    }
  ])
  .addField('#last-name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Your last name?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Fill in the field',
    }
  ])
  .addField('#mail', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Your mail?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'email',
      errorMessage: 'Mail is invalid',
    },
    {
      rule: 'required',
      errorMessage: 'Fill in the field',
    }
  ])
  .addField('#password', [{
      rule: 'minLength',
      value: 8,
      errorMessage: 'Your password?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Fill in the field',
    },
    {
      rule: 'password',
      errorMessage: 'Password is invalid',
    }
  ])
  .addField('#confirm-password', [{
      rule: 'minLength',
      value: 8,
      errorMessage: 'Your password?',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Fill in the field',
    },
    {
      rule: 'password',
      errorMessage: 'Password is invalid',
    }
  ])

  const inputs = document.querySelectorAll('.input-field')
  document.querySelector('#form').addEventListener("submit", function (e) {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!input.value) {
      input.style.borderColor = "#FF2222";
      document.querySelector("button").classList.toggle('animate-btn')
    } else {
      document.querySelector("button").classList.remove('animate-btn')
      document.querySelector('.sign-block-2').classList.add('delete')
      document.querySelector('.sign-block-hide').classList.add('open')
    }
  }
})

