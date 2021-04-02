import axios from "axios";
import Swal from "sweetalert2";
import { updateLoading, updateUser } from "../reducers/search_reducer";

export const searchFor = (searchQuery: string): any => (dispatch: any) => {
    if(searchQuery.length < 3) {
      Swal.fire(
        "Error",
        "The username must have at least 3 characters",
        "error",
      )
    } else {
      dispatch(updateLoading(true))

      axios.get(`${process.env.REACT_APP_GITHUB_API}users/${searchQuery}`)
        .then(res => {
          let user = res.data

          axios.get(`${process.env.REACT_APP_GITHUB_API}users/${searchQuery}/repos`)
            .then(res => {
              user.repos = res.data
            }).finally(() => {
              dispatch(updateUser(user))
              dispatch(updateLoading(false))
            })
        })
        .catch(() => {
          dispatch(updateLoading(false))
          Swal.fire(
            "Error",
            "The requested user is doesn't exist or is unavailable",
            "error",
          )
        });
    }
  }