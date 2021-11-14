import axios from "../config/axios";
import { Item } from "../types/Item"
import { CreateItem } from "../types/CreateItem"

class TutorialDataService {
  getAll() {
    return axios.get<Array<Item>>("/task");
  }

  get(id: string) {
    return axios.get<Item>(`/task/${id}`);
  }

  create(data: CreateItem) {
    return axios.post<CreateItem>("/task/create", data);
  }

  update(data: CreateItem, id: string) {
    return axios.put<any>(`/task/${id}`, data);
  }

  delete(id: any) {
    return axios.delete<any>(`/task/${id}`);
  }
}

export default new TutorialDataService();
