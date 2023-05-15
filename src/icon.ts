import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
/* import specific icons */
import {
  faUserSecret,
  faUser,
  faStar,
  faShieldHalved,
  faCircleExclamation,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faCircleQuestion,
  faStar,
  faShieldHalved,
  faCircleExclamation,
  faMagnifyingGlass
);

export default FontAwesomeIcon;
