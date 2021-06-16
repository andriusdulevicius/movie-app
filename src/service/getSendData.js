export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';
  static blogApiUrl = 'http://localhost:3002/api/posts';

  static async getAllTodos(successCallBack) {
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

  static async deleteTodo(id, successCallBack) {
    const resp = await fetch(GetSendData.todoApiUrl + '/' + id, {
      method: 'DELETE',
    });
    const data = resp.json();
    successCallBack(data);
  }

  static async checkTodo(id, doneStatus, successCallBack) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${id}/check`, {
      method: 'PATCH',
      body: JSON.stringify({ isDone: !doneStatus }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    successCallBack(data);
  }

  static async checkFavTodo(id, favStatus, successCallBack) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/${id}/favCheck`, {
      method: 'PATCH',
      body: JSON.stringify({ isFavourite: !favStatus }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = resp.json();
    successCallBack(data);
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

  static async getAllPosts(successCallBack) {
    const resp = await fetch(GetSendData.blogApiUrl);
    const data = await resp.json();
    successCallBack(data);
  }

  static async addNewPost(title, author, text, successCallBack) {
    const newPost = { title, author, text };
    const resp = await fetch(GetSendData.blogApiUrl + '/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    const data = await resp.json();
    successCallBack(data);
  }

  static async deletePost(id, successCallBack) {
    const resp = await fetch(GetSendData.blogApiUrl + '/' + id, {
      method: 'DELETE',
    });
    const data = resp.json();
    successCallBack(data);
  }
}
