import validateEmail from '@/validations/email'

const validateContact = (contact, setErrors, language) => {
  let formErrors = {}
  let formIsValid = true

  if (!contact["name"]){
    formIsValid = false
    formErrors["name"] = language ? 'Name is required.' : 'Nimi on kohustuslik.'
  }

  if (!validateEmail(contact["email"])){
    formIsValid = false
    formErrors["email"] = language ? 'Correct email is required.' : 'Korrektne email on kohustuslik.'
  }

  if (!contact["message"]){
    formIsValid = false
    formErrors["message"] = language ? 'Message is required.' : 'Sõnumi väli on kohustuslik.'
  }

  setErrors(formErrors)
  return formIsValid
}

export default validateContact
