import Vue from "vue";
import {
  Input,
  Card,
  Image,
  CheckboxGroup,
  Checkbox,
  CheckboxButton,
  Loading
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Loading);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(Image);
Vue.use(Input);
Vue.use(Card);
