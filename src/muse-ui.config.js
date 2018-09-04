import 'muse-ui/lib/styles/base.less'
import {AppBar, Avatar, BottomNav, Button, Drawer, Icon, List, Tabs, TextField} from 'muse-ui'
// 该模块项目官网上并没有说明,但是在github的issues上回答是高分辨率处理
import {retina} from 'muse-ui/lib/utils'
import 'muse-ui/lib/styles/theme.less';

const components = [AppBar, Avatar, BottomNav, Button, Drawer, Icon, List, Tabs, TextField]

export default {
  // 将install方法使用export default公开,该模块可以被Vue.use直接使用并且将Vue对象作为参数传入该函数
  install(Vue) {
    components.forEach(component => {
      Vue.use(component)
    })
    retina()
  }
}
