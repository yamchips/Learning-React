import apiClient from "./api-client";
import create from './http-service'

export interface User {
  id: number;
  name: string;
}

export default create('/user')

// class UserService {
//   getAllUsers() {
//     const controller = new AbortController();
//     const request = apiClient.get<User[]>("/users", { signal: controller.signal, });
//     return {request, cancel: () => controller.abort()}
//   }

//   deleteUser(id:number) {
//     return apiClient.delete('/users/' + id)
//   }

//   addUser(newUser: User) {
//     return apiClient.post('/users', newUser);
//   }

//   updateUser(user: User) {
//     return apiClient.patch('/users/' + user.id, user)
//   }
// }
