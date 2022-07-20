window.dragon = {
  init: function () {
    remove_over();
  },

  clickPlay: function (role) {
    unityInstance.SendMessage('DragonEventHandler', 'StartGame', role);
  },

  clickHome: function () {
    unityInstance.SendMessage('DragonEventHandler', 'StopGame');
  },

  clickCustomize: function (data) {
    const modelData = JSON.stringify(data);
    unityInstance.SendMessage('DragonEventHandler', 'OpenAvatarWindow', modelData);
  },

  sendCharacterData: function (data) {
    // const modelData = JSON.stringify(data);
    unityInstance.SendMessage('DragonEventHandler', 'InitInfo', data);
  },

  captureCharacter: function (data) {
    const modelData = JSON.stringify(data);
    unityInstance.SendMessage('DragonEventHandler', 'InitCaptureData', modelData);
  },

  makeCharacter: function (data) {
    const modelData = JSON.stringify(data);
    unityInstance.SendMessage('DragonEventHandler', 'InitPlayer', modelData);
  },

  adminLecture: function (data) {
    if (data === 'ADMIN' || data === 'PRODUCER') {
      unityInstance.SendMessage('DragonEventHandler', 'GoAdminLecture');
    } else if (data === 'USER') {
      unityInstance.SendMessage('DragonEventHandler', 'GoUserLecture');
    }
  },

  clickMap: function (data) {
    // const jsonData = { data: [...data] }
    // const modelData = JSON.stringify(jsonData);
    unityInstance.SendMessage('DragonEventHandler', 'OpenMap');
  },

  outLectureRoom: function () {
    unityInstance.SendMessage('DragonEventHandler', 'ExitLecture');
  },

  lockCamera: function (data) {
    unityInstance.SendMessage('DragonEventHandler', 'LockPersonCamera', data);
  },

  stopUnityGame: function () {
    unityInstance.SendMessage('DragonEventHandler', 'StopGame');
  },

  reactKeyboard: function () {
    unityInstance.SendMessage('DragonEventHandler', 'PassReact');
  },

  unityKeyboard: function () {
    unityInstance.SendMessage('DragonEventHandler', 'PassUnity');
  }

}
