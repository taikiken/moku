/**
 * moku
 * (c) inazumatv.com, @author (at)taikiken
 * @license MIT
 */
// polyfill
// - babel-polyfill
// - requestAnimationFrame
// - promise-polyfill
// - whatwg-fetch
import './polyfill';

// event
import EventDispatcher from './event/EventDispatcher';
import Events from './event/Events';
import Rising from './event/Rising';
import Scroll from './event/Scroll';
import Scrolling from './event/Scrolling';
import Touching from './event/Touching';
import Wheel from './event/Wheel';
import Resizing from './event/Resizing';
import ResizingSingle from './event/ResizingSingle';
import Swipe from './event/Swipe';
import NativeResizing from './event/NativeResizing';
import NativeResizingSingle from './event/NativeResizingSingle';

// net
import Ajax from './net/Ajax';
import Cookie from './net/Cookie';
import Queries from './net/Queries';
import AjaxThunk from './net/AjaxThunk';

// tick
import Cycle from './tick/Cycle';
import Fps from './tick/Fps';
import Polling from './tick/Polling';
import Rate from './tick/Rate';

// util
import Type from './util/Type';
import Hit from './util/Hit';
import List from './util/List';
import Text from './util/Text';
import Times from './util/Times';
import Vectors from './util/Vectors';
import Iro from './util/Iro';
import Intersection from './util/Intersection';

// css
import Patterns from './css/Patterns';
import Style from './css/Style';

// device
import Can from './device/Can';
import devices from './device/devices';

// device/os
import Android from './device/os/Android';
import Windows from './device/os/Windows';
import iOS from './device/os/iOS';

// device/browser
import Chrome from './device/browser/Chrome';
import CriOS from './device/browser/CriOS';
import Edge from './device/browser/Edge';
import EdgiOS from './device/browser/EdgiOS';
import EdgA from './device/browser/EdgA';
import Firefox from './device/browser/Firefox';
import FxiOS from './device/browser/FxiOS';
import IE from './device/browser/IE';
import Safari from './device/browser/Safari';

// dom
import Bounding from './dom/Bounding';
import Classes from './dom/Classes';
import Elements from './dom/Elements';

// // ----------------------------------------------
// // promise
// // Promise: To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }

/**
 * **moku**
 * - global Object
 * - public な Class はここからアクセス可能です
 * @type {Object}
 */
const moku = {};
/**
 * version number を取得します
 * @returns {string} version number を返します
 */
moku.version = () => process.env.BUILD_VERSION;
/**
 * build 日時を取得します
 * @returns {string}  build 日時を返します
 */
moku.buildTime = () => process.env.BUILD_TIME;
/**
 * moku.event
 * @type {Object} moku.event object を返します
 */
moku.event = {
  EventDispatcher,
  Events,
  Rising,
  Scroll,
  Wheel,
  Scrolling,
  Touching,
  Resizing,
  ResizingSingle,
  Swipe,
  NativeResizing,
  NativeResizingSingle,
};
/**
 * moku.net
 * @type {Object} moku.net object を返します
 */
moku.net = {
  Ajax,
  Cookie,
  Queries,
  AjaxThunk,
};
/**
 * moku.tick
 * @type {Object} moku.tick object を返します
 */
moku.tick = {
  Cycle,
  Fps,
  Polling,
  Rate,
};
/**
 * moku.util
 * @type {Object} moku.util object を返します
 */
moku.util = {
  Type,
  List,
  Text,
  Times,
  Vectors,
  Hit,
  Iro,
  Intersection,
};
/**
 * moku.util
 * @type {Object} moku.css object を返します
 */
moku.css = {
  Patterns,
  Style,
  Can,
};
/**
 * moku.util
 * @type {Object} moku.dom object を返します
 */
moku.dom = {
  Bounding,
  Classes,
  Elements,
};

moku.device = {
  Can,
  devices,
  os: {
    Android,
    Windows,
    iOS,
  },
  browser: {
    Chrome,
    CriOS,
    Edge,
    EdgiOS,
    EdgA,
    Firefox,
    FxiOS,
    IE,
    Safari,
  },
};

// export
/**
 * global object `moku`
 * @type {Object}
 */
window.moku = moku;

export default moku;
