import './component.scss';

class AppHeadController {
  constructor() {
  }
}

const HeadComponent = {
  selector: 'headComponent',
  template: require('./template.html'),
  controller: AppHeadController
};

export default HeadComponent;