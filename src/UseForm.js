import { useState, useEffect } from "react";
import axios from 'axios'
require('dotenv/config');


const useForm = (callback, validate) => {
  const [users, setUser] = useState({username: '', password: '', email: '', adress: '', clubId: 0, userTypeId: 0})
  const [clubes, setClubs] = useState({
      1: 'Flamengo',
      2: 'Fluminense',
      3: 'Botafogo',
      4: 'Vasco'
  })
  const [userType, setUserType] = useState({
    1: 'Motorista',
    2: 'Caroneiro'
  })
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = event => {
        const { name, value } = event.target;
        setUser({
          ...users,
          [name]: value
        });
        setClubs({
          ...clubes,
          [name]: value
        })
        setUserType({
          ...userType,
          [name]: value
        })
      };

      const Insertemployee = (e) => {  
            e.preventDefault();
            setErrors(validate(users));
            const apiUrl = process.env.REACT_APP_API_URL  
            const data = { username: users.username, password:users.password, adress: users.adress, clubId: 7, userTypeId: 9};  
            console.log(data)
            axios.post(apiUrl, data)  
              .then((result) => {  
                setIsSubmitting(true);
              });  
          };
          
useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
              callback();
            }
          }, [errors]);          
console.log(users)
  return {
    handleChange,
    Insertemployee,
    users,
    errors,
    clubes,
    userType
  }
}

export default useForm