import validateEmail from '@/utils/validateemail'

const validateEnquiry = (data, setErrors, language) => {
  let formErrors = {}
  let formIsValid = true

  if (!data["name"]){
    formIsValid = false
    formErrors["name"] = language ? 'Name is required.' : 'Nimi on kohustuslik.'
  }

  if (!validateEmail(data["email"])){
    formIsValid = false
    formErrors["email"] = language ? 'Correct email is required.' : 'Korrktne email on kohustuslik.'
  }

  if (!data["phone"]){
    formIsValid = false
    formErrors["phone"] = language ? 'Phone is required.' : 'Telefon on kohustuslik.'
  }

  if (!data["type"]){
    formIsValid = false
    formErrors["type"] = language ? 'Please choose a website type.' : 'Palun valige veebilehe eelistus.'
  }

  if (!data["message"]){
    formIsValid = false
    formErrors["message"] = language ? 'Message is required.' : 'Sõnumi väli on kohustuslik.'
  }

  setErrors(formErrors)
  return formIsValid
}

export default validateEnquiry
