## @netless/fastboard

A tiny wrapper of white-web-sdk and @netless/window-manager.

## Usage

```js
import { createFastboard, mount } from "@netless/fastboard";

createFastboard({
  sdkConfig: {
    appIdentifier: "whiteboard_app_id",
  },
  joinRoom: {
    uid: "unique_user_id",
    uuid: "room-uuid",
    roomToken: "NETLESSROOM_...",
  },
  managerConfig: {
    cursor: true,
  },
}).then(app => {
  mount(app, document.getElementById("app"));
});
```

### License

MIT @ [netless](https://github.com/netless-io)
