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

  static addNewTodo(title, successCallBack) {
    const newTodo = { title: title };
    fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((res) => {
        successCallBack(res);
      })
      .catch((err) => console.log(err));
  }

  static deleteTodo(id, successCallBack) {
    fetch(GetSendData.todoApiUrl + '/' + id, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((res) => {
        successCallBack(res);
      })
      .catch((err) => console.log(err));
  }
}
