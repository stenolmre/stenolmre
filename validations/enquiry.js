import validateEmail from '@/validations/email'

const validateEnquiry = (enquiry, setErrors, language) => {
  let formErrors = {}
  let formIsValid = true

  if (!enquiry["name"]){
    formIsValid = false
    formErrors["name"] = language ? 'Name is required.' : 'Nimi on kohustuslik.'
  }

  if (!validateEmail(enquiry["email"])){
    formIsValid = false
    formErrors["email"] = language ? 'Correct email is required.' : 'Korrektne email on kohustuslik.'
  }

  if (!enquiry["phone"]){
    formIsValid = false
    formErrors["phone"] = language ? 'Phone is required.' : 'Telefon on kohustuslik.'
  }

  if (!enquiry["type"]){
    formIsValid = false
    formErrors["type"] = language ? 'Please choose a website type.' : 'Palun valige veebilehe eelistus.'
  }

  if (!enquiry["message"]){
    formIsValid = false
    formErrors["message"] = language ? 'Message is required.' : 'Sõnumi väli on kohustuslik.'
  }

  setErrors(formErrors)
  return formIsValid
}

export default validateEnquiry
