import axios from "axios";

const loginUser = async ({ email, password }) => {
    const response = await axios.post(
        "https://better-clowns-fry.loca.lt/api/auth/sign-in", {
          email, password
      }
    );
    return response.data
}

const registerUser = async ({ name, email, password }) => {
    const response = await axios.post(
        "https://better-clowns-fry.loca.lt/api/auth/sign-in", {
         name, email, password
      }
    );
    return response.data
}

export { loginUser, registerUser };