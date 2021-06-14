export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static getAllTodos(successCallBack) {
    fetch(GetSendData.todoApiUrl)
      .then((resp) => resp.json())
      .then((res) => {
        successCallBack(res);
      })
      .catch((err) => console.log(err));
  }

  static;
}
