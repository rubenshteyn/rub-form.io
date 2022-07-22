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
  const name = document.getElementById('name')
  const lastName = document.getElementById('last-name')
  const mail = document.getElementById('mail')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirm-password')

  function borderValidate(input) {
    input.style.borderColor = "#FF2222";
    document.querySelector('.send-form').classList.toggle('animate-btn')
  }
  function closeForm() {
    document.querySelector('.sign-block-2').classList.add('delete')
    document.querySelector('.sign-block-hide').classList.add('open')
  }

  if(!name.value) {
    borderValidate(name)
  }
  if(!lastName.value) {
    borderValidate(lastName)
  }
  if(!mail.value) {
    borderValidate(mail)
  }
  if(password.value.length < 8) {
    borderValidate(password)
  }
  if(confirmPassword.value.length < 8) {
    borderValidate(confirmPassword)
  } else {
    closeForm()
    sendForm()
  }

  function sendForm() {
    let dataForm = []
    for (const input of inputs) {
      dataForm.push(input.value)
    }

    const holders = document.querySelectorAll('.holder')
    for (const holder of holders) {
      dataForm.push(holder.textContent)
    }
    alert(`
    Your name: ${dataForm[0]}
    Your last name: ${dataForm[1]}
    Your mail: ${dataForm[2]}
    Your password: ${dataForm[3]}
    Your nationality: ${dataForm[5]}
    Your date of birth: ${dataForm[6]} ${dataForm[7]} ${dataForm[8]}
    }
  `);
  }

})