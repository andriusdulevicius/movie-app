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

  static async addNewTodo(title, successCallBack) {
    const newTodo = { title: title };
    const resp = await fetch(GetSendData.todoApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await resp.json();
    successCallBack(data);
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
    fetch(`${GetSendData.todoApiUrl}/${id}/check`, {
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
    fetch(`${GetSendData.todoApiUrl}/${id}/favCheck`, {
      method: 'PATCH',
      body: JSON.stringify({ isFavourite: !favStatus }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => successCallBack(result));
  }

  static async editTodo(id, newTitle, editStatus, successCallBack) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${id}/editTodo`, {
      method: 'PUT',
      body: JSON.stringify({ title: newTitle, isEditOn: !editStatus }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await resp.json();

    successCallBack(data);
  }
}
