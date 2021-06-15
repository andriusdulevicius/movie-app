export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  static async getAllTodos(successCallBack) {
    // fetch(GetSendData.todoApiUrl)
    //   .then((resp) => resp.json())
    //   .then((res) => {
    //     successCallBack(res);
    //   })
    //   .catch((err) => console.log(err));

    const resp = await fetch(GetSendData.todoApiUrl);
    const data = await resp.json();
    successCallBack(data);
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

  static checkTodo(id, doneStatus, successCallBack) {
    fetch(GetSendData.todoApiUrl + '/' + id, {
      method: 'PATCH',
      body: JSON.stringify({ isDone: !doneStatus }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => successCallBack(result));
  }

  static checkFavTodo(id, favStatus, successCallBack) {
    fetch(GetSendData.todoApiUrl + '/' + id, {
      method: 'PATCH',
      body: JSON.stringify({ isFavourite: !favStatus }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => successCallBack(result));
  }
}
