export const GetData = () => {
  return fetch("https://randomuser.me/api/?nat=us&results=100")
   .then(response => response.json())
   .then((response) => {
    return response
 })
}